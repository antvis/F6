import { uniqueId } from '@antv/util';
import { EdgeConfig } from '../../types';
import { Item } from '../base/item';

const END_MAP = { source: 'start', target: 'end' };
const ITEM_NAME_SUFFIX = 'Node'; // 端点的后缀，如 sourceNode, targetNode
const POINT_NAME_SUFFIX = 'Point'; // 起点或者结束点的后缀，如 startPoint, endPoint
const ANCHOR_NAME_SUFFIX = 'Anchor';

type SourceTarget = 'source' | 'target';

export class Edge extends Item<EdgeConfig> {
  graph = null;

  constructor(model, graph) {
    super();
    this.graph = graph;
    this.model = { ...model };
    this.model.id = this.model.id || uniqueId();
    this.model.type = model.type || 'line';
    this.model.visible = typeof this.model.visible === 'boolean' ? this.model.visible : true;
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
}
