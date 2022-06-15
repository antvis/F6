import { Component } from '@antv/f-engine';
import { SimpleCircle } from './circle';

const combos = {};

export const registerCombo = (name, componentConstructor: Component | Function) => {
  combos[name] = componentConstructor;
};

export const getCombo = (name) => {
  return combos[name];
};

registerCombo('circle', SimpleCircle);
