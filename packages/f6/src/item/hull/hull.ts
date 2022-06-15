import { HullCfg } from '@antv/f6-core';
import { Item } from '../base/item';
import { ItemManger } from '../base/manager';

export class Hull extends Item<HullCfg> {
  constructor(model) {
    super();
    this.model = { ...model };
  }

  get type() {
    return 'hull';
  }
}

export class HullManager extends ItemManger<HullCfg, Hull> {
  createItem(data: any) {
    return new Hull(data);
  }
}
