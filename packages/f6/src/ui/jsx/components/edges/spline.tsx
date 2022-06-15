import { getSpline } from '../../../../utils/path';
import { BaseEdge } from './base';

export class Spline extends BaseEdge {
  getPath(points): Array<Array<string | number>> {
    const path = getSpline(points);
    return path;
  }
}
