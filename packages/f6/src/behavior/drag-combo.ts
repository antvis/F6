/*
 * @Author: moyee
 * @LastEditors: moyee
 * @Description: 拖动 Combo
 */
import { each } from '@antv/util';
// import { IGroup } from '@antv/g-base';
// import { ComboConfig, Combo, INode, Item } from '../types';
// import { IGraph } from '../interface/graph';
import { Combo } from '../item/combo/combo';
import { BaseBehavior } from './base';

/**
 * 遍历拖动的 Combo 下的所有 Combo
 * @param data 拖动的 Combo
 * @param fn
 */
const traverseCombo = (data, fn: (param: any) => boolean) => {
  if (fn(data) === false) {
    return;
  }

  if (data) {
    const combos = data.children;
    if (combos?.length === 0) {
      return false;
    }
    each(combos, (child) => {
      traverseCombo(child, fn);
    });
  }
};

interface DragComboCfg {
  // 拖动节点过程中是否只改变 Combo 的大小，而不改变其结构
  onlyChangeComboSize: boolean;
  // 拖动过程中目标 combo 状态样式
  activeState: string;
  selectedState: string;
}

export class DragCombo extends BaseBehavior<DragComboCfg> {
  targets = [];
  currentItemChildCombos = [];
  point = {};
  originPoint = {};
  origin = { x: 0, y: 0 };
  enableDelegate = false;
  delegateShape = null;

  getDefaultCfg(): DragComboCfg {
    return {
      // 拖动节点过程中是否只改变 Combo 的大小，而不改变其结构
      onlyChangeComboSize: false,
      // 拖动过程中目标 combo 状态样式
      activeState: '',
      selectedState: 'selected',
    };
  }
  getEvents() {
    return {
      'combo:dragstart': 'onDragStart',
      'combo:drag': 'onDrag',
      'combo:dragend': 'onDragEnd',
      'combo:drop': 'onDropCombo',
      'node:drop': 'onDropNode',
      'canvas:drop': 'onDropCanvas',
      'combo:dragenter': 'onDragEnter',
      'combo:dragleave': 'onDragLeave',
    };
  }
  validationCombo(evt) {
    const { item } = evt;
    if (!item || item.destroyed) {
      return false;
    }

    if (!this.shouldUpdate.call(this, evt)) {
      return false;
    }

    const type = item.type;

    if (type !== 'combo') {
      return false;
    }
    return true;
  }
  onDragStart(evt) {
    const { selectedState, activeState, onlyChangeComboSize } = this.cfg;
    const graph = this.graph;
    const { item } = evt;

    if (!this.validationCombo(evt)) return;
    this.graph.setEnableAnimate(false);
    this.graph.comboManager.setAutoSize(onlyChangeComboSize);

    this.targets = [];

    // 获取所有选中的 Combo
    const combos = graph.findAllByState('combo', selectedState);

    const currentCombo = item.id;

    const dragCombos = combos.filter((combo) => {
      const comboId = combo.id;
      return currentCombo === comboId;
    });

    if (dragCombos.length === 0) {
      this.targets.push(item);
    } else {
      this.targets = combos;
    }

    if (activeState) {
      this.targets.map((combo) => {
        const model = combo.getModel();
        if (model.parentId) {
          const parentCombo = graph.findById(model.parentId);
          if (parentCombo) {
            graph.setItemState(parentCombo, activeState, true);
          }
        }
      });
    }

    this.point = {};
    this.originPoint = {};

    this.origin = {
      x: evt.x,
      y: evt.y,
    };

    this.currentItemChildCombos = [];

    const comboEntity = this.graph.comboManager.getParsedCombo(item.id);

    traverseCombo(comboEntity, (model) => {
      this.currentItemChildCombos.push(model.id);
      return true;
    });
  }

  onDrag(evt) {
    if (!this.origin) {
      return;
    }

    if (!this.validationCombo(evt)) return;

    each(this.targets, (item) => {
      this.updateCombo(item, evt);
    });
  }

  onDropCombo(evt) {
    // 被放下的目标 combo
    const { item } = evt;
    if (!item || !this.targets || item.destroyed) {
      return;
    }
    const { onlyChangeComboSize } = this.cfg;

    const graph = this.graph;

    const targetModel = item.getModel();

    this.targets.map((combo) => {
      const model = combo.getModel();
      if (
        model.id !== targetModel.parentId &&
        model.parentId !== targetModel.id &&
        model.id !== targetModel.id
      ) {
        // 将 Combo 放置到某个 Combo 上面时，只有当 onlyChangeComboSize 为 false 时候才更新 Combo 结构
        if (!onlyChangeComboSize) {
          graph.updateItem(combo, { parentId: targetModel.id });
        }
      }
    });
  }

