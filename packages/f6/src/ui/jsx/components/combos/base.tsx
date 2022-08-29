import { clone, isArray, isNil } from '@antv/util';
import Global from '../../../../global';
import { ComboConfig, LabelStyle, ModelConfig } from '../../../../types';
import { BaseElement } from '../base';

export class BaseCombo extends BaseElement<ComboConfig> {
  /**
   * 获取控制点
   * @param  {Object} cfg 节点、边的配置项
   * @return {Array|null} 锚点的数组,如果为 null，则没有锚点
   */
  static getAnchorPoints(cfg: ComboConfig): number[][] | undefined {
    return cfg.anchorPoints;
  }

  /**
   * Combo 标题文本相对图形的位置，默认为 top
   * 位置包括： top, bottom, left, right, center
   * @type {String}
   */
  labelPosition = 'center';
  /**
   * 标题文本相对偏移，当 labelPosition 不为 center 时有效
   * @type {Number}
   */
  refX = Global.comboLabel.refX;
  refY = Global.comboLabel.refY;

  options = {
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
    },
    stateStyles: {
      ...Global.comboStateStyles,
    },
    padding: 0,
  };
  /**
   * 获取 Combo 宽高
   * @internal 返回 Combo 的大小，以 [width, height] 的方式维护
   * @param  {Object} cfg Combo 的配置项
   * @return {Array} 宽高
   */
  getSize(cfg: ModelConfig): number[] {
    let size: number | number[] = clone(cfg.size || Global.defaultCombo.size);

    // size 是数组，若长度为 1，则补长度为 2
    if (isArray(size) && size.length === 1) {
      size = [size[0], size[0]];
    }

    // size 为数字，则转换为数组
    if (!isArray(size)) {
      size = [size, size];
    }
    return size;
  }
  // 私有方法，不希望扩展的 Combo 复写这个方法
  getLabelStyleByPosition(cfg: ComboConfig, labelCfg): LabelStyle {
    const labelPosition = labelCfg.position || this.labelPosition;
    const { style: cfgStyle } = cfg;

    let { refX, refY } = labelCfg;
    // 考虑 refX 和 refY = 0 的场景，不用用 labelCfg.refX || Global.nodeLabel.refX
    if (isNil(refX)) {
      refX = this.refX as number; // 不居中时的偏移量
    }
    if (isNil(refY)) {
      refY = this.refY as number; // 不居中时的偏移量
    }

    const size = this.getSize!(cfg as ModelConfig);

    const dis = Math.max(size[0], size[1]) / 2;

    let style: any;
    switch (labelPosition) {
      case 'top':
        style = {
          x: 0,
          y: -dis - (refY as number),
          textBaseline: 'bottom', // 文本在图形的上方
          textAlign: 'center',
        };
        break;
      case 'bottom':
        style = {
          x: 0,
          y: dis + (refY as number),
          textBaseline: 'bottom',
          textAlign: 'center',
        };
        break;
      case 'left':
        style = {
          x: -dis + (refX as number),
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
          x: dis + (refX as number),
          y: 0,
          textAlign: 'right',
        };
        break;
    }
    style.text = cfg.label;
    return style;
  }
}
