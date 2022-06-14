import { BaseBehavior } from './base';

/*
 * @Author: Shiwu
 * @Description: 收起和展开 Combo
 */
const DEFAULT_TRIGGER = 'dblclick';
const ALLOW_EVENTS = ['click', 'dblclick'];
export class CollapseExpandCombo extends BaseBehavior {
  getDefaultCfg(): object {
    return {
      trigger: DEFAULT_TRIGGER,
      relayout: true,
    };
  }
  getEvents() {
    let trigger: string;
    // 检测输入是否合法
    if (ALLOW_EVENTS.includes(this.cfg.trigger)) {
      trigger = this.cfg.trigger;
    } else {
      trigger = DEFAULT_TRIGGER;
      // eslint-disable-next-line no-console
      console.warn(
        "Behavior collapse-expand-group 的 trigger 参数不合法，请输入 'click' 或 'dblclick'",
      );
    }
    return {
      [`combo:${trigger}`]: 'onComboClick',
    };
  }
  onComboClick(evt) {
    const { item } = evt;
    const { graph } = this;
    const { relayout } = this.cfg;

    if (!item || item.destroyed || item.getType() !== 'combo') return;
    const model = item.getModel();
    const comboId = model.id;
    if (!comboId) {
      return;
    }
    graph.collapseExpandCombo(comboId);
    if (relayout && graph.get('layout')) graph.layout();
    else graph.refreshPositions();
  }
}
