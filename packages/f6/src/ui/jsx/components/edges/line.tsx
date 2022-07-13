import { jsx } from '@antv/f-engine';
import { mix } from '@antv/util';
import Global from '../../../../global';
import { EdgeConfig, ShapeStyle } from '../../../../types';
import { BaseEdge } from './base';
export class Line extends BaseEdge {
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

  getShapeStyle(cfg): ShapeStyle {
    const { style: defaultStyle } = this.options as EdgeConfig;
    const strokeStyle: ShapeStyle = {
      stroke: cfg.color,
    };
    // 如果设置了color，则覆盖默认的stroke属性
    const style: ShapeStyle = mix({}, defaultStyle, strokeStyle, cfg.style);

    const size = cfg.size || Global.defaultEdge.size;
    cfg = this.getPathPoints!(cfg);
    const { startPoint, endPoint } = cfg;

    // const path = (this as any).getPath(points);
    const styles = mix(
      {},
      Global.defaultEdge.style as ShapeStyle,
      {
        stroke: Global.defaultEdge.color,
        lineWidth: size,
        x1: startPoint.x,
        y1: startPoint.y,
        x2: endPoint.x,
        y2: endPoint.y,
      } as ShapeStyle,
      style,
    );
    return styles;
  }

  renderShape(cfg, states) {
    const style = this.getMixedStyle(cfg, states);

    delete style.x;
    delete style.y;

    return <arrowLine style={style} ref={this.pathShapeRef}></arrowLine>;
  }
}
