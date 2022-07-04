import { uniqueId } from '@antv/util';
import { EdgeConfig } from '../../types';
import { Item } from '../base/item';

export class Edge extends Item<EdgeConfig> {
  graph = null;

  constructor(graph, model) {
    super(graph);
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
