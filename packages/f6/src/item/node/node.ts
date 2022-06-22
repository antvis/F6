import { each } from '@antv/util';
import { action, makeObservable } from 'mobx';
import { Graph } from '../../graph/graph';
import { IPoint, NodeConfig, Point } from '../../types';
import {
  distance,
  getCircleIntersectByPoint,
  getEllipseIntersectByPoint,
  getRectIntersectByPoint,
} from '../../utils/math';
import { Item } from '../base/item';
import { Edge } from '../edge/edge';

const getNearestPoint = (points: IPoint[], curPoint: Point): IPoint => {
  let index = 0;
  let nearestPoint = points[0];
  let minDistance = distance(points[0], curPoint);
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const dis = distance(point, curPoint);
    if (dis < minDistance) {
      nearestPoint = point;
      minDistance = dis;
      index = i;
    }
  }
  nearestPoint.anchorIndex = index;
  return nearestPoint;
};

export class Node extends Item<NodeConfig> {
  graph: Graph = null;

  constructor(model: NodeConfig, graph: Graph) {
    super();
    this.graph = graph;
    this.model = { ...model };
    this.model.type = model.type || 'circle';
    this.model.visible = typeof this.model.visible === 'boolean' ? this.model.visible : true;
    makeObservable(this, {
      setPosition: action,
      translate: action,
    });
  }

  get type() {
    return 'node';
  }

  setPosition(position) {
    this.model = { ...this.model, ...position };
  }

  getParent() {
    return this.graph.getItem(this.model.parent);
  }

  calcAnchorPoints() {
    const id = this.model.id;
    const bbox = this.getBBox();
    const anchorPoints = [];
    const points = this.getAnchorPoints(id);
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

  getLinkPointByAnchor(index: number) {
    const anchorPoints = this.calcAnchorPoints();
    return anchorPoints[index];
  }

  getLinkPoint = (point: Point): Point | null => {
    const id = this.model.id;
    const nodeState = this.model;
    const type: string = nodeState['type'];
    const itemType: string = nodeState['type'];
    let centerX;
    let centerY;
    const bbox = this.getBBox();
    if (itemType === 'combo') {
      centerX = bbox.centerX || (bbox.maxX + bbox.minX) / 2;
      centerY = bbox.centerY || (bbox.maxY + bbox.minY) / 2;
    } else {
      centerX = bbox.centerX;
      centerY = bbox.centerY;
    }
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
        intersectPoint = getRectIntersectByPoint(bbox, point);
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

  getAnchorPoints(id) {
    return [];
  }

  translate(pos) {
    const { x, y } = this.model;
    this.model = {
      ...this.model,
      ...{
        x: x + pos.x,
        y: y + pos.y,
      },
    };
  }

  inject(key, fn) {
    this[key] = fn;
  }

  destroy() {
    super.destroy();
    this.getAnchorPoints = null;
  }
}
