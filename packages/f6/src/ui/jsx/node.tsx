import { Component, jsx } from '@antv/f-engine';
import { IShape } from '../../types';

import { connect } from './connector';
import { getNodeType } from './factory';
@connect((graph, props) => {
  const id = props.id;
  const item = graph.findById(id);
  if (!item) return;
  return {
    node: item.model,
    item: item,
  };
})
export class Node extends Component {
  prevProps = null;
  animationObj = {};

  willMount(): void {
    const { item } = this.props;
    // @ts-ignore
    (this.container as IShape).item = item;
  }

  didMount(): void {
    const { node, animation } = this.props;
    const { x = 0, y = 0 } = node;

    // 设置容器位置和是否可以拖动，保证内部系统完整（拖放时、设置位置时表现能够一致）
    this.container.setLocalPosition(x, y);
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = node.visible === false ? 'hidden' : 'visible';

    const animationKeys = Object.keys(animation);
    if (animationKeys.length !== 0) {
      animationKeys.forEach((key) => {
        if (!this.animationObj[key]) {
          const animatie = this.container.animate([], {
            duration: 2000,
            easing: 'linear',
            fill: 'forwards',
          });
          this.animationObj[key] = true;
          animatie.onfinish = () => {
            delete this.animationObj[key];
            this.context.f6Context.graph.finishAsyncTask(key);
          };
          this.container.setLocalPosition(animation[key].from.x, animation[key].from.y);
          animatie.onframe = (e) => this.onFrame(e, animation[key].from, animation[key].to);
        }
      });
    }
    this.prevProps = this.props;
  }

  didUpdate(): void {
    const { x = 0, y = 0, visible } = this.props.node;
    const { animation } = this.props;

    const animationKeys = Object.keys(animation || {});
    if (animationKeys.length !== 0) {
      animationKeys.forEach((key) => {
        if (!this.animationObj[key]) {
          const animatie = this.container.animate([], {
            duration: 2000,
            easing: 'linear',
            fill: 'forwards',
          });
          this.animationObj[key] = true;
          animatie.onfinish = () => {
            delete this.animationObj[key];
            this.context.f6Context.graph.finishAsyncTask(key);
          };
          animatie.onframe = (e) => this.onFrame(e, animation[key].from, animation[key].to);
        }
      });
    }
    this.container.setLocalPosition(x, y);
    this.container.style.visibility = visible === false ? 'hidden' : 'visible';
    this.prevProps = this.props;
  }

  onFrame = (e, from, to) => {
    const animation = e.target;
    const computedTiming = (animation as Animation).effect.getComputedTiming();
    const progress = computedTiming.progress;

    let x = from.x;
    let toX = to.x;
    let y = from.y;
    let toY = to.y;

    x = x + (toX - x) * progress;
    y = y + (toY - y) * progress;

    const { item } = this.props;

    item.updateItem({ x, y });
  };

  render() {
    const { node } = this.props;
    const Shape = getNodeType(node?.type);

    if (!Shape) {
      console.warn(`节点类型 ${node?.type} 未定义`);
      return null;
    }

    return <Shape node={node}></Shape>;
  }
}
