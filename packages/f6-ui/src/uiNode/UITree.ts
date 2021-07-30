import UIBaseNode from './base';
import { computeLayout } from '../utils';
import { throttle } from '@antv/util';

export default class UITree extends UIBaseNode {
  static layoutInterval = 10;
  layout() {
    const layout = throttle(
      () => {
        console.log('in');
        this.clearLayout();
        computeLayout(this.root?.styleNode);
        this.render();
      },
      UITree.layoutInterval,
      {
        trailing: true,
        leading: false,
      },
    );
    layout();
    this.layout = layout as () => void;
  }
  makeGNode(group) {
    this.gNode = group;
  }
  render() {
    this.root?.render();
  }
  clearLayout() {
    this.root?.clearLayout();
  }
  attr() {
    console.warn('UI 根节点无法设置属性');
  }
  get root() {
    return this.children[0];
  }
}
