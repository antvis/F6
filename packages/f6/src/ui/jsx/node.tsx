import { Component, jsx } from '@antv/f-engine';
import { IShape } from '../../types';
import { calcBBox, calcMatrix, calculateBBox } from '../adapter/element';
import { getNode } from './components/nodes';

export class Node extends Component {
  nodeRef = { current: null };
  isAnimating = false;

  shouldUpdate(_nextProps: any): boolean {
    return !this.isAnimating;
  }

  willMount(): void {
    this.animate = false;
    const { item } = this.props;
    item.inject('getBBox', this.getBBox);
    item.inject('getAnchorPoints', this.getAnchorPoints);
  }

  didMount(): void {
    const { item, node } = this.props;
    const { x, y } = node;
    (this.container as IShape).item = item;
    this.container.style.x = x;
    this.container.style.y = y;
    this.container.style.draggable = true;
    this.container.style.droppable = true;
  }

  didUpdate(): void {
    const { x, y } = this.props.node;
    this.container.style.x = x;
    this.container.style.y = y;
  }

  getBBox = () => {
    const { node } = this.props;
    if (!node) return;
    let matrix = calcMatrix(this.container);
    return calculateBBox(calcBBox(this.getKeyShape()), matrix);
  };

  getShapeNode() {
    return this.nodeRef.current;
  }

  getKeyShape() {
    return this.nodeRef.current?.getKeyShape();
  }

  getNodeRoot() {
    return this.nodeRef.current?.getRootShape();
  }

  getAnchorPoints = () => {
    const { node } = this.props;
    return this.getShapeNode()?.getAnchorPoints(node);
  };

  onFrame = () => {
    this.isAnimating = true;
    const { item } = this.props;
    let { x, y } = this.getNodeRoot().style;
    if (typeof x === 'string') {
      x = Number(x.replace('px', ''));
    }
    if (typeof y === 'string') {
      y = Number(y.replace('px', ''));
    }

    item.setPosition({ x, y });
  };

  onEnd = () => {
    this.isAnimating = false;
  };

  render() {
    const { node, appear, update, end, states } = this.props;
    const Shape = getNode(node?.type);
    if (!Shape) {
      console.warn('不存在对应的 Node Shape');
      return null;
    }

    return (
      <Shape
        node={node}
        animation={{
          appear,
          update,
          end,
        }}
        onFrame={this.onFrame}
        onEnd={this.onEnd}
        ref={this.nodeRef}
        states={states}
      ></Shape>
    );
  }
}
