import { Item } from '../base/item';
import { ItemManger } from '../base/manager';

export class Hull extends Item {
  model = {};

  constructor(model) {
    super();
    this.model = { ...model };
  }

  get type() {
    return 'hull';
  }
}

export class HullManager extends ItemManger {
  createItem(data: any): Item {
    return new Hull(data);
  }
}
