import { Component } from '@antv/f-engine';
import { BaseCombo } from './base';
import { Circle } from './circle';
import { Rect } from './rect';

export { BaseCombo };

const combos = {};

export const registerCombo = (name, componentConstructor: Component | Function) => {
  combos[name] = componentConstructor;
};

export const getCombo = (name) => {
  return combos[name];
};

registerCombo('circle', Circle);
registerCombo('rect', Rect);
