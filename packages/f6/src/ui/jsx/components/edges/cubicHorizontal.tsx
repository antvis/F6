import { jsx } from '@antv/f-engine';
import { isNumber } from '@antv/util';
import { Cubic } from './cubic';
import { Item, EdgeData, IPoint, Point, EdgeConfig } from '../../../../types';

export class CubicHorizontal extends Cubic {
  curvePosition = [1 / 2, 1 / 2];
  minCurveOffset = [0, 0];
  curveOffset = undefined;
  getControlPoints(cfg: EdgeConfig): IPoint[] {
    const { startPoint, endPoint } = cfg;
    if (cfg.curvePosition === undefined) cfg.curvePosition = this.curvePosition;
    if (cfg.curveOffset === undefined) cfg.curveOffset = this.curveOffset;
    if (cfg.minCurveOffset === undefined) cfg.minCurveOffset = this.minCurveOffset;
    if (isNumber(cfg.curveOffset)) cfg.curveOffset = [cfg.curveOffset, -cfg.curveOffset];
    if (isNumber(cfg.minCurveOffset))
      cfg.minCurveOffset = [cfg.minCurveOffset, -cfg.minCurveOffset];
    if (isNumber(cfg.curvePosition)) cfg.curvePosition = [cfg.curvePosition, 1 - cfg.curvePosition];

    const xDist = endPoint!.x - startPoint!.x;
    let curveOffset: number[] = [0, 0];
    if (cfg.curveOffset) {
      curveOffset = cfg.curveOffset;
    } else if (Math.abs(xDist) < Math.abs(cfg.minCurveOffset[0])) {
      curveOffset = cfg.minCurveOffset;
    }

    const innerPoint1 = {
      x: startPoint!.x + xDist * (this as any).curvePosition[0] + curveOffset[0],
      y: startPoint!.y,
    };
    const innerPoint2 = {
      x: endPoint!.x - xDist * (this as any).curvePosition[1] + curveOffset[1],
      y: endPoint!.y,
    };
    const controlPoints = [innerPoint1, innerPoint2];
    return controlPoints;
  }
}
