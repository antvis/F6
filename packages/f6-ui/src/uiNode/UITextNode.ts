import UINode from './base';
import { assembleFont, ShapeAttrs } from '@antv/g-base';

export default class UITextNode extends UINode {
  makeGNode(parentGNode) {
    const style = this.styleNode.style;

    const attrs: ShapeAttrs = {
      x: this.styleNode.layout.left,
      y: this.styleNode.layout.top,
      textAlign: style.textAlign,
      fill: style.color,
      fontSize: style.fontSize || 12,
      fontStyle: style.fontStyle,
      fontFamily: style.fontFamily,
      lineHeight: style.lineHeight || 0,
      fontVariant: style.fontVariant,
      fontWeight: style.fontWeight,
      textBaseline: 'top',
    };

    let shape = this.gNode;

    if (!shape) {
      shape = parentGNode.addShape('text', {
        type: 'text',
        attrs,
      });
    }
    shape.resetMatrix();

    switch (style.textAlign) {
      case 'center':
        shape.translate(this.styleNode.layout.width / 2);
        break;
      case 'right':
        shape.translate(this.styleNode.layout.width);
        break;
      default:
        break;
    }
    shape.attr(
      'text',
      this.getMultiLineText(String(this.styleNode.dom.text), attrs, this.styleNode.layout.width),
    );
    typeof style.zIndex === 'number' && shape.setZIndex(style.zIndex);
    this.gNode = shape;
  }
  getMultiLineText(text, attrs, width) {
    const ctx = this.parent.gNode.get('canvas')?.get('context');
    if (!ctx) return text;
    ctx.save();
    const font = assembleFont(attrs);
    ctx.font = font;
    if (ctx.measureText(text).width < width) return text;
    let s = '';
    let lineWidth = 0;
    for (let value of text) {
      const valueW = ctx.measureText(value).width;
      lineWidth += valueW;
      if (lineWidth >= width) {
        lineWidth = valueW;
        s += `\n${value}`;
      } else {
        s += value;
      }
    }
    ctx.restore();
    return s;
  }
}
