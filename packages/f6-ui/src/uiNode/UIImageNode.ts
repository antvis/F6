import UINode from './base';

export default class UIImageNode extends UINode {
  makeGNode(parentGNode) {
    const shape = parentGNode.addShape('image', {
      type: 'image',
      attrs: {
        x: this.styleNode.layout.left,
        y: this.styleNode.layout.top,
        img: this.styleNode.dom.attrs.src,
        width: this.styleNode.layout.width || 0,
        height: this.styleNode.layout.height || 0,
      },
    });
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
    return shape;
  }
}
