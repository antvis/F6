import { each } from '@antv/util';

// 自定义 Behavior 时候共有的方法
export class BaseBehavior {
  graph = null;
  cfg = null;

  constructor(cfg) {
    this.cfg = Object.assign(this.getDefaultCfg(), cfg);
  }

  getDefaultCfg() {
    return {};
  }

  /**
   * register event handler, behavior will auto bind events
   * for example:
   * return {
   *  click: 'onClick'
   * }
   */
  getEvents() {
    return {};
  }

  updateCfg(cfg: object) {
    Object.assign(this, cfg);
    return true;
  }

  shouldBegin() {
    return true;
  }

  shouldUpdate() {
    return true;
  }

  shouldEnd() {
    return true;
  }

  get(val: string) {
    return (this as any)[val];
  }

  set(key: string, val: any) {
    (this as any)[key] = val;
    return this;
  }

  public bindEvents(graph) {
    this.graph = graph;
    const events = this.getEvents();
    each(events, (fn, key) => {
      graph.on(key, this[fn].bind(this));
    });
  }

  public unBindEvents(graph) {
    const events = this.getEvents();
    each(events, (fn, key) => {
      graph.off(key, this[fn].bind(this));
    });
  }
}
