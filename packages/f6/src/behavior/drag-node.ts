import { Combo } from '../item/combo/combo';
import { Node } from '../item/node/node';
import { Item, Point } from '../types';
import { BaseBehavior } from './base';

interface DragNodeCfg {
  // 拖动节点过程中是否只改变 Combo 的大小，而不改变其结构
  onlyChangeComboSize: boolean;
  // 拖动过程中目标 combo 状态样式
  comboActiveState: string;
  selectedState: string;
}
export class DragNode extends BaseBehavior<DragNodeCfg> {
  targets = [];
  targetCombo = null;
  origin = { x: 0, y: 0 };
  point = {};
  originPoint = {};
  getDefaultCfg(): DragNodeCfg {
    return {
      // 拖动节点过程中是否只改变 Combo 的大小，而不改变其结构
      onlyChangeComboSize: false,
      // 拖动过程中目标 combo 状态样式
      comboActiveState: '',
      selectedState: 'selected',
    };
  }
  getEvents() {
    return {
      'node:dragstart': 'onDragStart',
      'node:drag': 'onDrag',
      'node:dragend': 'onDragEnd',
      'combo:dragenter': 'onDragEnter',
      'combo:dragleave': 'onDragLeave',
      'combo:drop': 'onDropCombo',
      'node:drop': 'onDropNode',
      'canvas:drop': 'onDropCanvas',
    };
  }
  validationCombo(item: Combo) {
    if (!this.origin || !item || item.destroyed) {
      return false;
    }

    const type = item.type;
    if (type !== 'combo') {
      return false;
    }
    return true;
  }
  /**
   * 开始拖动节点
   * @param evt
   */
  onDragStart(evt) {
    const { selectedState, onlyChangeComboSize } = this.cfg;
    if (!this.shouldBegin.call(this, evt)) {
      return;
    }

    const item: Node = evt.item;
    if (!item || item.destroyed || item.hasLocked()) {
      return;
    }
    this.graph.setEnableAnimate(false);
    this.graph.comboManager.setAutoSize(onlyChangeComboSize);

    this.targets = [];

    // 将节点拖入到指定的 Combo
    this.targetCombo = null;

    // 获取所有选中的元素
    const nodes = this.graph.findAllByState('node', selectedState);

    const currentNodeId = item.id;

    // // 当前拖动的节点是否是选中的节点
    const dragNodes = nodes.filter((node) => {
      const nodeId = node.id;
      return currentNodeId === nodeId;
    });

    // 只拖动当前节点
    if (dragNodes.length === 0) {
      this.targets.push(item);
    } else if (nodes.length > 1) {
      // 拖动多个节点
      nodes.forEach((node) => {
        const locked = node.hasLocked();
        if (!locked) {
          this.targets.push(node);
        }
      });
    } else {
      this.targets.push(item);
    }
    const beforeDragNodes = [];
    this.targets.forEach((t) => {
      beforeDragNodes.push(t);
    });
    this.set('beforeDragNodes', beforeDragNodes);

    this.origin = {
      x: evt.x,
      y: evt.y,
    };

    this.point = {};
    this.originPoint = {};
  }

