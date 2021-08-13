import UIBaseNode from './base';
import { computeLayout } from '../utils';
import { throttle } from '@antv/util';

export default class UITree extends UIBaseNode {
  static layoutInterval = 3;
  layout() {
    const layout = throttle(
      () => {
        console.log('layout');
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
  get root() {
    return this.children[0];
  }
}
