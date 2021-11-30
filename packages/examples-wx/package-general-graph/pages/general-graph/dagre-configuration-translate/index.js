import F6 from '@antv/f6-wx';

import data from './data';
import dagreLayout from '@antv/f6-wx/extends/layout/dagreLayout';

/**
 * Dagre布局参数动态变化
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
    description: '',
  },

  onLoad() {
    F6.registerLayout('dagre', dagreLayout);

    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },

  /**
   * 初始化cnavas回调，缓存获得的context
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
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 30,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'dagre',
        nodeSize: [40, 20],
        nodesep: 1,
        ranksep: 1,
      },
      animate: true,
      defaultNode: {
        size: [40, 20],
        type: 'rect',
        style: {
          lineWidth: 2,
          stroke: '#5B8FF9',
          fill: '#C6E5FF',
        },
      },
      defaultEdge: {
        size: 1,
        color: '#e2e2e2',
        style: {
          endArrow: {
            path: 'M 0,0 L 8,4 L 8,-4 Z',
            fill: '#e2e2e2',
          },
        },
      },
    });

    const me = this;
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    layoutConfigTranslation();

    function layoutConfigTranslation() {
      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 10, node seperation in same level: 1, layout direction: Top->Bottom, alignment of nodes: DL',
        });
        me.graph.updateLayout({
          ranksep: 10,
        });
      }, 1000);

      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: DL',
        });
        me.graph.updateLayout({
          nodesep: 5,
        });
      }, 2500);

      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UL',
        });
        me.graph.updateLayout({
          align: 'UL',
        });
      }, 4000);

      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UR',
        });
        me.graph.updateLayout({
          align: 'UR',
        });
      }, 5500);

      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL',
        });
        me.graph.updateLayout({
          rankdir: 'LR',
          align: 'DL',
        });
      }, 7000);

      setTimeout(() => {
        me.setData({
          description:
            'Dagre layout, rank seperation: 30, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL',
        });
        me.graph.updateLayout({
          ranksep: 30,
        });
      }, 8500);
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
