// @ts-nocheck
import { Node } from '../node/node';

export class Combo extends Node {
  constructor(model, graph) {
    super(model, graph);
    this.model = { ...model };
    this.model.type = model.type || 'circle';
    this.model.visible = true;
  }

  syncPosition = (pos) => {
    this.model.x = pos.x;
    this.model.y = pos.y;
  };

  get type() {
    return 'combo';
  }
}