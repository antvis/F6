import { ShapeCfg } from '@antv/g-base';
import UINode from './base';
export default class UIDivNode extends UINode {
  backgroudNode = null;
  makeGNode(parentGNode) {
    const styleNode = this.styleNode;
    let gNode = this.gNode;
    if (gNode) {
      gNode.resetMatrix();
      this.backgroudNode.remove();
    } else {
      gNode = this.gNode = parentGNode.addGroup({
        id: this.styleNode.dom.attrs.id,
        className: this.styleNode.dom.attrs.class,
        zIndex: styleNode.style.zIndex || 0,
      });
    }
    const backgroudNode = (this.backgroudNode = gNode.addGroup());

    gNode.translate(styleNode.layout.left, styleNode.layout.top);

    const style = styleNode.style;

    // zIndex
    typeof style.zIndex === 'number' && gNode.setZIndex(style.zIndex);

    // 绘制background
    backgroudNode.addShape('rect', {
      attrs: {
        x: 0, // line绘制的时候是沿着两边扩
        y: 0,
        fill: style.backgroundColor || '#fff',
        fillOpacity: style.backgroundOpacity,
        opacity: style.opacity,
        width: styleNode.layout.width,
        height: styleNode.layout.height,
        radius: [
          style.borderTopLeftRadius || 0,
          style.borderTopRightRadius || 0,
          style.borderBottomLeftRadius || 0,
          style.borderBottomLeftRadius || 0,
        ],
        shadowBlur: style.shadowBlur || 0,
        shadowColor: style.shadowColor || null,
        shadowOffsetX: style.shadowOffsetX || 0,
        shadowOffsetY: style.shadowOffsetY || 0,
      },
    });

    if (style.backgroundImage) {
      backgroudNode.addShape('image', {
        attrs: {
          x: 0, // line绘制的时候是沿着两边扩
          y: 0,
          img: style.url,
          width: styleNode.layout.width,
          height: styleNode.layout.height,
        },
      });
    }

    // 绘制边框
    const border: ShapeCfg = {
      attrs: {
        x: (style.borderWidth || 0) / 2, // line绘制的时候是沿着两边扩
        y: (style.borderWidth || 0) / 2,
        lineWidth: style.borderWidth,
        stroke: style.borderColor,
        width: styleNode.layout.width - (style.borderWidth || 0),
        height: styleNode.layout.height - (style.borderWidth || 0),
        radius: [
          style.borderTopLeftRadius || 0,
          style.borderTopRightRadius || 0,
          style.borderBottomLeftRadius || 0,
          style.borderBottomLeftRadius || 0,
        ],
      },
    };
    if (style.borderStyle === 'dashed') {
      border.attrs.lineDash = style.lineDash || [2, 2];
    }

    backgroudNode.addShape('rect', border);

    if (style.overflow === 'hidden') {
      gNode.setClip({
        type: 'rect',
        attrs: {
          width: styleNode.layout.width,
          height: styleNode.layout.height,
          radius: [
            style.borderTopLeftRadius || 0,
            style.borderTopRightRadius || 0,
            style.borderBottomLeftRadius || 0,
            style.borderBottomLeftRadius || 0,
          ],
        },
      });
    }
    backgroudNode.toBack();
  }
}
