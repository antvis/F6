import { isNumber } from '@antv/util';
import { EdgeConfig, IPoint } from '../../../../types';
import { Cubic } from './cubic';

export class CubicVertical extends Cubic {
  static curvePosition = [1 / 2, 1 / 2];
  static minCurveOffset = [0, 0];
  static curveOffset = undefined;
  static getControlPoints(cfg: EdgeConfig): IPoint[] {
    const { startPoint, endPoint } = cfg;
    if (cfg.curvePosition === undefined) cfg.curvePosition = this.curvePosition;
    if (cfg.curveOffset === undefined) cfg.curveOffset = this.curveOffset;
    if (cfg.minCurveOffset === undefined) cfg.minCurveOffset = this.minCurveOffset;
    if (isNumber(cfg.curveOffset)) cfg.curveOffset = [cfg.curveOffset, -cfg.curveOffset];
    if (isNumber(cfg.minCurveOffset))
      cfg.minCurveOffset = [cfg.minCurveOffset, -cfg.minCurveOffset];
    if (isNumber(cfg.curvePosition)) cfg.curvePosition = [cfg.curvePosition, 1 - cfg.curvePosition];

    const yDist = endPoint!.y - startPoint!.y;
    let curveOffset: number[] = [0, 0];
    if (cfg.curveOffset) {
      curveOffset = cfg.curveOffset;
    } else if (Math.abs(yDist) < Math.abs(cfg.minCurveOffset[0])) {
      curveOffset = cfg.minCurveOffset;
    }

    const innerPoint1 = {
      x: startPoint!.x,
      y: startPoint!.y + yDist * (this as any).curvePosition[0] + curveOffset[0],
    };
    const innerPoint2 = {
      x: endPoint!.x,
      y: endPoint!.y - yDist * (this as any).curvePosition[1] + curveOffset[1],
    };
    return [innerPoint1, innerPoint2];
  }
}
