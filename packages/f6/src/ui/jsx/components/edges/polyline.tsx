import { jsx } from '@antv/f-engine';

import Global from '../../../../global';
import { BaseEdge } from './base';

export class Polyline extends BaseEdge {
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

  renderShape(cfg, states) {
    const style = this.getMixedStyle(cfg, states);

    delete style.x;
    delete style.y;
    return <arrowPolyline style={style} ref={this.pathShapeRef}></arrowPolyline>;
  }
}
