import { ComboConfig } from '../../types';
import { ElementType, getFactory } from '../factory';
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

  get type() {
    return 'combo';
  }

  getAnchorPoints() {
    const comboType = getFactory(ElementType.combo).getElement(this.model.type);
    return comboType.getAnchorPoints?.(this.model) || [];
  }
}
