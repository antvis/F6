import { each } from '@antv/util';
import { EdgeConfig } from '../../types';
import { ItemManger } from '../base/manager';
import { Edge } from './edge';
export class EdgeManager extends ItemManger<EdgeConfig, Edge> {
  graph = null;

  constructor(graph) {
    super(graph);
    this.graph = graph;
  }

  createItem(data: any): Edge {
    return new Edge(this.graph, data);
  }

  getEdges(id) {
    return Object.values(this.items).filter(
      (item) => item.model.source === id || item.model.target === id,
    );
  }

  getInEdges(id) {
    return Object.values(this.items).filter((item) => item.model.source === id);
  }

  getOutEdges(id) {
    return Object.values(this.items).filter((item) => item.model.target === id);
  }

  updatePoints() {
    each(this.items, (edge) => {
      edge.updatePoints();
    });
  }
}
