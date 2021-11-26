import F6 from '@antv/f6-wx';

import data from './data';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * hull:用轮廓包裹节点集合
 */

Page({
  canvas: null,
  ctx: null,
  renderer: '', // mini、mini-native等，F6需要，标记环境
  isCanvasInit: false, // canvas是否准备好了
  graph: null,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 1,
    forceMini: false,
    discription: 'Wait for the layout to complete...',
  },

  onLoad() {
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    F6.registerLayout('force', force);

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
    const { nodes } = data;

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 50,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'lasso-select'],
      },
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source.id === 'node0') {
            return 300;
          }
          return 60;
        },
        nodeStrength: (d) => {
          if (d.isLeaf) {
            return -50;
          }
          return -10;
        },
        edgeStrength: (d) => {
          if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
            return 0.7;
          }
          return 0.1;
        },
      },
    });

    this.graph.data({
      nodes,
      edges: data.edges.map((edge, i) => {
        edge.id = `edge${i}`;
        return Object.assign({}, edge);
      }),
    });

    const centerNodes = this.graph.getNodes().filter((node) => !node.getModel().isLeaf);

    this.graph.on('afterlayout', () => {
      this.setData({
        discription: '',
      });
      const hull1 = this.graph.createHull({
        id: 'centerNode-hull',
        type: 'bubble',
        members: centerNodes,
        padding: 10,
      });

      const hull2 = this.graph.createHull({
        id: 'leafNode-hull1',
        members: ['node6', 'node7'],
        padding: 10,
        style: {
          fill: 'lightgreen',
          stroke: 'green',
        },
      });

      const hull3 = this.graph.createHull({
        id: 'leafNode-hull2',
        members: ['node8', 'node9', 'node10', 'node11', 'node12', 'node13'],
        padding: 10,
        style: {
          fill: 'lightgreen',
          stroke: 'green',
        },
      });

      this.graph.on('afterupdateitem', () => {
        hull1.updateData(hull1.members);
        hull2.updateData(hull2.members);
        hull3.updateData(hull3.members);
      });
    });

    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
