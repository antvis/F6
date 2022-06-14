import { jsx } from '@antv/f-engine';
import { Global } from '../../../../const';
import { BaseEdge } from './base';
import { getControlPoint } from '../../../../utils/path';
import { isArray, isNumber } from '@antv/util';
import { Item, EdgeData, IPoint, Point, EdgeConfig } from '../../../../types';

export class Cubic extends BaseEdge {
  curvePosition = [1 / 2, 1 / 2];
  curveOffset = [-20, 20];
  getControlPoints(cfg: EdgeConfig): IPoint[] {
    let { controlPoints } = cfg; // 指定 controlPoints
    if (cfg.curveOffset === undefined) cfg.curveOffset = this.curveOffset;
    if (cfg.curvePosition === undefined) cfg.curvePosition = this.curvePosition;
    if (isNumber(cfg.curveOffset)) cfg.curveOffset = [cfg.curveOffset, -cfg.curveOffset];
    if (isNumber(cfg.curvePosition)) cfg.curvePosition = [cfg.curvePosition, 1 - cfg.curvePosition];
    if (!controlPoints || !controlPoints.length || controlPoints.length < 2) {
      const { startPoint, endPoint } = cfg;
      const innerPoint1 = getControlPoint(
        startPoint,
        endPoint,
        cfg.curvePosition[0],
        cfg.curveOffset[0],
      );
      const innerPoint2 = getControlPoint(
        startPoint,
        endPoint,
        cfg.curvePosition[1],
        cfg.curveOffset[1],
      );
      controlPoints = [innerPoint1, innerPoint2];
    }
    return controlPoints;
  }
  getPath(points: Point[]): Array<Array<string | number>> {
    const path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['C', points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y]);
    return path;
  }
}
