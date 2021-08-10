import { isSelectorMatchDom, layoutAttrs, reflowAttrs } from '../utils/index';

export default abstract class UIBaseNode {
  styleNode = null;
  gNode = null;
  parent = null;
  children = [];
  isRemoved = false;
  isRendered = false;
  private events = {};
  static layoutInterval = 10;
  static onLayout: Function;
  constructor(styleNode?) {
    this.styleNode = styleNode;
  }
  abstract makeGNode(parent): any;
  appendChild(child, isLayout = true) {
    child.setParent(this);
    this.children.push(child);
    child.styleNode &&
      this.styleNode &&
      !this.styleNode.originChildren.includes(child.styleNode) &&
      this.styleNode.originChildren.push(child.styleNode);
    isLayout && this.layout();
  }
  setParent(parent) {
    this.parent = parent;
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

  // 上浮到树的根节点，对整个树重排重绘
  layout() {
    // absolute, parent, isMount
    this.parent?.layout();
  }

  render() {
    if (!this.parent?.gNode) {
      console.warn('根节点绑定g的绘制节点后才可以绘制子节点');
      return;
    }
    if (this.styleNode.style.display === 'none') {
      this.gNode?.remove(false);
      this.isRemoved = true;
      return;
    } else if (this.isRemoved && this.gNode) {
      this.parent?.gNode.add(this.gNode);
      this.isRemoved = false;
    }
    this.makeGNode(this.parent?.gNode);
    this.gNode.set('uiNode', this);
    !this.isRendered && this.gNode.on('*', this.trigger);
    this.isRendered = true;
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

  setAttribute(key, value) {
    if (this.styleNode && this.styleNode.dom) {
      this.styleNode.dom.attrs[key] = value;
      this.render();
    }
  }

  setStyle(key, value) {
    if (this.styleNode && this.styleNode.style) {
      this.styleNode.style[key] = value;
      if (reflowAttrs[key]) {
        if (this.styleNode.style.position === 'absolute' && layoutAttrs[key] && this.isRendered) {
          let oppositeMap = {
            left: 'right',
            right: 'left',
            top: 'bottom',
            bottom: 'top',
          };
          const layout = this.styleNode.layout;
          const delta = value - layout[key];
          layout[key] = value;
          if (oppositeMap[key]) {
            layout[oppositeMap[key]] = layout[oppositeMap[key]] + delta;
            this.styleNode.style[oppositeMap[key]] = layout[oppositeMap[key]];
          }
          this.render();
        } else {
          this.layout();
        }
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
}
