import { uniqueId } from '@antv/util';
import { EdgeConfig, IPoint, NodeConfig } from '../../types';
import { Item } from '../base/item';
import { isNil } from '@antv/g';
import { action, makeObservable } from 'mobx';
import { ElementType, getFactory } from '../factory';
const END_MAP = { source: 'start', target: 'end' };
const POINT_NAME_SUFFIX = 'Point'; // 起点或者结束点的后缀，如 startPoint, endPoint
const ANCHOR_NAME_SUFFIX = 'Anchor';
type SourceTarget = 'source' | 'target';

export class Edge extends Item<EdgeConfig> {
  graph = null;

  constructor(graph, model) {
    super(graph);
    this.graph = graph;
    this.model = { ...model };
    this.model.id = this.model.id || uniqueId();
    this.model.type = model.type || 'line';
    this.model.visible = typeof this.model.visible === 'boolean' ? this.model.visible : true;
    makeObservable(this, {
      updatePoints: action,
    });
  }

  get type() {
    return 'edge';
  }

  getSource() {
    const source = this.model.source;
    return this.graph.findById(source);
  }

  getTarget() {
    const target = this.model.target;
    return this.graph.findById(target);
  }

  /**
   * 获取节点上的连接点
   * @param name
   * @param model
   * @param controlPoints
   * @returns
   */
  getLinkPoint = (name: SourceTarget, controlPoints: IPoint[]): IPoint => {
    const model = this.model;
    const sourceId = model[name];
    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    let point = model[pointName];

    if (!isNil(sourceId)) {
      const anchorName = name + ANCHOR_NAME_SUFFIX;
      const prePoint = this.getPrePoint(name, controlPoints);
      const anchorIndex = model[anchorName];
      let anchorPoint;
      if (!isNil(anchorIndex)) {
        // 如果有锚点，则使用锚点索引获取连接点
        anchorPoint = this.graph.findById(sourceId)?.getLinkPointByAnchor(anchorIndex);
      }
      // 如果锚点没有对应的点或者没有锚点，则直接计算连接点
      point = anchorPoint || this.graph.findById(sourceId)?.getLinkPoint(prePoint);
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
    const edgeType = getFactory(ElementType.edge).getElement(this.model.type);
    return edgeType.getControlPoints?.({ startPoint, endPoint });
  };

  /**
   * 获取边相关节点的位置
   * - 返回节点坐标位置
   * - 返回 model 中定义的 startPoint/endPoint
   * @param name
   * @returns
   */
  getEndPoint = (name: SourceTarget): NodeConfig | IPoint => {
    const edge = this.model;

    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    const edgeState = edge;
    const sourceId = edgeState[name];

    // todo position
    const nodeState = this.graph.findById(sourceId)?.getModel();
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
    const edgeState = this.model;
    const sourceId = edgeState[name];

    const nodeState = this.graph.findById(sourceId)?.getModel();

    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    // 如果有端点，直接使用 model
    if (nodeState) {
      const bbox = this.graph.findById(sourceId)?.getBBox(sourceId);
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
    // const { edge, linkCenter } = this.model;
    const linkCenter = false;
    const edge = this.model;
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

  updatePoints() {
    const points = this.getPoints();
    this.model = { ...this.model };
    this.model.startPoint = { ...points.startPoint };
    this.model.endPoint = { ...points.endPoint };
  }
}
