import { jsx } from '@antv/f-engine';
import { mix } from '@antv/util';
import Global from '../../../../global';
import { BaseNode } from './base';

export class SimpleRect extends BaseNode {
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
    // 连接点，默认为左右
    // anchorPoints: [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }]
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],
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
    const width = style.width || size[0];
    const height = style.height || size[1];
    const styles = {
      x: -width / 2,
      y: -height / 2,
      width,
      height,
      ...style,
    };
    return styles;
  }

  renderShape(node, states) {
    const style = this.getShapeStyle(node);

    return <rect style={style} ref={this.keyShapeRef} />;
  }
}
