import { Component, jsx } from '@antv/f-engine';
import { isNil } from '@antv/g';
import { IPoint, NodeConfig } from '../../types';
import { getEdge } from './components/edges';

const END_MAP = { source: 'start', target: 'end' };
const ITEM_NAME_SUFFIX = 'Node'; // 端点的后缀，如 sourceNode, targetNode
const POINT_NAME_SUFFIX = 'Point'; // 起点或者结束点的后缀，如 startPoint, endPoint
const ANCHOR_NAME_SUFFIX = 'Anchor';

type SourceTarget = 'source' | 'target';

export class Edge extends Component {
  edgeShapeRef = { current: null };

  willMount(): void {
    const { edge, item } = this.props;
    // @ts-ignore
    this.container.item = item;
    this.context.f6Context.addNode(edge.id, this);
  }

  didMount(): void {
    console.log('edge mount');
  }

  /**
   * 获取节点上的连接点
   * @param name
   * @param model
   * @param controlPoints
   * @returns
   */
  getLinkPoint = (name: SourceTarget, controlPoints: IPoint[]): IPoint => {
    const { edge: model } = this.props;
    const f6Context = this.context.f6Context;

    const sourceId = model[name];
    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    let point = model[pointName];

    if (!point) {
      const anchorName = name + ANCHOR_NAME_SUFFIX;
      const prePoint = this.getPrePoint(name, controlPoints);
      const anchorIndex = model[anchorName];

      if (!isNil(anchorIndex)) {
        // 如果有锚点，则使用锚点索引获取连接点
        point = f6Context.getNodeLike(sourceId)?.getLinkPointByAnchor(anchorIndex);
      }
      // 如果锚点没有对应的点或者没有锚点，则直接计算连接点
      point = point || f6Context.getNodeLike(sourceId)?.getLinkPoint(prePoint);
    }

    return point;
  };

  /**
   * 获取相反的节点位置点，传入source, 就取 target，反之亦然，用来连线求交点
   * - 如果有控制点，返回控制点，比如 source 的中心点和最后一个控制点
   * - 返回节点中心坐标点
   * @param name
   * @param controlPoints
   * @returns
   */
  getPrePoint = (name: SourceTarget, controlPoints: IPoint[]): NodeConfig | IPoint => {
    if (controlPoints && controlPoints.length) {
      const index = name === 'source' ? 0 : controlPoints.length - 1;
      return controlPoints[index];
    }
    const oppositeName = name === 'source' ? 'target' : 'source'; // 取另一个节点的位置
    return this.getEndPoint(oppositeName);
  };

  /**
   * 计算控制点
   * @returns
   */
  getControlPointsByCenter = () => {
    const startPoint = this.getEndPoint('source');
    const endPoint = this.getEndPoint('target');
    return this.getControlPoints({ startPoint, endPoint });
  };

  /**
   * 获取边相关节点的位置
   * - 返回节点坐标位置
   * - 返回 model 中定义的 startPoint/endPoint
   * @param name
   * @returns
   */
  getEndPoint = (name: SourceTarget): NodeConfig | IPoint => {
    const { edge } = this.props;
    const f6Context = this.context.f6Context;

    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    const edgeState = edge;
    const sourceId = edgeState[name];

    // todo position
    const nodeState = f6Context.getNodeLike(sourceId).getModel();
    // 如果有端点，直接使用 model
    if (nodeState) {
      return { x: nodeState.x, y: nodeState.y };
    } // 否则直接使用点
    return edgeState[pointName];
  };

  /**
   * 返回节点中心
   * - 返回节点中心坐标位置
   * - 返回 model 中定义的 startPoint/endPoint
   * @param name
   * @returns
   */
  getEndCenter = (name): IPoint => {
    const { edge } = this.props;
    const f6Context = this.context.f6Context;

    const edgeState = edge;
    const sourceId = edgeState[name];

    const nodeState = f6Context.getNodeLike(sourceId).getModel();

    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    // 如果有端点，直接使用 model
    if (nodeState) {
      const bbox = f6Context.getNodeLike(sourceId).getBBox(sourceId);
      return {
        x: bbox.centerX,
        y: bbox.centerY,
      };
    } // 否则直接使用点
    return edgeState[pointName];
  };

  /**
   * 返回边的起点和终点
   * - 如果 linkcenter = true, 直接返回始末节点的中心点
   * - 否则计算锚点或交点
   * @returns
   */
  getPoints() {
    const { edge, linkCenter } = this.props;
    if (!edge) return;
    let startPoint, endPoint;
    if (linkCenter) {
      startPoint = this.getEndCenter('source');
      endPoint = this.getEndCenter('target');
    } else {
      const controlPoints = edge.controlPoints || this.getControlPointsByCenter();
      startPoint = this.getLinkPoint('source', controlPoints);
      endPoint = this.getLinkPoint('target', controlPoints);
    }
    return {
      startPoint,
      endPoint,
    };
  }
  /**
   * 查找返回自定义边的类
   * @returns
   */
  getShapeConstrutor() {
    const { edge } = this.props;
    const Shape = getEdge(edge?.type || 'line');

    if (!Shape) {
      console.warn('不存在对应的 Node Shape');
      return null;
    }
    return Shape;
  }

  /**
   * 返回控制点数组，由每个自定义边控制，由于在绘制 path 之前就需要计算并传入，设计为静态函数，不用实例化就可以调用
   * @param cfg
   * @returns
   */
  getControlPoints = (cfg) => {
    return this.getShapeConstrutor()?.getControlPoints(cfg);
  };

  render() {
    const { edge } = this.props;
    if (!edge) {
      return null;
    }

    const Shape = this.getShapeConstrutor();

    if (!Shape) {
      console.warn('不存在对应的 Edge 节点定义');
      return null;
    }

    const points = this.getPoints();

    if (
      !points.startPoint ||
      !points.endPoint ||
      Number.isNaN(points.startPoint.x) ||
      Number.isNaN(points.endPoint)
    ) {
      return null;
    }

    return <Shape edge={{ ...edge, ...points }} ref={this.edgeShapeRef}></Shape>;
  }

  didUnmount(): void {
    console.log('edge unmount');
    this.context.f6Context.removeEdge(this.props.edge.id);
  }
}
