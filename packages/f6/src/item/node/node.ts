import { action, makeObservable } from 'mobx';
import { Graph } from '../../graph/graph';
import { NodeConfig } from '../../types';
import { Item } from '../base/item';
import { Edge } from '../edge/edge';

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

  destroy() {
    super.destroy();
  }
}
