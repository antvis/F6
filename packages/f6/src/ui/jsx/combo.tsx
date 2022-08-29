import { jsx } from '@antv/f-engine';
import { IShape } from '../../types';
import { Node } from './node';
import { connect } from './connector';
import { getComboType } from './factory';

@connect((graph, props) => {
  const id = props.id;
  const item = graph.findById(id);
  if (!item) return;
  return {
    combo: item.model,
    item: item,
  };
})
export class Combo extends Node {
  nodeRef = { current: null };
  cacheCombo = {};
  size = {};
  position = {};
  isInited = false;

  willMount(): void {
    const { item } = this.props;
    // @ts-ignore
    (this.container as IShape).item = item;
  }

  didMount(): void {
    const { combo } = this.props;
    // 必须设置container的zIndex控制多个combo的层叠关系
    this.container.getParent().style.zIndex = combo.depth;
    this.isInited = true;
    const { x = 0, y = 0 } = combo;
    this.container.setLocalPosition(x, y);

    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = combo.visible === false ? 'hidden' : 'visible';
  }

  didUpdate(): void {
    const { combo } = this.props;
    if (combo.isDragging) {
      this.container.getParent().style.zIndex = 9999 + combo.depth;
    } else {
      this.container.getParent().style.zIndex = combo.depth;
    }
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    const { x = 0, y = 0 } = combo;
    this.container.setLocalPosition(x, y);
    this.container.style.visibility = combo.visible === false ? 'hidden' : 'visible';
  }

  render() {
    const { combo } = this.props;

    const Shape = getComboType(combo?.type);

    if (!Shape) {
      console.warn(`combo 类型 ${combo?.type} 未定义`);
      return null;
    }

    return <Shape combo={combo} />;
  }
}
