import { Arc } from './arc';
import { BaseEdge } from './base';
import { Cubic } from './cubic';
import { CubicHorizontal } from './cubicHorizontal';
import { CubicVertical } from './cubicVertical';
import { Line } from './line';
import { Loop } from './loop';
import { Quadratic } from './quadratic';
import { Spline } from './spline';

export { BaseEdge };

const nodes = {};

export const registerEdge = (name, componentConstructor) => {
  nodes[name] = componentConstructor;
};

export const getEdge = (name) => {
  return nodes[name];
};

registerEdge('line', Line);
registerEdge('spline', Spline);
registerEdge('arc', Arc);
registerEdge('quadratic', Quadratic);
registerEdge('cubic', Cubic);
registerEdge('cubicHorizontal', CubicHorizontal);
registerEdge('cubicVertical', CubicVertical);
registerEdge('loop', Loop);
