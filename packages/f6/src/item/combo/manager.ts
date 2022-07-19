import { action, computed, makeObservable, observable } from 'mobx';
import { Graph } from '../../graph/graph';
import { ComboConfig, ID } from '../../types';
import { ItemManger } from '../base/manager';
import { Combo } from './combo';

type ComboConfigMap = Record<ID, ComboConfig>;
export class ComboManager extends ItemManger<ComboConfig, Combo> {
  isAutoSize: boolean = true;
  graph: Graph = null;

  constructor(graph: Graph) {
    super(graph);
    this.graph = graph;
    makeObservable(this, {
      sortedCombos: computed,
      isAutoSize: observable,
      setAutoSize: action,
    });
  }

  createItem(data: any): Combo {
    return new Combo(this.graph, data);
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

  getParsedCombo(comboId) {
    const combos = this.sortedCombos;
    for (const combo of combos) {
      if (combo.id === comboId) return combo;
    }
  }

  setAutoSize(isAutoSize) {
    this.isAutoSize = isAutoSize;
  }
}
