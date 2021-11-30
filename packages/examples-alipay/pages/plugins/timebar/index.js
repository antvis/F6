import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import { TimeBar } from '@antv/f6-plugin';

/**
 * basicArcDiagram
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
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();

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
  handleInit(ctx, rect, canvas, renderer) {
    this.isCanvasInit = true;
    this.ctx = wrapContext(ctx);
    this.renderer = renderer;
    this.canvas = canvas;
    this.updateChart();
  },

  /**
   * canvas派发的事件，转派给graph实例
   */
  handleTouch(e) {
    this.graph && this.graph.emitEvent(e);
  },

  updateChart() {
    const { width, height, pixelRatio } = this.data;
    const data = {
      nodes: [],
      edges: [],
    };

    for (let i = 0; i < 50; i++) {
      const id = `node-${i}`;
      data.nodes.push({
        id,
        date: Number(`2020${i}`),
        value: Math.round(Math.random() * 300),
      });

      data.edges.push({
        source: `node-${Math.round(Math.random() * 90)}`,
        target: `node-${Math.round(Math.random() * 90)}`,
      });
    }

    const timeBarData = [];

    for (let i = 0; i < 50; i++) {
      timeBarData.push({
        date: Number(`2020${i}`),
        value: Math.round(Math.random() * 300),
      });
    }
    const timebar = new TimeBar({
      x: 0,
      y: 0,
      width,
      padding: 0,
      type: 'simple',
      data: timeBarData,
    });

    this.graph = new F6.Graph({
      renderer: this.renderer,
      container: this.canvas,
      context: this.ctx,
      width,
      height,
      pixelRatio,
      fitView: true,
      localRefresh: false,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      animate: false,
      defaultNode: {
        size: 30,
      },
      plugins: [timebar],
    });
    this.graph.get('canvas').set('localRefresh', false);
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
