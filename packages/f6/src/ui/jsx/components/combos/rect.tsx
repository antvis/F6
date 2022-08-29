import { jsx } from '@antv/f-engine';
import { isNil, isNumber, mix } from '@antv/util';
import Global from '../../../../global';
import { BaseCombo } from './base';
export class Rect extends BaseCombo {
  labelPosition = 'top';
  //@ts-ignore
  options = {
    size: [40, 5],
    padding: [25, 20, 15, 20],
    animate: true,
    style: {
      radius: 0,
      stroke: Global.defaultCombo.style.stroke,
      fill: Global.defaultCombo.style.fill,
      lineWidth: Global.defaultCombo.style.lineWidth,
    },
    // 文本样式配置
    labelCfg: {
      style: {
        fill: Global.comboLabel.style.fill,
        fontSize: Global.comboLabel.style.fontSize,
      },
    },
    // 连接点，默认为左右
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],
    stateStyles: {
      ...Global.comboStateStyles,
    },
  };

  getLabelStyleByPosition(cfg, labelCfg) {
    const labelPosition = labelCfg.position || this.labelPosition;
    const { style: cfgStyle, size } = cfg;
    let padding = cfg.padding || this.options.padding;
    if (isNumber(padding)) padding = [padding, padding, padding, padding];

    let { refX, refY } = labelCfg;
    // 考虑 refX 和 refY = 0 的场景，不用用 labelCfg.refX || Global.nodeLabel.refY
    if (isNil(refX)) {
      refX = this.refX as number; // 不居中时的偏移量
    }
    if (isNil(refY)) {
      refY = this.refY as number; // 不居中时的偏移量
    }

    let width: number;
    let height: number;
    const fixSize = cfg.collapsed && cfg.fixCollapseSize ? cfg.fixCollapseSize : cfg.fixSize;
    if (fixSize) {
      if (isNumber(fixSize)) {
        width = fixSize;
        height = fixSize;
      } else {
        width = fixSize[0];
        height = fixSize[1];
      }
    } else {
      width = size[0];
      height = size[1];
    }

    const leftDis = width / 2;
    const topDis = height / 2;

    let style: any;
    switch (labelPosition) {
      case 'top':
        style = {
          x: 0 - leftDis + refX,
          y: 0 - topDis + refY,
          textBaseline: 'top', // 文本在图形的上方
          textAlign: 'left',
        };
        break;
      case 'bottom':
        style = {
          x: 0,
          y: topDis + refY,
          textBaseline: 'bottom',
          textAlign: 'center',
        };
        break;
      case 'left':
        style = {
          x: 0 - leftDis + refY,
          y: 0,
          textAlign: 'left',
        };
        break;
      case 'center':
        style = {
          x: 0,
          y: 0,
          text: cfg!.label,
          textAlign: 'center',
          textBaseline: 'middle',
        };
        break;
      default:
        style = {
          x: leftDis + refX,
          y: 0,
          textAlign: 'right',
          textBaseline: 'middle',
        };
        break;
    }
    style.text = cfg.label;
    return style;
  }

  getShapeStyle(cfg) {
    const { style: defaultStyle } = this.options;

    const strokeStyle = {
      stroke: cfg.color,
    };

    // 如果设置了color，则覆盖默认的stroke属性
    const style = mix({}, defaultStyle, strokeStyle, cfg.style);
    const size = this.getSize!(cfg);
    let width: number;
    let height: number;
    const fixSize = cfg.collapsed && cfg.fixCollapseSize ? cfg.fixCollapseSize : cfg.fixSize;
    if (fixSize) {
      if (isNumber(fixSize)) {
        width = fixSize;
        height = fixSize;
      } else {
        width = fixSize[0];
        height = fixSize[1];
      }
    } else {
      width = size[0];
      height = size[1];
    }

    const x = -width / 2;
    const y = -height / 2;

    const styles = {
      ...style,
      x,
      y,
      anchor: [0, 0],
      width,
      height,
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
        <rect style={style} />
        <text
          style={{
            text: combo?.label || '',
            pointerEvents: 'none',
            ...labelStyle,
          }}
        ></text>
      </group>
    );
  }
}
