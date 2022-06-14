import { jsx } from '@antv/f-engine';
import { deepMix } from '@antv/util';
import { Global } from '../../../../const';
import { BaseNode } from './base';
export class SimpleCircle extends BaseNode {
  options = {
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
    const style = deepMix({}, defaultStyle, strokeStyle);
    const size = this.getSize!(cfg);
    const r = size[0] / 2;
    const styles = {
      x: 0,
      y: 0,
      r,
      ...style,
    };
    return styles;
  }

  renderShape(node, states) {
    const style = this.getMixedStyle(node, states);
    return (
      <circle
        animation={{
          // appear: {
          //   duration: 1500,
          //   ...(animation.appear || {}),
          //   onFrame,
          // },
          update: {
            easing: 'linear',
            duration: 450,
            property: ['x', 'y', 'width', 'height', 'fill'],
            // ...(animation.update || {}),
            // onFrame,
          },
          // leave: {
          //   duration: 1500,
          //   onFrame,
          // },
        }}
        style={{ ...style, draggable: true, droppable: true }}
        ref={this.keyShapeRef}
      />
    );
  }
}
