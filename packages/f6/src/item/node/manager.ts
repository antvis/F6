import { isNil } from '@antv/util';
import { NodeConfig } from '../../types';
import { ItemManger } from '../base/manager';
import { Node } from './node';

export class NodeManager extends ItemManger<NodeConfig, Node> {
  graph = null;
  isEnableAnimate = true;
  constructor(graph) {
    super();
    this.graph = graph;
  }

  createItem(data: any) {
    this.models;
    return new Node(data, this.graph);
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
