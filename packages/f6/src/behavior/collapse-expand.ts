import { BaseBehavior } from './base';

const DEFAULT_TRIGGER = 'tap';
const ALLOW_EVENTS = ['tap', 'dbltap'];

export class CollapseExpand extends BaseBehavior {
  getDefaultCfg(): object {
    return {
      /**
       * 发生收缩/扩展变化时的回调
       */
      trigger: DEFAULT_TRIGGER,
      onChange() {},
    };
  }
  getEvents() {
    let { trigger } = this.cfg;
    // 检测输入是否合法
    if (!ALLOW_EVENTS.includes(trigger)) {
      trigger = DEFAULT_TRIGGER;
      // eslint-disable-next-line no-console
      console.warn("Behavior collapse-expand 的 trigger 参数不合法，请输入 'click' 或 'dblclick'");
    }
    return {
      [`node:${trigger}`]: 'onNodeTap',
    };
  }
  onNodeTap(e) {
    const { item } = e;
    const { onChange } = this.cfg;

    // 如果节点进行过更新，model 会进行 merge，直接改 model 就不能改布局，所以需要去改源数据
    const sourceData = this.graph.findDataById(item.id);
    if (!sourceData) {
      return;
    }

    const { children } = sourceData;
    // 叶子节点的收缩和展开没有意义
    if (!children || children.length === 0) {
      return;
    }
    const collapsed = !sourceData.collapsed;
    if (!this.shouldBegin()) {
      return;
    }
    sourceData.collapsed = collapsed;
    // this.graph.updateChild(this.graph)
    // item.getModel().collapsed = collapsed;
    // this.graph.emit('itemcollapsed', { item: e.item, collapsed });
    if (!this.shouldUpdate()) {
      return;
    }
    try {
      onChange(item, collapsed);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(err);
    }
    this.graph.layout();
  }
}
