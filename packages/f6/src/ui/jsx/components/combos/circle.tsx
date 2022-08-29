import { jsx } from '@antv/f-engine';
import { isArray, isNumber, mix } from '@antv/util';
import Global from '../../../../global';
import { BaseCombo } from './base';
export class Circle extends BaseCombo {
  static shape = 'circle';

  options = {
    size: [Global.defaultCombo.size[0], Global.defaultCombo.size[0]],
    padding: Global.defaultCombo.padding[0],
    animate: true,
    style: {
      stroke: Global.defaultCombo.style.stroke,
      fill: Global.defaultCombo.style.fill,
      lineWidth: Global.defaultCombo.style.lineWidth,
    },
    labelCfg: {
      style: {
        fill: Global.comboLabel.style.fill,
        fontSize: Global.comboLabel.style.fontSize,
      },
      refX: 0,
      refY: 0,
    },
    stateStyles: {
      ...Global.comboStateStyles,
    },
  };

  getShapeStyle(cfg) {
    const { style: defaultStyle } = this.options;
    const strokeStyle = {
      stroke: cfg.color,
    };

    // 如果设置了color，则覆盖默认的stroke属性
    const style = mix({}, defaultStyle, strokeStyle, cfg.style);
    let r: number;
    const size = this.getSize!(cfg);
    r = Math.max(size[0], size[1]) / 2;
    // if (cfg.fixSize) {
    //   r = isNumber(cfg.fixSize) ? cfg.fixSize : cfg.fixSize[0];
    // } else {
    //   const size = this.getSize!(cfg);
    //   if (!isNumber(style.r) || isNaN(style.r)) r = size[0] / 2 || Global.defaultCombo.style.r;
    //   else r = Math.max(style.r, size[0] / 2) || size[0] / 2;
    // }

    // style.r = r;
    const styles = {
      x: 0,
      y: 0,
      ...style,
      anchor: [0.5, 0.5],
      r,
    };

    return styles;
  }
  render() {
    const { combo } = this.props;
    const style = this.getMixedStyle(combo);
    const { labelCfg: defaultLabelCfg } = this.getOptions(combo);
    const labelStyle = this.getLabelStyle!(combo, defaultLabelCfg);
    return (
      <group>
        <circle style={style} />
        <text
          style={{
            pointerEvents: 'none',
            text: combo?.label || '',
            ...labelStyle,
          }}
        ></text>
      </group>
    );
  }
}
