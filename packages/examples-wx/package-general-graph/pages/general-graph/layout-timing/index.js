import F6 from '@antv/f6-wx';

import data from './data';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * layout-timing
 */

let currentPage = null;

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
    message: '',
  },

  onLoad() {
    F6.registerLayout('force', force);
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();
    // 获取文本框
    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
    currentPage = this;
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
      fitViewPadding: 40,
      layout: {
        type: 'force',
        preventOverlap: true,
        nodeSize: 20,
      },
      modes: {
        default: ['drag-node'],
      },
    });

    // 监听
    this.graph.on('beforelayout', () => {
      currentPage.setData({
        message:
          'Doing force-directed layout... the text will be changed after the layout being done.',
      });
    });

    this.graph.on('afterlayout', () => {
      currentPage.setData({
        message: 'Done!',
      });
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
