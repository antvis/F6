import { Component, jsx } from '@antv/f-engine';
import { getCombo } from './components/combos';

import { calcBBox, calcMatrix, calculateBBox } from '../adapter/element';

import { isNumber } from '@antv/util';
import global from '../../global';
import { IShape } from '../../types';

export class Combo extends Component {
  nodeRef = { current: null };
  cacheCombo = {};
  size = {};
  position = {};
  isInited = false;

  willMount(): void {
    const { item } = this.props;
    item.inject('getBBox', this.getBBox);
  }

  didMount(): void {
    const { sortedCombo, item } = this.props;
    this.container.style.zIndex = sortedCombo.depth;
    // @ts-ignore
    (this.container as IShape).item = item;
    this.isInited = true;
  }

  didUpdate(): void {
    const { sortedCombo } = this.props;
    this.container.style.zIndex = sortedCombo.depth;
  }

  getBBox = () => {
    const { combo } = this.props;
    if (!combo) return;
    let matrix = calcMatrix(this.getNodeRoot());
    return calculateBBox(calcBBox(this.getKeyShape()), matrix);
  };

  calcRenderRect(padding = 0) {
    const { combo } = this.props;
    let x, y;
    const bbox = this.context.graph.comboManager.calcComboBBox(combo.id);
    const size = {
      r: Math.hypot(bbox.height, bbox.width) / 2 || global.defaultCombo.size[0] / 2,
      width: bbox.width || global.defaultCombo.size[0],
      height: bbox.height || global.defaultCombo.size[1],
    };
    if (isNumber(padding)) {
      size.r += padding;
      size.width += padding * 2;
      size.height += padding * 2;
    } else {
      size.r += padding[0];
      size.width += padding[1] + padding[3] || padding[1] * 2;
      size.height += padding[0] + padding[2] || padding[0] * 2;
    }

    if (!isNaN(bbox.x)) x = bbox.x;
    else if (isNaN(x)) x = Math.random() * 100;
    if (!isNaN(bbox.y)) y = bbox.y;
    else if (isNaN(y)) y = Math.random() * 100;
    this.size = size;
    this.position = { x, y };
  }

  getShapeNode() {
    return this.nodeRef.current;
  }

  getKeyShape() {
    return this.nodeRef.current?.getKeyShape();
  }

  getNodeRoot() {
    return this.nodeRef.current?.getRootShape();
  }

  render() {
    const { isAutoSize, combo, sortedCombo, item, states } = this.props;

    const Shape = getCombo(combo?.type);

    if (!Shape) {
      console.warn('不存在对应的 Node Shape');
      return null;
    }

    let finalPos = {};
    if ((isAutoSize && sortedCombo.children.length > 0) || !this.isInited) {
      this.calcRenderRect(50);
      finalPos = this.position;
    } else {
      finalPos = { x: combo.x, y: combo.y };
    }

    if (sortedCombo.children.length === 0) {
      this.calcRenderRect(50);
    }

    item.syncPosition(finalPos);

    const size = this.size;

    this.cacheCombo = {
      ...{ ...combo, ...finalPos },
      style: { ...(size || {}) },
    };

    return <Shape ref={this.nodeRef} combo={this.cacheCombo} states={states} />;
  }
}
