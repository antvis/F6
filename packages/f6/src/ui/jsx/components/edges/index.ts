import { Arc } from './arc';
import { BaseEdge } from './base';
import { Cubic } from './cubic';
import { CubicHorizontal } from './cubicHorizontal';
import { CubicVertical } from './cubicVertical';
import { Line } from './line';
import { Quadratic } from './quadratic';
import { Spline } from './spline';
import { registerEdge } from '../../factory';

export { BaseEdge };

registerEdge('line', Line);
registerEdge('spline', Spline);
registerEdge('arc', Arc);
registerEdge('quadratic', Quadratic);
registerEdge('cubic', Cubic);
registerEdge('cubic-horizontal', CubicHorizontal);
registerEdge('cubic-vertical', CubicVertical);
