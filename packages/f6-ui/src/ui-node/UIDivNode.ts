import { ShapeCfg } from '@antv/g-base';
import UINode from './base';
export default class UIDivNode extends UINode {
  backgroudNode = null;

  draw(parentGNode) {
    if (!this.gNode) {
      this.gNode = parentGNode.addGroup({
        id: this.attributes?.id,
        className: this.styleNode.dom.attrs.class,
      });
    }
    const gNode = this.gNode;

    const styleNode = this.styleNode;
    gNode.resetMatrix();
    this.backgroudNode?.remove();
    const backgroudNode = (this.backgroudNode = gNode.addGroup());

    gNode.translate(this.left, this.top);

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
        width: this.width,
        height: this.height,
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
      capture: style.pointerEvents === 'none' ? false : true,
    });

    if (style.backgroundImage) {
      backgroudNode.addShape('image', {
        attrs: {
          x: 0, // line绘制的时候是沿着两边扩
          y: 0,
          img: style.url,
          width: this.width,
          height: this.height,
        },
        capture: false,
      });
    }

    // 绘制边框
    const border: ShapeCfg = {
      attrs: {
        x: (style.borderWidth || 0) / 2, // line绘制的时候是沿着两边扩
        y: (style.borderWidth || 0) / 2,
        lineWidth: style.borderWidth,
        stroke: style.borderColor,
        width: this.width - (style.borderWidth || 0),
        height: this.height - (style.borderWidth || 0),
        radius: [
          (style.borderTopLeftRadius || 0) * ((this.width - (style.borderWidth || 0)) / this.width),
          (style.borderTopRightRadius || 0) *
            ((this.width - (style.borderWidth || 0)) / this.width),
          (style.borderBottomLeftRadius || 0) *
            ((this.width - (style.borderWidth || 0)) / this.width),
          (style.borderBottomLeftRadius || 0) *
            ((this.width - (style.borderWidth || 0)) / this.width),
        ],
      },
      capture: false,
    };
    if (style.borderStyle === 'dashed') {
      border.attrs.lineDash = style.lineDash || [2, 2];
    }

    backgroudNode.addShape('rect', border);

    if (style.overflow === 'hidden') {
      gNode.setClip({
        type: 'rect',
        attrs: {
          width: this.width,
          height: this.height,
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