  /**
   * 持续拖动节点
   * @param evt
   */
  onDrag(evt) {
    if (!this.origin) {
      return;
    }

    if (!this.shouldUpdate.call(this, evt)) {
      return;
    }

    this.targets.map((target) => {
      this.update(target, evt);
    });
  }
  /**
   * 拖动结束，设置拖动元素capture为true，更新元素位置，如果是拖动涉及到 combo，则更新 combo 结构
   * @param evt
   */
  onDragEnd(evt) {
    this.graph.comboManager.setAutoSize(true);
    this.graph.setEnableAnimate(true);

    if (!this.origin || !this.shouldEnd.call(this, evt)) {
      return;
    }

    this.point = {};
    this.origin = null;
    this.originPoint = {};
    this.targets.length = 0;
    this.targetCombo = null;
  }
  /**
   * 拖动过程中将节点放置到 combo 上
   * @param evt
   */
  onDropCombo(evt) {
    const { comboActiveState, onlyChangeComboSize } = this.cfg;

    const item = evt.item as Combo;
    if (!this.validationCombo(item)) return;

    const graph = this.graph;

    if (comboActiveState) {
      graph.setItemState(item, comboActiveState, false);
    }

    this.targetCombo = item;

    // 拖动结束后是动态改变 Combo 大小还是将节点从 Combo 中删除
    if (!onlyChangeComboSize) {
      const targetComboModel = item.getModel();
      this.targets.map((node: Node) => {
        const nodeModel = node.getModel();
        if (nodeModel.comboId !== targetComboModel.id) {
          graph.updateItem(node, { comboId: targetComboModel.id });
        }
      });
    }

    // 将节点拖动到 combo 上面，emit事件抛出当前操作的节点及目标 combo
    graph.emit('dragnodeend', {
      items: this.targets,
      targetItem: this.targetCombo,
    });
  }

  onDropCanvas(evt) {
    const { onlyChangeComboSize } = this.cfg;

    const graph = this.graph;
    if (!this.targets || this.targets.length === 0) return;

    if (!onlyChangeComboSize) {
      this.targets.map((node: Node) => {
        // 拖动的节点有 comboId，即是从其他 combo 中拖出时才处理
        const model = node.getModel();
        if (model.comboId) {
          graph.updateItem(node, { comboId: null });
        }
      });
    }
  }

  /**
   * 拖动放置到某个 combo 中的子 node 上
   * @param evt
   */
  onDropNode(evt) {
    const { comboActiveState } = this.cfg;

    const self = this;
    if (!self.targets || self.targets.length === 0) return;
    const item = evt.item as Node;
    const graph = self.graph;

    const comboId = item.getModel().comboId as string;

    if (comboId) {
      const combo = graph.findById(comboId);
      if (comboActiveState) {
        graph.setItemState(combo, comboActiveState, false);
      }
      self.targets.map((node: Node) => {
        const nodeModel = node.getModel();
        if (comboId !== nodeModel.comboId) {
          graph.updateItem(node, { comboId: comboId });
        }
      });
    } else {
      self.targets.map((node: Node) => {
        const model = node.getModel();
        if (model.comboId) {
          // graph.updateComboTree(node);
          graph.updateItem(node, { comboId: model.comboId });
        }
      });
    }

    // 将节点拖动到另外个节点上面，emit 事件抛出当前操作的节点及目标节点
    graph.emit('dragnodeend', {
      items: self.targets,
      targetItem: item,
    });
  }
  /**
   * 将节点拖入到 Combo 中
   * @param evt
   */
  onDragEnter(evt) {
    const { comboActiveState } = this.cfg;
    const item = evt.item as Combo;
    if (!this.validationCombo(item)) return;

    const graph = this.graph;
    if (comboActiveState) {
      graph.setItemState(item, comboActiveState, true);
    }
  }
  /**
   * 将节点从 Combo 中拖出
   * @param evt
   */
  onDragLeave(evt) {
    const { comboActiveState } = this.cfg;
    const item = evt.item as Combo;
    if (!this.validationCombo(item)) return;

    const graph = this.graph;
    if (comboActiveState) {
      graph.setItemState(item, comboActiveState, false);
    }
  }

  /**
   * 更新节点
   * @param item 拖动的节点实例
   * @param evt
   */
  update(item: Item, evt) {
    const { origin } = this;
    const model = item.model;
    const nodeId = model.id;
    if (!this.point[nodeId]) {
      this.point[nodeId] = {
        x: model.x || 0,
        y: model.y || 0,
      };
    }

    const x: number = evt.x - origin.x + this.point[nodeId].x;
    const y: number = evt.y - origin.y + this.point[nodeId].y;

    const pos: Point = { x, y };

    this.graph.nodeManager.setPosition(nodeId, pos);
  }
}
