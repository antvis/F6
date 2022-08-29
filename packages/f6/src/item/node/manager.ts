import { isNil } from '@antv/util';
import { NodeConfig } from '../../types';
import { ItemManger } from '../base/manager';
import { Node } from './node';

export class NodeManager extends ItemManger<NodeConfig, Node> {
  graph = null;
  constructor(graph) {
    super(graph);
    this.graph = graph;
  }

  createItem(data: any) {
    return new Node(this.graph, data);
  }

  setPosition(id, position) {
    const node = this.byId(id);
    if (isNil(node)) return;
    node.setPosition(position);
  }
}
