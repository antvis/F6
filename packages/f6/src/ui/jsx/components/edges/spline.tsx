import { jsx } from '@antv/f-engine';
import { BaseEdge } from './base';
import { getSpline } from '../../../../utils/path';

export class Spline extends BaseEdge {
  getPath(points): Array<Array<string | number>> {
    const path = getSpline(points);
    return path;
  }
}
