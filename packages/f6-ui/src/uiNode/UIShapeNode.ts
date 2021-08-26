import UINode from './base';

export default class UIShapeNode extends UINode {
  getAttrs() {
    const styleNode = this.styleNode;
    const style = styleNode.style;
    const layout = styleNode.layout;
    const dom = styleNode.dom;
    return {
      fill: style.backgroundColor,
      lineWidth: style.borderWidth,
      fillOpacity: style.backgroundOpacity,
      stroke: style.borderColor,
      width: layout.width - (style.borderWidth || 0),
      height: layout.height - (style.borderWidth || 0),
      ...dom.attrs,
    };
  }

  draw(parentGNode) {
    const styleNode = this.styleNode;
    const attrs = this.getAttrs();
    const dom = styleNode.dom;
    if (!this.gNode) this.gNode = parentGNode.addShape(dom.attrs.type, { attrs });
    this.update();
  }
  update() {
    const attrs = this.getAttrs();
    let shape = this.gNode;
    const isCapture = this.styleNode.style.pointerEvents === 'none' ? false : true;
    shape.attr(attrs);
    shape.set('capture', isCapture);
    shape.resetMatrix();
    shape.translate(this.left, this.top);
    typeof this.style?.zIndex === 'number' && shape.setZIndex(this.style.zIndex);
  }
}
