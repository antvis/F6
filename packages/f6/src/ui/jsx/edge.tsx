import { Component, jsx } from '@antv/f-engine';

import { connect } from './connector';
import { getEdgeType } from './factory';

@connect((graph, props) => {
  const id = props.id;
  const item = graph.findById(id);
  if (!item) return;
  return {
    edge: item.model,
    item: item,
  };
})
export class Edge extends Component {
  edgeShapeRef = { current: null };

  willMount(): void {
    const { item } = this.props;
    // @ts-ignore
    this.container.item = item;
  }

  didMount(): void {
    const { edge } = this.props;
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = edge.visible === false ? 'hidden' : 'visible';
  }

  didUpdate(): void {
    const { edge } = this.props;
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = edge.visible === false ? 'hidden' : 'visible';
  }

  /**
   * 查找返回自定义边的类
   * @returns
   */
  getShapeConstrutor() {
    const { edge } = this.props;
    const Shape = getEdgeType(edge?.type || 'line');

    if (!Shape) {
      console.warn(`边类型 ${edge?.type} 未定义`);
      return null;
    }
    return Shape;
  }

  render() {
    const { edge } = this.props;
    if (!edge) {
      return null;
    }

    const Shape = this.getShapeConstrutor();

    if (!Shape) {
      return null;
    }

    if (
      !edge.startPoint ||
      !edge.endPoint ||
      Number.isNaN(edge.startPoint.x) ||
      Number.isNaN(edge.endPoint)
    ) {
      return null;
    }

    return <Shape edge={edge}></Shape>;
  }
}
