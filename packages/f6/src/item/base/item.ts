import { isNil, isString } from '@antv/util';
import { action, makeObservable, observable } from 'mobx';
import { BaseItemModel } from '../../types/item';

export class Item<T extends BaseItemModel> {
  // @ts-ignore
  model: T = {};
  states: String[] = [];
  animations = {};
  destroyed = false;
  graph = null;

  constructor(graph?) {
    this.graph = graph;

    makeObservable(
      this,
      {
        model: observable.ref,
        states: observable.ref,
        setState: action,
        clearStates: action,
        hideItem: action,
        showItem: action,
        updateItem: action,
      },
      { proxy: false },
    );
  }

  get type() {
    return 'item';
  }

  get id() {
    return this.model.id;
  }

  set id(id) {
    if (typeof id === 'number' || typeof id === 'string') this.model[id] = id;
  }

  getModel() {
    return this.model;
  }

  getType() {
    return this.type;
  }

  updateItem(model) {
    this.model = { ...this.model, ...model };
  }

  runAnimation(from, to) {
    return new Promise((reslove) => {
      const uid = this.graph.runAsyncTask(() => {
        reslove(null);
        delete this.animations[uid];
      });
      this.animations = this.animations || {};
      this.animations[uid] = {
        id: uid,
        from,
        to,
      };
      this.animations = { ...this.animations };
    });
  }

  hideItem() {
    this.model = { ...this.model, visible: false };
  }

  showItem() {
    this.model = { ...this.model, visible: true };
  }

  clearStates(data) {
    if (isNil(data)) {
      this.states = [];
      return;
    }
    if (Array.isArray(data)) {
      this.states = this.states.filter((state) => {
        return !data.includes(state);
      });
    }
  }

  setState(stateName, value) {
    const states = this.states;
    if (isString(value)) {
      stateName = `${stateName}:${value}`;
    }
    const index = states.indexOf(stateName);
    if (value) {
      if (index > -1) {
        return;
      }
      this.states = [...this.states, stateName];
    } else if (index > -1) {
      states.splice(index, 1);
      this.states = [...this.states];
    }
  }

  hasState(state) {
    return this.states.indexOf(state) >= 0;
  }

  hasLocked() {
    return false;
  }

  destroy() {
    this.destroyed = true;
    this.model = null;
    this.states = null;
  }
}
