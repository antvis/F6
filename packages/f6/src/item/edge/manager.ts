// @ts-nocheck
import { Item } from '../base/item';
import { ItemManger } from '../base/manager';
import { Edge } from './edge';
export class EdgeManager extends ItemManger<Edge> {
  graph = null;

  constructor(graph) {
    super();
    this.graph = graph;
  }
  createItem(data: any): Item {
    return new Edge(data, this.graph);
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
}
