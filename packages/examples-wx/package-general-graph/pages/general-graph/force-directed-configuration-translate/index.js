import F6 from '@antv/f6-wx';

import getData from './data';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * 力导向布局参数动态变化
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
    desc: '',
  },

  onLoad() {
    F6.registerLayout('force', force);
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
    const data = getData();

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'force',
        linkDistance: 50,
        center: [width / 2, height / 2],
      },
      animate: true,
      defaultNode: {
        size: 20,
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
    const my = this;
    setInterval(() => {
      layoutConfigTranslation();
    }, 5000);

    function layoutConfigTranslation() {
      setTimeout(() => {
        my.setData({
          desc: 'Force layout, linkDistance = 100, preventOverlap: true',
        });
        my.graph.updateLayout({
          linkDistance: 100,
          preventOverlap: true,
          nodeSize: 20,
        });
      }, 2500);
      setTimeout(() => {
        my.setData({
          desc: 'Force layout, linkDistance = 50, preventOverlap: false',
        });
        my.graph.updateLayout({
          linkDistance: 50,
          preventOverlap: false,
        });
      }, 5000);
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
