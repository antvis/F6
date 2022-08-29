import { Component } from '@antv/f-engine';
import { deepMix } from '@antv/util';
import Global from '../../../global';
import { ILabelConfig, LabelStyle, ModelConfig, ShapeStyle } from '../../../types';

export const CLS_LABEL_BG_SUFFIX = '-label-bg';

export abstract class BaseElement<T extends ModelConfig> extends Component {
  // 默认样式及配置
  options = {};

  itemType = ''; // node, edge, combo 等

  getCustomConfig(cfg: Partial<T> | {}): Partial<T> | {} {
    return {};
  }

  getOptions(cfg?: Partial<T> | {}): Partial<T> {
    return deepMix(this.options, this.getCustomConfig(cfg) || {}, cfg);
  }

  getLabelStyleByPosition(cfg: T, labelCfg?: ILabelConfig, group?): Partial<LabelStyle> {
    return { text: cfg.label as string };
  }
  getLabelBgStyleByPosition(label, cfg: T, labelCfg?: ILabelConfig, group?): Partial<LabelStyle> {
    return {};
  }

  /**
   * 获取文本的配置项
   * @param cfg 节点的配置项
   * @param labelCfg 文本的配置项
   * @param group 父容器，label 的定位可能与图形相关
   */
  getLabelStyle(cfg: T, labelCfg: ILabelConfig, group?): LabelStyle {
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

    return model?.stateStyles?.[name] || stateStyles?.[name];
  }

  getMixedStyle(cfg) {
    const stateStyle = cfg.states?.reduce((prev, name) => {
      return { ...prev, ...(this.getStateStyle(name, cfg) || {}) };
    }, {});

    const shapeStyle = this.getShapeStyle(cfg);
    const style = { ...shapeStyle, ...stateStyle };
    return style;
  }
}
