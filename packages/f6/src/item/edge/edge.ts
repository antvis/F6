// @ts-nocheck
import { isNil } from '@antv/util';
import { Item } from '../base/item';

const END_MAP = { source: 'start', target: 'end' };
const ITEM_NAME_SUFFIX = 'Node'; // 端点的后缀，如 sourceNode, targetNode
const POINT_NAME_SUFFIX = 'Point'; // 起点或者结束点的后缀，如 startPoint, endPoint
const ANCHOR_NAME_SUFFIX = 'Anchor';

export class Edge extends Item {
  graph = null;

  constructor(model, graph) {
    super();
    this.graph = graph;
    this.model = { ...model };
    this.model.id = `${this.getSource().id}-${this.getTarget().id}`;
    this.model.type = model.type || 'line';
    this.model.visible = true;
  }

  get type() {
    return 'edge';
  }

  getNodeEntity(id) {
    return this.graph.getItem(id).model;
  }

  getSource() {
    const source = this.model.source;
    return this.getNodeInstance(source);
  }

  getTarget() {
    const target = this.model.target;
    return this.getNodeInstance(target);
  }

  getNodeInstance(id) {
    return this.graph.getItem(id);
  }

  getLinkPoint = (name: SourceTarget, model: EdgeConfig, controlPoints: IPoint[]): IPoint => {
    const sourceId = model[name];
    let point;
    const anchorName = name + ANCHOR_NAME_SUFFIX;
    const prePoint = this.getPrePoint(name, controlPoints, model.id);
    const anchorIndex = model[anchorName];

    if (!isNil(anchorIndex)) {
      // 如果有锚点，则使用锚点索引获取连接点
      point = this.getNodeInstance(sourceId).getLinkPointByAnchor(anchorIndex);
    }
    // 如果锚点没有对应的点或者没有锚点，则直接计算连接点
    point = point || this.getNodeInstance(sourceId).getLinkPoint(prePoint);

    return point;
  };

  getPrePoint = (name: SourceTarget, controlPoints: IPoint[]): NodeConfig | IPoint => {
    if (controlPoints && controlPoints.length) {
      const index = name === 'source' ? 0 : controlPoints.length - 1;
      return controlPoints[index];
    }
    const oppositeName = name === 'source' ? 'target' : 'source'; // 取另一个节点的位置
    return this.getEndPoint(oppositeName);
  };

  getControlPointsByCenter = () => {
    const startPoint = this.getEndPoint('source');
    const endPoint = this.getEndPoint('target');
    return this.getControlPoints({ startPoint, endPoint });
  };

  getEndPoint = (name: SourceTarget): NodeConfig | IPoint => {
    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    const edgeState = this.model;
    const sourceId = edgeState[name];
    const nodeState = this.getNodeEntity(sourceId);
    // 如果有端点，直接使用 model
    if (nodeState) {
      return { x: nodeState.x, y: nodeState.y };
    } // 否则直接使用点
    return null;
    // return this.get(pointName);
  };

  getEndCenter = (name): IPoint => {
    const itemName = name + ITEM_NAME_SUFFIX;
    const edgeState = this.model;
    const sourceId = edgeState[itemName];
    const nodeState = this.getNodeEntity(sourceId);

    const pointName = END_MAP[name] + POINT_NAME_SUFFIX;
    // 如果有端点，直接使用 model
    if (nodeState) {
      const bbox = this.getNodeInstance(sourceId).getBBox(sourceId);
      return {
        x: bbox.centerX,
        y: bbox.centerY,
      };
    } // 否则直接使用点
    return edgeState[pointName];
  };

  getControlPoints() {}
  inject(key, fn) {
    this[key] = fn;
  }
}
