/*
 * @Author: moyee
 * @Date: 2019-06-27 18:12:06
 * @LastEditors: moyee
 * @LastEditTime: 2019-08-22 18:41:45
 * @Description: 拖动节点的Behavior
 */
// import { Point } from '@antv/g-base';
import { deepMix } from '@antv/util';
import { ICombo, INode, Item, NodeConfig, Point } from '../types';
// import { IGraph } from '../interface/graph';
import Global from '../global';
import { BaseBehavior } from './base';

export class DragNode extends BaseBehavior {
  targets = [];
  targetCombo = null;
  origin = { x: 0, y: 0 };
  point = {};
  originPoint = {};
  getDefaultCfg(): object {
    return {
      updateEdge: true,
      delegateStyle: {},
      // 是否开启delegate
      enableDelegate: false,
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
  validationCombo(item: ICombo) {
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

    const item: INode = evt.item as INode;
    if (!item || item.destroyed || item.hasLocked()) {
      return;
    }

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

    const { enableDelegate } = this.cfg;

    if (enableDelegate) {
      // this.updateDelegate(evt);
    } else {
      this.targets.map((target) => {
        this.update(target, evt);
      });
    }
  }
  /**
   * 拖动结束，设置拖动元素capture为true，更新元素位置，如果是拖动涉及到 combo，则更新 combo 结构
   * @param evt
   */
  onDragEnd(evt) {
    let { delegateRect } = this.cfg;

    this.graph.comboManager.setAutoSize(true);

    if (!this.origin || !this.shouldEnd.call(this, evt)) {
      return;
    }

    // 拖动结束后，设置拖动元素 group 的 capture 为 true，允许拾取拖动元素
    // const item = evt.item as INode;
    // if (item) {
    // const group = item.getContainer();
    // group.set('capture', true);
    // }

    if (delegateRect) {
      delegateRect.remove();
      delegateRect = null;
    }

    // this.updatePositions(evt);

    // const graph = this.graph;

    // 拖动结束后，入栈
    // if (graph.get('enabledStack')) {
    //   const stackData = {
    //     before: { nodes: this.get('beforeDragNodes'), edges: [], combos: [] },
    //     after: { nodes: [], edges: [], combos: [] },
    //   };

    //   this.targets.forEach((target) => {
    //     stackData.after.nodes.push(target.getModel());
    //   });
    //   graph.pushStack('update', clone(stackData));
    // }

    // 拖动结束后emit事件，将当前操作的节点抛出去，目标节点为null
    // graph.emit('dragnodeend', {
    //   items: this.targets,
    //   targetItem: null,
    // });

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

    const item = evt.item as ICombo;
    if (!this.validationCombo(item)) return;

    this.updatePositions(evt);

    const graph = this.graph;

    if (comboActiveState) {
      graph.setItemState(item, comboActiveState, false);
    }

    this.targetCombo = item;

    // 拖动结束后是动态改变 Combo 大小还是将节点从 Combo 中删除
    if (!onlyChangeComboSize) {
      const targetComboModel = item.getModel();
      this.targets.map((node: INode) => {
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
    this.updatePositions(evt);
    if (onlyChangeComboSize) {
      // 拖动节点结束后，动态改变 Combo 的大小
      graph.updateCombos();
    } else {
      this.targets.map((node: INode) => {
        // 拖动的节点有 comboId，即是从其他 combo 中拖出时才处理
        const model = node.getModel();
        if (model.comboId) {
          graph.updateComboTree(node);
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
    const item = evt.item as INode;
    self.updatePositions(evt);
    const graph = self.graph;

    const comboId = item.getModel().comboId as string;

    if (comboId) {
      const combo = graph.findById(comboId);
      if (comboActiveState) {
        graph.setItemState(combo, comboActiveState, false);
      }
      self.targets.map((node: INode) => {
        const nodeModel = node.getModel();
        if (comboId !== nodeModel.comboId) {
          graph.updateItem(node, { comboId: comboId });
        }
      });
      // graph.updateCombo(combo as ICombo);
    } else {
      self.targets.map((node: INode) => {
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
    const item = evt.item as ICombo;
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
    const item = evt.item as ICombo;
    if (!this.validationCombo(item)) return;

    const graph = this.graph;
    if (comboActiveState) {
      graph.setItemState(item, comboActiveState, false);
    }
  }

  updatePositions(evt) {
    if (!this.targets || this.targets.length === 0) return;
    const { enableDelegate } = this.cfg;
    // 当开启 delegate 时，拖动结束后需要更新所有已选中节点的位置
    if (enableDelegate) {
      this.targets.map((node) => this.update(node, evt));
    }
  }
  /**
   * 更新节点
   * @param item 拖动的节点实例
   * @param evt
   */
  update(item: Item, evt) {
    const { origin } = this;
    const model: NodeConfig = item.model;
    const nodeId: string = model.id;
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

    // if (this.get('updateEdge')) {
    //   this.graph.updateItem(item, pos, false);
    // } else {
    //   item.updatePosition(pos);
    // }
  }
  /**
   * 更新拖动元素时的delegate
   * @param {Event} e 事件句柄
   * @param {number} x 拖动单个元素时候的x坐标
   * @param {number} y 拖动单个元素时候的y坐标
   */
  updateDelegate(e) {
    let { delegateRect, delegateStyle } = this.cfg;

    if (!delegateRect) {
      // 拖动多个
      const parent = this.graph.get('group');
      const attrs = deepMix({}, Global.delegateStyle, delegateStyle);

      const { x: cx, y: cy, width, height, minX, minY } = this.calculationGroupPosition(e);
      this.originPoint = { x: cx, y: cy, width, height, minX, minY };
      // model上的x, y是相对于图形中心的，delegateShape是g实例，x,y是绝对坐标
      delegateRect = parent.addShape('rect', {
        attrs: {
          width,
          height,
          x: cx,
          y: cy,
          ...attrs,
        },
        name: 'rect-delegate-shape',
      });
      // delegateRect.set('capture', false);
    } else {
      // @ts-ignore
      const clientX = e.x - this.origin.x + this.originPoint.minX;
      // @ts-ignore
      const clientY = e.y - this.origin.y + this.originPoint.minY;
      delegateRect.attr({
        x: clientX,
        y: clientY,
      });
    }
  }
  /**
   * 计算delegate位置，包括左上角左边及宽度和高度
   * @memberof ItemGroup
   * @return {object} 计算出来的delegate坐标信息及宽高
   */
  calculationGroupPosition(evt) {
    const { graph } = this;
    let { selectedState } = this.cfg;

    const nodes = graph.findAllByState('node', selectedState);
    if (nodes.length === 0) {
      nodes.push(evt.item);
    }

    let minx = Infinity;
    let maxx = -Infinity;
    let miny = Infinity;
    let maxy = -Infinity;

    // 获取已节点的所有最大最小x y值
    for (let i = 0; i < nodes.length; i++) {
      const element = nodes[i];
      const bbox = element.getBBox();
      const { minX, minY, maxX, maxY } = bbox;
      if (minX < minx) {
        minx = minX;
      }

      if (minY < miny) {
        miny = minY;
      }

      if (maxX > maxx) {
        maxx = maxX;
      }

      if (maxY > maxy) {
        maxy = maxY;
      }
    }

    const x = Math.floor(minx);
    const y = Math.floor(miny);
    const width = Math.ceil(maxx) - Math.floor(minx);
    const height = Math.ceil(maxy) - Math.floor(miny);

    return {
      x,
      y,
      width,
      height,
      minX: minx,
      minY: miny,
    };
  }
}
