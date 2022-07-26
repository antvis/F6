import { ComboConfig } from '../../types';
import { Node } from '../node/node';

export class Combo extends Node<ComboConfig> {
  constructor(graph, model: ComboConfig) {
    super(graph, model);
    this.model = { ...model };
    this.model.type = model.type || 'circle';
    this.model.visible = true;
  }

  get parentId() {
    return this.model.parentId;
  }

  syncPosition = (pos) => {
    this.model.x = pos.x;
    this.model.y = pos.y;
  };

  get type() {
    return 'combo';
  }
}
