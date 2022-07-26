import { jsx } from '@antv/f-engine';
import { isArray, isNumber, mix } from '@antv/util';
import Global from '../../../../global';
import { BaseCombo } from './base';
export class Circle extends BaseCombo {
  static getOptions() {
    return {
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
  }
  getShapeStyle(cfg) {
    const { style: defaultStyle } = this.options;
    let padding: number | number[] = cfg.padding || this.options.padding;
    if (isArray(padding)) padding = padding[0];
    const strokeStyle = {
      stroke: cfg.color,
    };

    // 如果设置了color，则覆盖默认的stroke属性
    const style = mix({}, defaultStyle, strokeStyle, cfg.style);
    let r: number;
    if (cfg.fixSize) {
      r = isNumber(cfg.fixSize) ? cfg.fixSize : cfg.fixSize[0];
    } else {
      const size = this.getSize!(cfg);
      if (!isNumber(style.r) || isNaN(style.r)) r = size[0] / 2 || Global.defaultCombo.style.r;
      else r = Math.max(style.r, size[0] / 2) || size[0] / 2;
    }

    style.r = r + padding;
    const styles = {
      x: 0,
      y: 0,
      ...style,
    };
    if (cfg.style) cfg.style.r = r;
    else {
      cfg.style = { r };
    }
    return styles;
  }
  render() {
    const { combo, states } = this.props;
    const style = this.getMixedStyle(combo, states);
    return (
      <group style={{ x: combo?.x || 0, y: combo?.y || 0, droppable: true }}>
        <circle style={style} ref={this.keyShapeRef} />
        <text
          style={{
            pointerEvents: 'none',
            text: combo?.label || '',
            ...combo.labelCfg?.style,
          }}
        ></text>
      </group>
    );
  }
}
