import F6 from '@antv/f6-wx';
import TreeGraph from '@antv/f6-wx/extends/graph/treeGraph';

import data_ from './data.js';

/**
 * drag-subtree:拖拽子树改变结构
 */

Page({
  canvas: null,
  ctx: null, // 延迟获取的2d context
  renderer: '', // mini、mini-native等，F6需要，标记环境
  isCanvasInit: false, // canvas是否准备好了
  graph: null,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 1,
    forceMini: false,
    discription: 'Move a subtree to a new parent by dragging the root node of the subtree.',
  },

  onLoad() {
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },

  /**
   * 初始化canvas回调，缓存获得的context
   * @param {*} ctx 绘图context
   * @param {*} rect 宽高信息
   * @param {*} canvas canvas对象，在render为mini时为null
   * @param {*} renderer 使用canvas 1.0还是canvas 2.0，mini | mini-native
   */
  handleInit(event) {
    const { ctx, canvas, renderer } = event.detail;
    this.isCanvasInit = true;
    this.ctx = ctx;
    this.renderer = renderer;
    this.canvas = canvas;
    this.updateChart();
  },

  /**
   * canvas派发的事件，转派给graph实例
   */
  handleTouch(e) {
    this.graph && this.graph.emitEvent(e.detail);
  },

  updateChart() {
    const { width, height, pixelRatio } = this.data;

    // 创建F6实例
    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      modes: {
        default: [
          'drag-canvas',
          'zoom-canvas',
          {
            type: 'drag-node',
            enableDelegate: true,
          },
        ],
      },
      defaultNode: {
        size: [26, 26],
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF',
        },
      },
      nodeStateStyles: {
        closest: {
          fill: '#f00',
        },
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });

    this.graph.node((node) => {
      return {
        label: node.id,
        labelCfg: {
          offset: 10,
          position: node.children && node.children.length > 0 ? 'left' : 'right',
        },
      };
    });

    let minDisNode;
    this.graph.on('node:dragstart', () => {
      minDisNode = undefined;
    });
    this.graph.on('node:drag', (e) => {
      minDisNode = undefined;
      const { item } = e;
      const model = item.getModel();
      const nodes = this.graph.getNodes();
      let minDis = Infinity;
      nodes.forEach((inode) => {
        this.graph.setItemState(inode, 'closest', false);
        const node = inode.getModel();
        if (node.id === model.id) return;
        const dis = (node.x - e.x) * (node.x - e.x) + (node.y - e.y) * (node.y - e.y);
        if (dis < minDis) {
          minDis = dis;
          minDisNode = inode;
        }
      });
      console.log('minDis', minDis, minDisNode);
      if (minDis < 2000) this.graph.setItemState(minDisNode, 'closest', true);
      else minDisNode = undefined;
    });

    this.graph.on('node:dragend', (e) => {
      if (!minDisNode) {
        this.setData({
          discription: 'Failed. No node close to the dragged node.',
        });
        return;
      }
      const { item } = e;
      const id = item.getID();
      const data = this.graph.findDataById(id);
      // if the minDisNode is a descent of the dragged node, return
      let isDescent = false;
      const minDisNodeId = minDisNode.getID();
      console.log('dragend', minDisNodeId, isDescent, data, id);

      F6.Util.traverseTree(data, (d) => {
        if (d.id === minDisNodeId) isDescent = true;
      });
      if (isDescent) {
        this.setData({
          discription: 'Failed. The target node is a descendant of the dragged node.',
        });
        return;
      }
      this.graph.removeChild(id);

      const me = this;

      setTimeout(() => {
        const newParentData = this.graph.findDataById(minDisNodeId);
        let newChildren = newParentData.children;
        if (newChildren) newChildren.push(data);
        else newChildren = [data];
        me.graph.updateChildren(newChildren, minDisNodeId);
        me.setData({
          discription: 'Success.',
        });
      }, 600);
    });

    this.graph.data(data_);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
