import UINode from './base';

export default class UIImageNode extends UINode {
  makeGNode(parentGNode) {
    const attrs = {
      x: this.styleNode.layout.left,
      y: this.styleNode.layout.top,
      img: this.styleNode.dom.attrs.src,
      width: this.styleNode.layout.width || 0,
      height: this.styleNode.layout.height || 0,
    };

    let shape = this.gNode;
    if (!shape) {
      shape = parentGNode.addShape('image', {
        type: 'image',
        attrs,
      });
    }
    shape.resetMatrix();
    // zIndex
    typeof this.styleNode.style.zIndex === 'number' && shape.setZIndex(this.styleNode.style.zIndex);
    switch (this.styleNode.style.textAlign) {
      case 'center':
        shape.translate(this.styleNode.layout.width / 2);
        break;
      case 'right':
        shape.translate(this.styleNode.layout.width);
        break;
      default:
        break;
    }
    this.gNode = shape;
  }
}
