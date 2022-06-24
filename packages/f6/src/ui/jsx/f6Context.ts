export class F6Context {
  graph = null;
  readonly nodes = {};
  readonly edges = {};
  readonly combos = {};

  addNode(id, nodeComponent) {
    this.nodes[id] = nodeComponent;
  }

  removeNode(id) {
    delete this.nodes[id];
  }

  addCombo(id, nodeComponent) {
    this.combos[id] = nodeComponent;
  }

  removeCombo(id) {
    delete this.combos[id];
  }

  getNodeLike(id) {
    return this.nodes[id] || this.combos[id];
  }

  getNodeLikeModel(id) {
    return this.getNodeLike(id)?.model;
  }

  getEdge(id) {
    return this.edges[id];
  }

  removeEdge(id) {
    delete this.edges[id];
  }
}