  onDropCanvas() {
    if (!this.targets) {
      return;
    }
    const { onlyChangeComboSize } = this.cfg;

    const graph = this.graph;

    this.targets.map((combo) => {
      // 将 Combo 放置到某个 Combo 上面时，只有当 onlyChangeComboSize 为 false 时候才更新 Combo 结构
      if (!onlyChangeComboSize) {
        graph.updateItem(combo, { parentId: undefined });
      }
    });
  }

  onDropNode(evt) {
    if (!this.targets || this.targets.length === 0) return;
    const graph = this.graph;
    const { onlyChangeComboSize } = this.cfg;

    const item = evt.item;
    const comboId = item.getModel().comboId as string;
    let droppedCombo;
    // 如果被放置的的节点有 comboId，且这个 comboId 与正在被拖拽的 combo 的父 id 不相同，则更新父亲为 comboId
    if (comboId) {
      this.targets.map((combo) => {
        if (!onlyChangeComboSize) {
          if (comboId !== combo.id) {
            droppedCombo = graph.findById(comboId);
            if (comboId !== combo.getModel().parentId)
              graph.updateItem(combo, { parentId: comboId });
          }
        }
      });
    } else {
      // 如果被放置的节点没有 comboId，且正在被拖拽的 combo 有父 id，则更新父亲为 undefined
      this.targets.map((combo) => {
        if (!onlyChangeComboSize) {
          const model = combo.getModel();
          if (model.comboId) {
            graph.updateItem(combo, { parentId: undefined });
          }
        }
      });
    }
  }
  onDragEnter(evt) {
    const { activeState } = this.cfg;
    if (!this.origin || this.targets?.length === 0) {
      return;
    }

    if (!this.validationCombo(evt)) return;

    const { item } = evt;
    const graph = this.graph;
    if (activeState) {
      graph.setItemState(item, activeState, true);
    }
  }
  onDragLeave(evt) {
    const { activeState } = this.cfg;

    if (!this.origin || this.targets?.length === 0) {
      return;
    }

    if (!this.validationCombo(evt)) return;

    const item = evt.item;
    const graph = this.graph;
    if (activeState) {
      graph.setItemState(item, activeState, false);
    }
  }
  onDragEnd(evt) {
    this.graph.setEnableAnimate(true);
    this.graph.comboManager.setAutoSize(true);

    if (!this.targets || this.targets.length === 0) return;
    const item = evt.item;
    const { activeState } = this.cfg;
    const parentCombo = this.getParentCombo(item.getModel().parentId);
    const graph = this.graph;
    if (parentCombo && activeState) {
      graph.setItemState(parentCombo, activeState, false);
    }

    this.point = [];
    this.origin = null;
    this.originPoint = null;
    this.targets.length = 0;
  }

  /**
   * 遍历 comboTree，分别更新 node 和 combo
   * @param data
   * @param fn
   */
  traverse(data, fn: (data) => boolean) {
    if (fn(data) === false) {
      return;
    }

    if (data) {
      const combos = data.combos;
      each(combos, (child) => {
        this.traverse(child, fn);
      });

      const nodes = data.nodes;
      each(nodes, (child) => {
        this.traverse(child, fn);
      });
    }
  }

  updateCombo(item: Combo, evt) {
    const parsedCombo = this.graph.comboManager.getParsedCombo(item.id);
    this.traverse(parsedCombo, (param) => {
      const item = this.graph.findById(param.id);
      if (item.destroyed) {
        return false;
      }
      this.updateSignleItem(item, evt);
      return true;
    });
  }

  updateSignleItem(item: Combo, evt) {
    const { origin } = this;
    const itemId = item.id;

    if (!this.point[itemId]) {
      this.point[itemId] = {
        x: item.model.x,
        y: item.model.y,
      };
    }

    const x: number = evt.x - origin.x + this.point[itemId].x;
    const y: number = evt.y - origin.y + this.point[itemId].y;
    item.setPosition({ x, y });
  }

  /**
   * 根据 ID 获取父 Combo
   * @param parentId 父 Combo ID
   */
  getParentCombo(parentId: string): Combo | undefined {
    const graph = this.graph;
    if (!parentId) {
      return undefined;
    }

    const parentCombo = graph.findById(parentId) as Combo;
    if (!parentCombo) {
      return undefined;
    }

    return parentCombo;
  }
}
