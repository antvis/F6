import { isSelectorMatchDom, reflowAttrs } from '../utils/index';
import { computeLayout } from '../utils/ui';
export default abstract class UIBaseNode {
  styleNode = null;
  gNode = null;
  parent = null;
  children = [];

  isMounted = false;
  isDisplay = true;

  private _parentGNode = null;
  private _prevAttrs = null;
  private _prevStyle = null;
  private _prevLayout = null;
  private events = {};

  constructor(styleNode?) {
    this.styleNode = styleNode;
  }

  get top() {
    return this.styleNode?.layout?.top;
  }

  get left() {
    return this.styleNode?.layout?.left;
  }

  get width() {
    return this.styleNode?.layout?.width;
  }
  get height() {
    return this.styleNode?.layout?.height;
  }

  get tagName() {
    return this.styleNode?.dom?.tagName;
  }

  get style() {
    return this.styleNode?.style;
  }

  get attributes() {
    return this.styleNode?.dom?.attrs;
  }

  private get _layout() {
    return this.styleNode?._layout;
  }

  set parentGNode(gNode) {
    this._parentGNode = gNode;
  }

  get parentGNode() {
    return this.parent?.gNode || this._parentGNode;
  }

  setParent(parent) {
    this.parent = parent;
  }

  appendChild(...list) {
    list.forEach((child) => {
      child.setParent(this);
      this.children.push(child);
      child.styleNode &&
        this.styleNode &&
        !this.styleNode.originChildren.includes(child.styleNode) &&
        this.styleNode.originChildren.push(child.styleNode);
    });
    this.reflow();
  }

  removeChild(child) {
    if (!child) return;
    child.remove();
  }

  remove() {
    const parent = this.parent;
    this.gNode?.remove();
    if (parent) {
      parent.children.splice(1, parent.children.indexOf(this));
      parent.styleNode?.children.splice(1, parent.children.indexOf(this.styleNode));
      if (this.isMounted) parent.reflow();
    }
    if (this.isMounted) this.unmount();
  }

  query(selector) {
    if (typeof selector !== 'string') return;
    const arr = selector.split(/\s+/g).filter((s) => s !== '');
    const stack: any = [[this, arr]];
    while (stack.length) {
      const [uiNode, selectorArr] = stack.shift();
      for (const child of uiNode.children) {
        let rest = [];
        if (child.styleNode && isSelectorMatchDom(child.styleNode.dom, selectorArr[0])) {
          if (selectorArr.slice(1).length === 0) {
            return child;
          } else {
            rest = selectorArr.slice(1);
          }
        } else {
          rest = selectorArr;
        }
        stack.push([child, rest]);
      }
    }
  }

  queryAll(selector) {
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

  // 手动挂载G节点
  private manualMount(parentGNode) {
    this.parentGNode = parentGNode;
    this.layout();
    this.mount();
  }

  reflow() {
    // 节点没有挂载到G上
    if (!this.parentGNode) return;

    // 上浮到absolute或根节点
    if (this.style?.position !== 'absolute' && this.parent) {
      this.parent.reflow();
      return;
    }

    // 开始重排
    this.layout();
    this.render();
  }

  // 计算布局
  layout() {
    this._prevLayout = { ...(this._layout || {}) };
    this.clearLayout();
    computeLayout(this.styleNode);
    return;
  }

  mount() {
    if (this.isMounted) {
      return;
    }

    if (this.style?.display === 'none') {
      this.isDisplay = false;
      return;
    }
    // 保存之后会对比
    this._prevAttrs = this.attributes;
    this._prevStyle = this.style;

    this.draw(this.parentGNode);
    this.isMounted = true;
    this.gNode.set('uiNode', this);
    this.gNode.on('*', this.trigger);

    this.children.forEach((child) => child.mount());
    this.didMount();
  }
  // 全部draw一遍后触发下
  didMount() {}

  unmount() {
    if (!this.isMounted) return;
    this.isMounted = false;
    this.children.forEach((child) => child.unmount());
    this.didUnmount();
  }
  didUnmount() {}

  private render() {
    if (!this.isMounted) {
      this.mount();
      return;
    }
    // if (!this.shouldUpdate(this._prevAttrs, this._prevStyle)) return;
    // 处理display的情况
    if (this.style?.display === 'none') {
      this.isDisplay = false;
      this.gNode?.remove(false);
      return false;
    }

    if (this.isDisplay === false) {
      this.isDisplay = true;
      this.parentGNode?.add(this.gNode);
    }
    const should = this.shouldUpdate(this._prevAttrs, this._prevStyle, this._prevLayout);
    should && this.draw();
    this.children.forEach((child) => child.render());
    should && this.didUpdate();
  }

  didUpdate() {}

  shouldUpdate(prevAttr, prevStyle, prevLayout) {
    return true;
  }

  draw(parentGNode?) {}

  animate() {}

  private clearLayout() {
    this.styleNode.isDirty = true;
    this.children.forEach((child) => {
      child.clearLayout();
    });
  }

  setAttribute(key, value) {
    if (this.styleNode && this.styleNode.dom) {
      this._prevAttrs = { ...this.styleNode.dom.attrs };
      this.styleNode.dom.attrs[key] = value;
      if (!this.parent?.isMounted) return;
      this.render();
    }
  }

  setStyle(key, value) {
    if (this.styleNode && this.styleNode.style) {
      this._prevStyle = { ...this.styleNode.dom.style };
      this.styleNode.style[key] = value;
      if (this.parent && !this.parent.isMounted) return;
      if (reflowAttrs[key]) {
        this.reflow();
      } else {
        this.render();
      }
    }
  }

  getAttribute(key) {
    return this.styleNode?.dom?.attrs[key];
  }

  getStyle(key) {
    return this.styleNode?.layout[key] ?? this.styleNode?.style[key];
  }

  setText(text) {
    const textNode = this.query('text');
    if (textNode && textNode.styleNode && textNode.styleNode.dom) {
      textNode.styleNode.dom.text = text;
      textNode.render();
    }
  }

  trigger = (e) => {
    let shape = e.target;
    while (shape && !shape.get('uiNode')) {
      shape = shape.get('parent');
    }
    e.targetGNode = shape || null;
    e.uiNode = shape?.get('uiNode') ?? null;
    this.events[e.type]?.forEach((fn) => fn(e, this));
  };

  on(eventName, fn) {
    this.events[eventName] = [...(this.events[eventName] || []), fn];
  }
  off(eventName, fn) {
    if (!fn) {
      delete this.events[eventName];
      return;
    }
    const events = this.events[eventName];
    const index = events?.indexOf(fn);
    if (index && index !== -1) events?.splice(index, 1);
  }
}
