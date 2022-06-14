//@ts-nocheck
import { isNil, isString } from '@antv/util';
import { action, makeObservable, observable } from 'mobx';

export class Item {
  model = {};
  states = [];

  constructor() {
    makeObservable(
      this,
      {
        model: observable.ref,
        states: observable.ref,
        setState: action,
        clearStates: action,
        hideItem: action,
        showItem: action,
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

  getModel() {
    return this.model;
  }

  getType() {
    return this.type;
  }

  set id(id) {
    if (typeof id === 'number' || typeof id === 'string') this.model[id] = id;
  }

  updateItem(model) {
    this.model = { ...this.model, ...model };
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

  hasState(state) {
    return this.states.indexOf(state) >= 0;
  }

  hasLocked() {
    return false;
  }

  destory() {}
}
