import { G6Event, IG6GraphEvent } from '@antv/f6-core';

export default {
  getDefaultCfg(): object {
    return {
      item: 'node',
      offset: 12,
      formatText(model) {
        return model.label;
      },
    };
  },
  getEvents(): { [key in G6Event | 'afterremoveitem']?: string } {
    return {
      'node:press': 'onPress',
      actionend: 'onPressEnd',
    };
  },
  onPress(e: IG6GraphEvent) {
    const { item } = e;
    this.currentTarget = item;
    this.showTooltip(e);
    this.graph.emit('tooltipchange', { item: e.item, action: 'show' });
  },
  onPressEnd(e: IG6GraphEvent) {
    if (!this.shouldEnd(e)) {
      return;
    }
    this.hideTooltip();
    this.graph.emit('tooltipchange', { item: this.currentTarget, action: 'hide' });
    this.currentTarget = null;
  },
  showTooltip(e: IG6GraphEvent) {
    // 绘制tip
  },
  hideTooltip() {
    // 隐藏tip
  },
};
