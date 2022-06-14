// @ts-nocheck
import { action, computed, makeObservable, observable } from 'mobx';
import { Item } from '../base/item';
import { ItemManger } from '../base/manager';
import { Combo } from './combo';

export class ComboManager extends ItemManger {
  isAutoSize = true;

  graph = null;

  constructor(graph) {
    super();
    this.graph = graph;
    makeObservable(this, {
      sortedCombos: computed,
      isAutoSize: observable,
      setAutoSize: action,
    });
  }

  createItem(data: any): Item {
    return new Combo(data, this.graph);
  }

  get sortedCombos() {
    const combos = this.models;
    const nodes = this.graph.nodeManager.models;
    // 邻接
    const combosMap = {};
    combos.forEach((combo) => {
      combosMap[combo.id] = { ...combo };
    });

    // 转树
    const tree = [];
    for (const [key, value] of Object.entries(combosMap)) {
      if (typeof combosMap[key].parentId === 'undefined') {
        tree.push(value);
      } else {
        const parent = combosMap[value.parentId];
        parent.combos = [...(parent.combos || []), value];
      }
    }

    // 广度 + 计算depth + reverse = 节点从叶子向根排序
    const stack = [[{ combos: tree }, 0]];
    let combosSorted = [];
    while (stack.length !== 0) {
      for (let i = 0, len = stack.length; i < len; i++) {
        let [node, depth] = stack.shift();
        const nextDepth = depth + 1;
        node.combos?.forEach((child) => {
          child.depth = nextDepth;
          combosSorted.push(child);
          stack.push([child, nextDepth]);
        });
      }
    }
    combosSorted = combosSorted.reverse();

    // 添加node子节点依赖
    nodes.forEach((node) => {
      const combo = combosMap[node.comboId];
      if (combo) {
        combo.nodes = [...(combo.nodes || []), node];
      }
    });
    combosSorted.forEach(
      (combo) => (combo.children = [...(combo.nodes || []), ...(combo.combos || [])]),
    );

    return combosSorted;
  }

  getParsedCombo(comboId) {
    const combos = this.sortedCombos;
    for (const combo of combos) {
      if (combo.id === comboId) return combo;
    }
  }

  calcComboBBox(id) {
    const combo = this.getParsedCombo(id);

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
      const childBBox = this.graph.getItem(node.id).getBBox();
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

  translate(id, pos) {
    const combo = this.getParsedCombo(id);
    this.graph.getItem(id).translate(pos);
    combo.nodes?.forEach((entity) => {
      this.graph.getItem(entity.id).translate(pos);
    });
    combo.combos?.forEach((entity) => {
      this.translate(entity.id, pos);
    });
  }

  setAutoSize(isAutoSize) {
    this.isAutoSize = isAutoSize;
  }
}
