import UINode from './base';
import { assembleFont, ShapeAttrs } from '@antv/g-base';

export default class UITextNode extends UINode {
  getAttrs() {
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
      opacity: style.opacity,
      fillOpacity: style.backgroundOpacity,
    };
    return attrs;
  }

  draw(parentGNode) {
    const attrs: ShapeAttrs = this.getAttrs();
    if (!this.gNode) {
      this.gNode = parentGNode.addShape('text', {
        type: 'text',
        attrs,
        capture: false,
      });
    }
    this.update();
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
  update() {
    const style = this.styleNode.style;
    const attrs: ShapeAttrs = this.getAttrs();
    let shape = this.gNode;
    shape.attr(attrs);
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
    if (style.whiteSpace === 'nowrap') {
      shape.attr('text', String(this.styleNode.dom.text));
    } else {
      shape.attr(
        'text',
        this.getMultiLineText(String(this.styleNode.dom.text), attrs, this.styleNode.layout.width),
      );
    }
  }
}
