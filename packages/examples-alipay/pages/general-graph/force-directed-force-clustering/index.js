import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import getData from './data';
import force from '@antv/f6/dist/extends/layout/forceLayout';

/**
 * 力导向布局聚类
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
    F6.registerLayout('force', force);
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
    const data = getData();

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      layout: {
        type: 'force',
        clustering: true,
        clusterNodeStrength: -5,
        clusterEdgeDistance: 200,
        clusterNodeSize: 20,
        clusterFociStrength: 1.2,
        nodeSpacing: 5,
        preventOverlap: true,
      },
      defaultNode: {
        size: 15,
      },
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
      },
    });
    const colorMap = {
      2012: '#BDD2FD',
      2013: '#BDEFDB',
      2014: '#F6C3B7',
      2015: '#FFD8B8',
      2016: '#D3C6EA',
    };

    this.graph.data(data);
    data.nodes.forEach((i) => {
      i.cluster = i.year;
      i.style = Object.assign(i.style || {}, {
        fill: colorMap[i.year],
      });
    });

    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
