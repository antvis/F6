import { jsx } from '@antv/f-engine';
import { Global } from '../../../../const';
import { BaseEdge } from './base';
import { distance, getCircleCenterByPoints } from '../../../../utils/math';
import { isArray } from '@antv/util';

export class Arc extends BaseEdge {
  curveOffset = 20;
  clockwise = 1;
  getOptions() {
    return {
      size: Global.defaultNode.size,
      style: {
        x: 0,
        y: 0,
        stroke: Global.defaultNode.style.stroke,
        fill: Global.defaultNode.style.fill,
        lineWidth: Global.defaultNode.style.lineWidth,
      },
      labelCfg: {
        style: {
          fill: Global.nodeLabel.style.fill,
          fontSize: Global.nodeLabel.style.fontSize,
        },
      },
      stateStyles: {
        ...Global.nodeStateStyles,
      },
    };
  }
  getControlPoints(cfg) {
    const { startPoint, endPoint } = cfg;

    const midPoint = {
      x: (startPoint.x + endPoint.x) / 2,
      y: (startPoint.y + endPoint.y) / 2,
    };
    let center;
    let arcPoint;
    // 根据给定点计算圆弧
    if (cfg.controlPoints !== undefined) {
      arcPoint = cfg.controlPoints[0];
      center = getCircleCenterByPoints(startPoint, arcPoint, endPoint);
      // 根据控制点和直线关系决定 clockwise值
      if (startPoint.x <= endPoint.x && startPoint.y > endPoint.y) {
        this.clockwise = center.x > arcPoint.x ? 0 : 1;
      } else if (startPoint.x <= endPoint.x && startPoint.y < endPoint.y) {
        this.clockwise = center.x > arcPoint.x ? 1 : 0;
      } else if (startPoint.x > endPoint.x && startPoint.y <= endPoint.y) {
        this.clockwise = center.y < arcPoint.y ? 0 : 1;
      } else {
        this.clockwise = center.y < arcPoint.y ? 1 : 0;
      }
      // 若给定点和两端点共线，无法生成圆弧，绘制直线
      if (
        (arcPoint.x - startPoint.x) / (arcPoint.y - startPoint.y) ===
        (endPoint.x - startPoint.x) / (endPoint.y - startPoint.y)
      ) {
        return [];
      }
    } else {
      // 根据直线连线中点的的偏移计算圆弧
      // 若用户给定偏移量则根据其计算，否则按照默认偏移值计算
      if (cfg.curveOffset === undefined) {
        cfg.curveOffset = this.curveOffset;
      }
      if (isArray(cfg.curveOffset)) {
        cfg.curveOffset = cfg.curveOffset[0];
      }
      if (cfg.curveOffset < 0) {
        this.clockwise = 0;
      } else {
        this.clockwise = 1;
      }
      const vec = {
        x: endPoint.x - startPoint.x,
        y: endPoint.y - startPoint.y,
      };
      const edgeAngle = Math.atan2(vec.y, vec.x);
      arcPoint = {
        x: cfg.curveOffset * Math.cos(-Math.PI / 2 + edgeAngle) + midPoint.x,
        y: cfg.curveOffset * Math.sin(-Math.PI / 2 + edgeAngle) + midPoint.y,
      };
      center = getCircleCenterByPoints(startPoint, arcPoint, endPoint);
    }
    const radius = distance(startPoint, center);
    const controlPoints = [{ x: radius, y: radius }];

    return controlPoints;
  }
  getPath(points): Array<Array<string | number>> {
    const path: Array<Array<string | number>> = [];
    path.push(['M', points[0].x, points[0].y]);
    // 控制点与端点共线
    if (points.length === 2) {
      path.push(['L', points[1].x, points[1].y]);
    } else {
      path.push([
        'A',
        points[1].x,
        points[1].y,
        0,
        0,
        this.clockwise as number,
        points[2].x,
        points[2].y,
      ]);
    }
    return path;
  }
}
