import { Component, jsx } from '@antv/f-engine';
import { each } from '@antv/util';
import { IShape, Point } from '../../types';
import {
  getCircleIntersectByPoint,
  getEllipseIntersectByPoint,
  getNearestPoint,
  getRectIntersectByPoint,
} from '../../utils/math';
import { calcBBox, calcMatrix, calculateBBox } from '../adapter/element';
import { getNode } from './components/nodes';

export class Node extends Component {
  nodeRef = { current: null };
  isAnimating = false;
  animate = false;

  /**
   * 返回 View 侧的 model
   * @returns
   */
  getModel() {
    return this.props.node;
  }

  shouldUpdate(_nextProps: any): boolean {
    return !this.isAnimating;
  }

  willMount(): void {
    const { node, item } = this.props;
    // @ts-ignore
    (this.container as IShape).item = item;
    // 管理挂在 context 上的 node 实例
    this.context.f6Context.addNode(node.id, this);
  }

  didMount(): void {
    const { node } = this.props;
    const { x, y, id } = node;

    // 设置容器位置和是否可以拖动，保证内部系统完整（拖放时、设置位置时表现能够一致）
    this.container.setLocalPosition(x, y);
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
  }

  didUpdate(): void {
    const { x, y } = this.props.node;
    // 每次update更新位置
    // @todo: x, y 不变化不更新
    this.container.setLocalPosition(x, y);
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
    const { node } = this.props;
    const id = node.id;
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
    const { node } = this.props;
    const nodeState = node;
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
   * 获取包围盒
   * @returns
   */
  getBBox = () => {
    const { node } = this.props;
    if (!node) return;
    let matrix = calcMatrix(this.container);
    return calculateBBox(calcBBox(this.getKeyShape()), matrix);
  };

  getShapeNode() {
    return this.nodeRef.current;
  }

  getKeyShape() {
    return this.nodeRef.current?.getKeyShape();
  }

  getNodeRoot() {
    return this.nodeRef.current?.getRootShape();
  }

  getAnchorPoints = () => {
    const { node } = this.props;
    return this.getShapeNode()?.getAnchorPoints(node);
  };

  onFrame = () => {
    this.isAnimating = true;
    const { item } = this.props;
    let { x, y } = this.getNodeRoot().style;
    if (typeof x === 'string') {
      x = Number(x.replace('px', ''));
    }
    if (typeof y === 'string') {
      y = Number(y.replace('px', ''));
    }

    item.setPosition({ x, y });
  };

  onEnd = () => {
    this.isAnimating = false;
  };

  render() {
    const { node, appear, update, end, states } = this.props;
    const Shape = getNode(node?.type);
    if (!Shape) {
      console.warn('不存在对应的 Node 定义');
      return null;
    }

    node.label = node.id;
    return (
      <Shape
        node={node}
        animation={{
          appear,
          update,
          end,
        }}
        onFrame={this.onFrame}
        onEnd={this.onEnd}
        ref={this.nodeRef}
        states={states}
      ></Shape>
    );
  }
  didUnmount(): void {
    console.log('unmount');
    this.context.f6Context.removeNode(this.props.node.id);
  }
}
