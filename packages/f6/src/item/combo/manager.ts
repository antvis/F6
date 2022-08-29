import { isNil, isNumber } from '@antv/util';
import global from '../../global';
import { Graph } from '../../graph/graph';
import { ComboConfig, ID } from '../../types';
import { ItemManger } from '../base/manager';
import { Combo } from './combo';

type ComboConfigMap = Record<ID, ComboConfig>;
export class ComboManager extends ItemManger<ComboConfig, Combo> {
  graph: Graph = null;

  constructor(graph: Graph) {
    super(graph);
    this.graph = graph;
  }

  createItem(data: any): Combo {
    return new Combo(this.graph, data);
  }

  calcComboBBox(sortedCombo) {
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
      return this.graph.findById(combo.id).getBBox();
    }

    children.forEach((node) => {
      const childBBox = this.graph.findById(node.id).getBBox();
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

  get sortedCombos() {
    const combos = this.models;
    const nodes = this.graph.nodeManager.models;
    // 邻接
    const combosMap: ComboConfigMap = {};
    combos.forEach((combo) => {
      combosMap[combo.id] = { ...combo };
    });

    // 转树
    const tree: Array<ComboConfig> = [];
    for (const [key, value] of Object.entries(combosMap)) {
      if (typeof combosMap[key].parentId === 'undefined') {
        tree.push(value);
      } else {
        const parent = combosMap[value.parentId];
        parent.combos = [...(parent.combos || []), value];
      }
    }

    // 广度 + 计算depth + reverse = 节点从叶子向根排序
    const stack: Array<[ComboConfig, number]> = [[{ combos: tree } as ComboConfig, 0]];
    let combosSorted = [];
    while (stack.length !== 0) {
      for (let i = 0, len = stack.length; i < len; i++) {
        const [node, depth] = stack.shift();
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

  updateParentId(id, parentId) {
    if (isNil(id)) return;

    let hasLoop = false;

    // 检测环
    let next = this.items[parentId];
    while (next) {
      if (next.parentId === id) {
        hasLoop = true;
        break;
      }
      next = this.items[next.parentId];
    }

    if (hasLoop) {
      return;
    }

    this.updateItem(id, { parentId: parentId });
  }

  getParsedCombo(comboId) {
    const combos = this.sortedCombos;
    for (const combo of combos) {
      if (combo.id === comboId) return combo;
    }
  }

  updateComboSize() {
    this.sortedCombos.forEach((sortedCombo) => {
      const item = this.graph.findById(sortedCombo.id);
      const padding = item.model.padding || 0;
      let x, y, width, height;
      const bbox = this.calcComboBBox(sortedCombo);

      if (sortedCombo.children.length === 0) {
        width = global.defaultCombo.size[0];
        height = global.defaultCombo.size[1];
      } else {
        width = bbox.width || global.defaultCombo.size[0];
        height = bbox.height || global.defaultCombo.size[1];
      }

      if (isNumber(padding)) {
        width += padding * 2;
        height += padding * 2;
      } else {
        width += padding[1] + padding[3] || padding[1] * 2;
        height += padding[0] + padding[2] || padding[0] * 2;
      }

      if (!isNaN(bbox.x)) x = bbox.x;
      else if (isNaN(x)) x = Math.random() * 100;
      if (!isNaN(bbox.y)) y = bbox.y;
      else if (isNaN(y)) y = Math.random() * 100;
      item.updateItem({
        x,
        y,
        size: [width, height],
        depth: sortedCombo.depth,
      });
    });
  }
}
