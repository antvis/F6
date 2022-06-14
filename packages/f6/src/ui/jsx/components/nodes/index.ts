import { SimpleCircle } from './circle';
import { SimpleRect } from './rect';

const nodes = {};

export const registerNode = (name, componentConstructor) => {
  nodes[name] = componentConstructor;
};

export const getNode = (name) => {
  return nodes[name];
};

registerNode('circle', SimpleCircle);
registerNode('rect', SimpleRect);
