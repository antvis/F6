import UINode from './base';

export default class UIImageNode extends UINode {
  draw(parentGNode) {
    const attrs = {
      x: this.styleNode.layout.left,
      y: this.styleNode.layout.top,
      img: this.styleNode.dom.attrs.src,
      width: this.styleNode.layout.width || 0,
      height: this.styleNode.layout.height || 0,
    };

    const isCapture = this.styleNode.style.pointerEvents === 'none' ? false : true;
    if (!this.gNode) {
      this.gNode = parentGNode.addShape('image', {
        type: 'image',
        attrs,
        capture: isCapture,
      });
    }

    const shape = this.gNode;

    shape.resetMatrix();

    shape.set('capture', isCapture);

    shape.attr(attrs);
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
  }
}
