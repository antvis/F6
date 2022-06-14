import { SimpleCircle } from './circle';

const combos = {};

export const registerCombo = (name, componentConstructor) => {
  combos[name] = componentConstructor;
};

export const getCombo = (name) => {
  return combos[name];
};

registerCombo('circle', SimpleCircle);
