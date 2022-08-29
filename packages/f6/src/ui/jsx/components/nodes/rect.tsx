import { jsx } from '@antv/f-engine';
import { mix } from '@antv/util';
import Global from '../../../../global';
import { NodeConfig } from '../../../../types';
import { BaseNode } from './base';

export class SimpleRect extends BaseNode {
  static shape = 'rect';

  // 连接点，默认为左右
  static getAnchorPoints(cfg: NodeConfig): number[][] {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  }

  // 自定义节点时的配置
  options = {
    size: [100, 30],
    style: {
      radius: 0,
      stroke: Global.defaultNode.style.stroke,
      fill: Global.defaultNode.style.fill,
      lineWidth: Global.defaultNode.style.lineWidth,
    },
    // 文本样式配置
    labelCfg: {
      style: {
        fill: Global.nodeLabel.style.fill,
        fontSize: Global.nodeLabel.style.fontSize,
      },
    },
    // 节点上左右上下四个方向上的链接circle配置
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle的大小
      size: Global.defaultNode.linkPoints.size,
      lineWidth: Global.defaultNode.linkPoints.lineWidth,
      fill: Global.defaultNode.linkPoints.fill,
      stroke: Global.defaultNode.linkPoints.stroke,
    },
    // 节点中icon配置
    icon: {
      // 是否显示icon，值为 false 则不渲染icon
      show: false,
      // icon的地址，字符串类型
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20,
    },
    stateStyles: {
      ...Global.nodeStateStyles,
    },
  };

  /**
   * 获取节点的样式，供基于该节点自定义时使用
   * @param {Object} cfg 节点数据模型
   * @return {Object} 节点的样式
   */
  getShapeStyle(cfg) {
    const { style: defaultStyle } = this.getOptions(cfg);
    const strokeStyle = {
      stroke: cfg.color,
    };
    // 如果设置了color，则覆盖默认的stroke属性
    const style = mix({} as any, defaultStyle, strokeStyle);
    const size = this.getSize!(cfg);
    const width = size[0];
    const height = size[1];
    const styles = {
      ...style,
      x: 0,
      y: 0,
      width,
      height,
      anchor: [0.5, 0.5],
    };
    return styles;
  }

  renderShape(node) {
    const style = this.getMixedStyle(node);
    return <rect style={style} ref={this.keyShapeRef} />;
  }
}
