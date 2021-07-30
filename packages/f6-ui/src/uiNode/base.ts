import { isSelectorMatchDom, layoutAttrs } from '../utils/index';

export default abstract class UIBaseNode {
  styleNode = null;
  gNode = null;
  parent = null;
  children = [];
  private events = {};
  static layoutInterval = 10;
  static onLayout: Function;
  constructor(styleNode?) {
    this.styleNode = styleNode;
  }
  abstract makeGNode(parent): any;
  appendChild(child) {
    child.setParent(this);
    this.children.push(child);
    child.styleNode &&
      this.styleNode &&
      !this.styleNode.originChildren.includes(child.styleNode) &&
      this.styleNode.originChildren.push(child.styleNode);
    this.layout();
  }
  setParent(parent) {
    this.parent = parent;
  }
  query(selector) {
    if (typeof selector !== 'string') return;
    const arr = selector.split(/\s+/g).filter((s) => s !== '');
    const result = [];
    const stack: any = [[this, arr, result]];
    while (stack.length) {
      const [uiNode, selectorArr, result] = stack.shift();
      for (const child of uiNode.children) {
        let rest = [];
        if (child.styleNode && isSelectorMatchDom(child.styleNode.dom, selectorArr[0])) {
          if (selectorArr.slice(1).length === 0) {
            result.push(child);
            rest = [selectorArr[0]];
          } else {
            rest = selectorArr.slice(1);
          }
        } else {
          rest = selectorArr;
        }
        stack.push([child, rest, result]);
      }
    }
    return result;
  }

  // 上浮到树的根节点，对整个树重排重绘
  layout() {
    this.parent?.layout();
  }

  render() {
    if (this.styleNode.style.display === 'none') return;
    this.gNode?.remove();
    if (!this.parent?.gNode) {
      console.warn('根节点绑定g的绘制节点后才可以绘制子节点');
      return;
    }
    this.gNode = this.makeGNode(this.parent?.gNode);
    this.gNode.on('*', (e) => {
      this.trigger(e);
    });
    this.children.forEach((child) => {
      child.render();
    });
  }

  animate() {}

  clearLayout() {
    delete this.styleNode.layout;
    delete this.styleNode.lastLayout;
    delete this.styleNode.shouldUpdate;
    this.children.forEach((child) => {
      child.clearLayout();
    });
  }

  attr(key, value) {
    this.styleNode.style[key] = value;
    if (layoutAttrs[key]) {
      this.layout();
    } else {
      this.render();
    }
  }

  trigger(e) {
    this.events[e.type]?.forEach((fn) => fn(e, this));
  }

  addEventListener(eventName, fn) {
    this.events[eventName] = [...(this.events[eventName] || []), fn];
  }
}
