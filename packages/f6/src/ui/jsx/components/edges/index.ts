import { Line } from './line';
import { Arc } from './arc';
import { Quadratic } from './quadratic';
import { Cubic } from './cubic';
import { CubicHorizontal } from './cubicHorizontal';
import { CubicVertical } from './cubicVertical';
import { Loop } from './loop';
import { Spline } from './spline';

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
