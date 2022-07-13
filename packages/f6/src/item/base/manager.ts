import { deepMix, isNil } from '@antv/util';
import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuid } from 'uuid';
import { BaseItemModel, ID } from '../../types';
import { Item } from './item';

export abstract class ItemManger<T extends BaseItemModel, I extends Item<T>> {
  items: Record<ID, I> = {};
  graph = null;

  defaultModel: T = null;
  defaultStates = null;

  constructor(graph) {
    this.graph = graph;

    makeObservable(this, {
      items: observable,
      models: computed,
      modelsMap: computed,
      states: computed,
      statesMap: computed,
      ids: computed,
      removeItem: action,
      updateItem: action,
      addItem: action,
      init: action,
    });
  }

  init(models, defaultModel: T, defaultStates?) {
    this.defaultModel = defaultModel;
    this.defaultStates = defaultStates;

    if (isNil(models)) return;

    this.addItem(models);
  }

  changeData(models = [], defaultModel: T, defaultStates?) {
    const itemKeys = Object.keys(this.items);
    if (itemKeys.length === 0) {
      this.init(models, defaultModel || this.defaultModel, defaultStates || this.defaultStates);
      return;
    }

    const cacheIdMap = models.reduce((prev, cur) => {
      cur.id && (prev[cur.id] = cur.id);
      return prev;
    }, {});

    models.forEach((model) => {
      // update 都存在
      if (this.items[model.id]) {
        this.updateItem(model.id, model);
      }
      // add 当前不存在，但是传入的存在
      if (!this.items[model.id]) {
        this.addItem(model);
      }
    });

    itemKeys.forEach((id) => {
      if (!cacheIdMap[id]) {
        this.removeItem(id);
      }
    });
  }

  abstract createItem(data): I;

  get animations() {
    return Object.values(this.items).reduce(
      (prev, node) => ((prev[node.id] = node.animations), prev),
      {},
    );
  }

  get models() {
    return Object.values(this.items).map((node) => node.model);
  }

  get modelsMap() {
    return Object.values(this.items).reduce(
      (prev, node) => ((prev[node.id] = node.model), prev),
      {},
    );
  }

  get states() {
    return Object.values(this.items).map((node) => [...node.states]);
  }

  get statesMap() {
    return Object.values(this.items).reduce(
      (prev, node) => ((prev[node.id] = [...node.states]), prev),
      {},
    );
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
      const item = this.createItem(
        deepMix({}, this.defaultModel || {}, { stateStyles: this.defaultStates || {} }, data),
      );
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
    const items = { ...this.items };
    ids.forEach((id) => {
      items[id]?.destroy();
      delete items[id];
    });
    this.items = items;
  }

  updateItem(id, model) {
    this.byId(id)?.updateItem(model);
  }

  destroy() {
    Object.values(this.items).forEach((item) => item.destroy());
    this.items = null;
  }
}
