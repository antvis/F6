import { jsx } from '@antv/f-engine';
import { getCombo } from './components/combos';

import { calcBBox, calcMatrix, calculateBBox } from '../adapter/element';

import { isNumber } from '@antv/util';
import global from '../../global';
import { IShape } from '../../types';
import { Node } from './node';

export class Combo extends Node {
  nodeRef = { current: null };
  cacheCombo = {};
  size = {};
  position = {};
  isInited = false;

  /**
   * 返回 View 侧的 model
   * @returns
   */
  getModel() {
    return this.props.combo;
  }

  willMount(): void {
    const { combo, item } = this.props;
    // @ts-ignore
    (this.container as IShape).item = item;
    // 管理挂在 context 上的 combo 实例
    this.context.f6Context.addCombo(combo.id, this);
  }

  didMount(): void {
    const { sortedCombo, combo } = this.props;
    // 必须设置container的zIndex控制多个combo的层叠关系
    this.container.style.zIndex = sortedCombo.depth;
    this.isInited = true;
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = combo.visible === false ? 'hidden' : 'visible';
  }

  didUpdate(): void {
    const { sortedCombo, combo } = this.props;
    this.container.style.zIndex = sortedCombo.depth;
    this.container.setAttribute('draggable', true);
    this.container.setAttribute('droppable', true);
    this.container.style.visibility = combo.visible === false ? 'hidden' : 'visible';
  }

  getBBox = () => {
    const { combo } = this.props;
    if (!combo) return;
    let matrix = calcMatrix(this.getNodeRoot());
    return calculateBBox(calcBBox(this.getKeyShape()), matrix);
  };

  calcComboBBox() {
    const { sortedCombo } = this.props;
    const f6Context = this.context.f6Context;

    const combo = sortedCombo;

    const children = [...(combo.nodes || []), ...(combo.combos || [])];

    const comboBBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
      x: undefined,
      y: undefined,
      width: undefined,
      height: undefined,
      centerX: undefined,
      centerY: undefined,
    };

    if (!children || children.length === 0) {
      return comboBBox;
    }

    children.forEach((node) => {
      const childBBox = f6Context.getNodeLike(node.id).getBBox();
      if (!childBBox) return; // ignore hidden children
      if (childBBox.x && comboBBox.minX > childBBox.minX) comboBBox.minX = childBBox.minX;
      if (childBBox.y && comboBBox.minY > childBBox.minY) comboBBox.minY = childBBox.minY;
      if (childBBox.x && comboBBox.maxX < childBBox.maxX) comboBBox.maxX = childBBox.maxX;
      if (childBBox.y && comboBBox.maxY < childBBox.maxY) comboBBox.maxY = childBBox.maxY;
    });
    comboBBox.x = (comboBBox.minX + comboBBox.maxX) / 2;
    comboBBox.y = (comboBBox.minY + comboBBox.maxY) / 2;
    comboBBox.width = comboBBox.maxX - comboBBox.minX;
    comboBBox.height = comboBBox.maxY - comboBBox.minY;

    comboBBox.centerX = (comboBBox.minX + comboBBox.maxX) / 2;
    comboBBox.centerY = (comboBBox.minY + comboBBox.maxY) / 2;

    Object.keys(comboBBox).forEach((key) => {
      if (comboBBox[key] === Infinity || comboBBox[key] === -Infinity) {
        comboBBox[key] = undefined;
      }
    });

    return comboBBox;
  }

  calcRenderRect(padding = 0) {
    let x, y;
    const bbox = this.calcComboBBox();
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
      style: { ...combo.style, ...(size || {}) },
    };

    return <Shape ref={this.nodeRef} combo={this.cacheCombo} states={states} />;
  }

  didUnmount(): void {
    this.context.f6Context.removeCombo(this.props.combo.id);
  }
}
