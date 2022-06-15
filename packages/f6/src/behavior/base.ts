import { each } from '@antv/util';
import { Graph } from '../graph/graph';
import { F6EventType, F6GraphEvent } from '../types';

// 自定义 Behavior 时候共有的方法
export abstract class BaseBehavior<T> {
  graph: Graph = null;
  cfg: T = null;

  constructor(cfg: T) {
    this.cfg = Object.assign(this.getDefaultCfg(), cfg);
  }

  abstract getDefaultCfg(): T;

  /**
   * register event handler, behavior will auto bind events
   * for example:
   * return {
   *  click: 'onClick'
   * }
   */
  abstract getEvents(): {
    [key in F6EventType]?: string;
  };

  updateCfg(cfg: Object) {
    Object.assign(this, cfg);
  }

  shouldBegin(e?: F6GraphEvent): boolean {
    return true;
  }

  shouldUpdate(e?: F6GraphEvent): boolean {
    return true;
  }

  shouldEnd(e?: F6GraphEvent): boolean {
    return true;
  }

  get(val: string) {
    return (this as any)[val];
  }

  set(key: string, val: any) {
    (this as any)[key] = val;
    return this;
  }

  public bindEvents(graph: Graph) {
    this.graph = graph;
    const events = this.getEvents();
    each(events, (fn, key) => {
      graph.on(key, this[fn].bind(this));
    });
  }

  public unBindEvents(graph: Graph) {
    const events = this.getEvents();
    each(events, (fn, key) => {
      graph.off(key, this[fn].bind(this));
    });
  }
}
