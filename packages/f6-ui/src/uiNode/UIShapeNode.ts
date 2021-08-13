import UINode from './base';

export default class UIShapeNode extends UINode {
  makeGNode(parentGNode) {
    const styleNode = this.styleNode;
    const style = styleNode.style;
    const layout = styleNode.layout;
    const dom = styleNode.dom;

    const attrs = {
      ...dom.attrs,
      fill: style.backgroundColor,
      lineWidth: style.borderWidth,
      stroke: style.borderColor,
      width: layout.width - (style.borderWidth || 0),
      height: layout.height - (style.borderWidth || 0),
    };

    let shape = this.gNode;
    if (!shape) {
      shape = parentGNode.addShape(dom.attrs.type, { attrs });
    }
    shape.resetMatrix();
    typeof style.zIndex === 'number' && shape.setZIndex(style.zIndex);
    shape.translate(styleNode.layout.left, styleNode.layout.top);
    this.gNode = shape;
  }
}
