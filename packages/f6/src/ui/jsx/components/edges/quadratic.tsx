import { jsx } from '@antv/f-engine';
import { BaseEdge } from './base';
import { getControlPoint } from '../../../../utils/path';
import { isArray } from '@antv/util';
import { Item, EdgeData, IPoint, Point, EdgeConfig } from '../../../../types';

export class Quadratic extends BaseEdge {
  curvePosition = 0.5; // 弯曲的默认位置
  curveOffset = -20; // 弯曲度，沿着 startPoint, endPoint 的垂直向量（顺时针）方向，距离线的距离，距离越大越弯曲
  getControlPoints(cfg: EdgeConfig): IPoint[] {
    let { controlPoints } = cfg; // 指定controlPoints
    if (!controlPoints || !controlPoints.length) {
      const { startPoint, endPoint } = cfg;
      if (cfg.curveOffset === undefined) cfg.curveOffset = this.curveOffset;
      if (cfg.curvePosition === undefined) cfg.curvePosition = this.curvePosition;
      if (isArray(this.curveOffset)) cfg.curveOffset = cfg.curveOffset[0];
      if (isArray(this.curvePosition)) cfg.curvePosition = cfg.curveOffset[0];
      const innerPoint = getControlPoint(
        startPoint,
        endPoint,
        cfg.curvePosition as number,
        cfg.curveOffset as number,
      );
      controlPoints = [innerPoint];
    }
    return controlPoints;
  }
  getPath(points: Point[]): Array<Array<string | number>> {
    const path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['Q', points[1].x, points[1].y, points[2].x, points[2].y]);
    return path;
  }
}
