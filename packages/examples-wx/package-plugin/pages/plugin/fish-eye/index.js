import F6 from '@antv/f6-wx';
import data from './data';
import { Fisheye } from '@antv/f6-plugin/f6Plugin';

/**
 * basic-arc-diagram
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
    pixelRatio: 2,
    forceMini: false,
  },

  onLoad() {
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

    const fisheye = new Fisheye({
      r: 200,
      trigger: 'drag',
    });
    const colors = [
      '#8FE9FF',
      '#87EAEF',
      '#FFC9E3',
      '#A7C2FF',
      '#FFA1E3',
      '#FFE269',
      '#BFCFEE',
      '#FFA0C5',
      '#D5FF86',
    ];

    data.nodes.forEach((node) => {
      node.label = node.id;
      node.size = Math.random() * 30 + 10;
      node.style = {
        fill: colors[Math.floor(Math.random() * 9)],
        lineWidth: 0,
      };
    });

    this.graph = new F6.Graph({
      renderer: this.renderer,
      container: this.canvas,
      context: this.ctx,
      pixelRatio,
      width,
      height,
      fitView: true,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      plugins: [fisheye],
    });
    this.graph.data(data);
    this.graph.render();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
