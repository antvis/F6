import { isNil } from '@antv/util';
import { Item } from '../base/item';
import { ItemManger } from '../base/manager';
import { Node } from './node';

export class NodeManager extends ItemManger {
  graph = null;
  isEnableAnimate = true;
  constructor(graph) {
    super();
    this.graph = graph;
  }
  createItem(data: any): Item {
    return new Node(data, this.graph);
  }

  updateById(id, model) {
    const node = this.byId(id);
    if (isNil(node)) return;
    node.update(model);
  }

  setPosition(id, position) {
    const node = this.byId(id);
    if (isNil(node)) return;
    node.setPosition(position);
  }
}
