import { Component } from '@antv/f-engine';
import { IElement, IGroup } from '@antv/g-base';
import { ext } from '@antv/matrix-util';
import { deepMix } from '@antv/util';
import Global from '../../../global';
import {
  EdgeConfig,
  ILabelConfig,
  IPoint,
  Item,
  LabelStyle,
  ModelConfig,
  ShapeStyle,
} from '../../../types';

const transform = ext.transform;
export const CLS_LABEL_BG_SUFFIX = '-label-bg';

export abstract class BaseElement<T extends ModelConfig> extends Component {
  // 默认样式及配置
  options = {};

  itemType = ''; // node, edge, combo 等

  getCustomConfig(cfg: T | {}): T | {} {
    return {};
  }

  getOptions(cfg?: T | {}): T {
    return deepMix(this.options, this.getCustomConfig(cfg) || {}, cfg);
  }

  getLabelStyleByPosition(cfg: T, labelCfg?: ILabelConfig, group?: IGroup): Partial<LabelStyle> {
    return { text: cfg.label as string };
  }
  getLabelBgStyleByPosition(
    label: IElement,
    cfg: T,
    labelCfg?: ILabelConfig,
    group?: IGroup,
  ): Partial<LabelStyle> {
    return {};
  }

  /**
   * 获取文本的配置项
   * @param cfg 节点的配置项
   * @param labelCfg 文本的配置项
   * @param group 父容器，label 的定位可能与图形相关
   */
  getLabelStyle(cfg: T, labelCfg: ILabelConfig, group: IGroup): LabelStyle {
    const calculateStyle = this.getLabelStyleByPosition!(cfg, labelCfg, group);
    const attrName = `${this.itemType}Label`; // 取 nodeLabel，edgeLabel 的配置项
    const defaultStyle = (Global as any)[attrName] ? (Global as any)[attrName].style : null;
    const labelStyle = { ...defaultStyle, ...calculateStyle, ...labelCfg.style };
    return labelStyle;
  }

  /**
   * 获取图形的配置项
   * @param cfg
   */
  getShapeStyle(cfg: T): ShapeStyle {
    return cfg.style!;
  }

  /**
   * 获取不同状态下的样式
   *
   * @param {string} name 状态名称
   * @param {Item} item Node或Edge的实例
   * @return {object} 样式
   */
  getStateStyle(name: string, model): ShapeStyle {
    const { stateStyles } = this.getOptions(model);

    const modelStateStyle = model.stateStyles
      ? model.stateStyles[name]
      : stateStyles && stateStyles[name];

    return modelStateStyle;
  }

  /**
   * 获取控制点
   * @param  {Object} cfg 节点、边的配置项
   * @return {Array|null} 控制点的数组,如果为 null，则没有控制点
   */
  static getControlPoints(cfg: EdgeConfig): IPoint[] | undefined {
    return cfg.controlPoints;
  }

  /**
   * 获取控制点
   * @param  {Object} cfg 节点、边的配置项
   * @return {Array|null} 锚点的数组,如果为 null，则没有锚点
   */
  getAnchorPoints(cfg: T): number[][] | undefined {
    const { anchorPoints } = this.getOptions(cfg) as T;
    return anchorPoints;
  }

  getMixedStyle(cfg, states) {
    const stateStyle = states?.reduce((prev, name) => {
      return { ...prev, ...(this.getStateStyle(name, cfg) || {}) };
    }, {});

    const shapeStyle = this.getShapeStyle(cfg);
    const style = { ...shapeStyle, ...stateStyle };
    return style;
  }
}
