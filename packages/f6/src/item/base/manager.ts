import { isNil } from '@antv/util';
import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuid } from 'uuid';
import { BaseItemModel, ID } from '../../types';
import { Item } from './item';

export abstract class ItemManger<T extends BaseItemModel, I extends Item<T>> {
  items: Record<ID, I> = {};

  constructor() {
    makeObservable(this, {
      items: observable,
      models: computed,
      ids: computed,
      removeItem: action,
      updateItem: action,
      addItem: action,
      init: action,
    });
  }

  init(models) {
    if (isNil(models)) return;

    const instances = models?.reduce((prev, data) => {
      const item = this.createItem(data);
      if (isNil(item.id)) {
        item.id = uuid();
      }
      prev[item.id] = item;
      return prev;
    }, {});
    this.items = instances;
  }

  abstract createItem(data): I;

  get models() {
    return Object.values(this.items).map((node) => node.model);
  }

  get states() {
    return Object.values(this.items).map((node) => [...node.states]);
  }

  get ids() {
    return Object.keys(this.items);
  }

  byId(id) {
    return this.items[id];
  }

  addItem(data) {
    let models = data;
    if (!Array.isArray(data)) {
      models = [data];
    }
    const instances = models?.reduce((prev, data) => {
      const item = this.createItem(data);
      if (isNil(item.id)) {
        item.id = uuid();
      }
      prev[item.id] = item;
      return prev;
    }, {});
    this.items = { ...this.items, ...instances };
  }

  removeItem(id) {
    let ids = id;
    if (!Array.isArray(id)) {
      ids = [id];
    }
    ids.forEach((id) => {
      delete this.items[id];
      this.items[id]?.destory();
    });
  }

  updateItem(id, model) {
    this.byId(id)?.updateItem(model);
  }
}
