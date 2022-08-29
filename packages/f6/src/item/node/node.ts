import { action, makeObservable } from 'mobx';
import { Graph } from '../../graph/graph';
import { NodeConfig, Point } from '../../types';
import { Item } from '../base/item';
import { Edge } from '../edge/edge';
import {
  getCircleIntersectByPoint,
  getEllipseIntersectByPoint,
  getNearestPoint,
  getRectIntersectByPoint,
} from '../../utils/math';
import { each } from '@antv/util';
import { ElementType, getFactory } from '../factory';

export class Node<T extends NodeConfig = NodeConfig> extends Item<NodeConfig> {
  graph: Graph = null;
  model: T;

  constructor(graph: Graph, model: T) {
    super(graph);
    this.graph = graph;
    this.model = { ...model };
    this.model.type = model.type || 'circle';
    this.model.visible = typeof this.model.visible === 'boolean' ? this.model.visible : true;
    makeObservable(this, {
      setPosition: action,
    });
  }

  get type() {
    return 'node';
  }

  setPosition(position) {
    this.updateItem(position);
  }

  getParent() {
    return this.graph.findById(this.model.parent);
  }

  /**
   * 获取从节点关联的所有边
   */
  public getEdges() {
    return this.graph.edgeManager.getEdges(this.model.id);
  }

  /**
   * 获取所有的入边
   */
  public getInEdges() {
    return this.graph.edgeManager.getInEdges(this.model.id);
  }

  /**
   * 获取所有的出边
   */
  public getOutEdges() {
    return this.graph.edgeManager.getOutEdges(this.model.id);
  }

  /**
   * 获取节点的邻居节点
   *
   * @returns {INode[]}
   * @memberof Node
   */
  public getNeighbors(type?: 'target' | 'source' | undefined) {
    const edges = this.getEdges();

    if (type === 'target') {
      // 当前节点为 source，它所指向的目标节点
      const neighhborsConverter = (edge: Edge) => {
        return edge.getSource() === this;
      };
      return edges.filter(neighhborsConverter).map((edge) => edge.getTarget());
    }
    if (type === 'source') {
      // 当前节点为 target，它所指向的源节点
      const neighhborsConverter = (edge: Edge) => {
        return edge.getTarget() === this;
      };
      return edges.filter(neighhborsConverter).map((edge) => edge.getSource());
    }

    // 若未指定 type ，则返回所有邻居
    const neighhborsConverter = (edge: Edge) => {
      return edge.getSource() === this ? edge.getTarget() : edge.getSource();
    };
    return edges.map(neighhborsConverter);
  }

  getSize() {
    let size: number | number[] = this.model.size;

    // size 是数组，但长度为1，则补长度为2
    if (Array.isArray(size) && size.length === 1) {
      size = [size[0], size[0]];
    }

    // size 为数字，则转换为数组
    if (!Array.isArray(size)) {
      size = [size, size];
    }
    return size;
  }

  getBBox() {
    const size = this.getSize();
    let { x, y } = this.model;
    return {
      x,
      y,
      minX: x - size[0] / 2,
      minY: y - size[1] / 2,
      maxX: x + size[0] / 2,
      maxY: y + size[1] / 2,
      centerX: x,
      centerY: y,
      width: size[0],
      height: size[1],
    };
  }

  getAnchorPoints() {
    const nodeType = getFactory(ElementType.node).getElement(this.model.type);
    return nodeType.getAnchorPoints?.(this.model) || [];
  }

  /**
   * 把锚点从 0 - 1 的比例，按 bbox 映射为真实坐标，可以表示相对于当前 bbox 的任意位置。
   * 用来定义边在 keyShape 上的连接点
   * [
   *  [0, 0.5],
   *  [0, 0.5]
   * ]
   * =>
   * [
   *  {x: 0, y: 100, index: 0},
   *  {x: 0, y: 100, index: 1},
   * ]
   */
  calcAnchorPoints() {
    const node = this.model;
    const bbox = this.getBBox();
    const anchorPoints = [];
    const points = this.getAnchorPoints();
    each(points, (pointArr, index) => {
      const point = {
        x: bbox.minX + pointArr[0] * bbox.width,
        y: bbox.minY + pointArr[1] * bbox.height,
        anchorIndex: index,
      };
      anchorPoints.push(point);
    });

    return anchorPoints;
  }

  /**
   * 根据 index 拿到预定义的 anchorPoints 上 keyShape 的坐标点
   * @param index
   * @returns
   */
  getLinkPointByAnchor(index: number) {
    const anchorPoints = this.calcAnchorPoints();
    return anchorPoints[index];
  }

  /**
   * 获取 point 与当前 keyShape 的边的交点
   * - 返回距离最近的预定义好的 anchorPoint
   * - 返回交点
   * - 返回中心点
   * @param point
   * @returns
   */
  getLinkPoint = (point: Point): Point | null => {
    const nodeType = getFactory(ElementType.node).getElement(this.model.type);
    const type: string = nodeType['shape'];
    const bbox = this.getBBox();
    const centerX = bbox.centerX;
    const centerY = bbox.centerY;
    const anchorPoints = this.calcAnchorPoints();
    let intersectPoint: Point | null;
    switch (type) {
      case 'circle':
        intersectPoint = getCircleIntersectByPoint(
          {
            x: centerX!,
            y: centerY!,
            r: bbox.width / 2,
          },
          point,
        );
        break;
      case 'ellipse':
        intersectPoint = getEllipseIntersectByPoint(
          {
            x: centerX!,
            y: centerY!,
            rx: bbox.width / 2,
            ry: bbox.height / 2,
          },
          point,
        );
        break;
      default:
        intersectPoint = getRectIntersectByPoint(
          { x: bbox.minX, y: bbox.minY, width: bbox.width, height: bbox.height },
          point,
        );
    }
    let linkPoint = intersectPoint;
    // 如果存在锚点，则使用交点计算最近的锚点
    if (anchorPoints.length) {
      if (!linkPoint) {
        // 如果计算不出交点
        linkPoint = point;
      }
      linkPoint = getNearestPoint(anchorPoints, linkPoint);
    }
    if (!linkPoint) {
      // 如果最终依然没法找到锚点和连接点，直接返回中心点
      linkPoint = { x: centerX, y: centerY } as Point;
    }
    return linkPoint;
  };

  destroy() {
    super.destroy();
  }
}
