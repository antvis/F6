import { isNil } from '@antv/util';
import { NodeConfig } from '../../types';
import { ItemManger } from '../base/manager';
import { Node } from './node';

export class NodeManager extends ItemManger<NodeConfig, Node> {
  graph = null;
  isEnableAnimate = true;
  constructor(graph) {
    super(graph);
    this.graph = graph;
  }

  createItem(data: any) {
    return new Node(this.graph, data);
  }

  updateById(id, model) {
    const node = this.byId(id);
    if (isNil(node)) return;
    node.updateItem(model);
  }

  setPosition(id, position) {
    const node = this.byId(id);
    if (isNil(node)) return;
    node.setPosition(position);
  }
}
