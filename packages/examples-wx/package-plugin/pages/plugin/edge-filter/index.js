import F6 from '@antv/f6-wx';
import data from './data';
import { EdgeFilterLens } from '@antv/f6-plugin/f6Plugin';

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
    data.edges.forEach((edge) => {
      edge.color = '#aaa';
      edge.size = 2;
      edge.style = {
        opacity: 0.7,
      };
      edge.label = 'a';
    });
    const filterConfigs = {
      trigger: 'drag',
      showLabel: 'edge',
      r: 60,
    };
    const filterLens = new EdgeFilterLens(filterConfigs);

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      pixelRatio,
      width,
      height,
      fitView: true,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      plugins: [filterLens],
      defaultEdge: {
        labelCfg: {
          autoRotate: true,
          style: {
            stroke: '#fff',
            lineWidth: 2,
          },
        },
      },
      defaultNode: {
        size: 15,
        color: '#5B8FF9',
        style: {
          lineWidth: 2,
          fill: '#C6E5FF',
        },
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.getEdges().forEach((edge) => {
      edge
        .getContainer()
        .getChildren()
        .forEach((shape) => {
          if (shape.get('type') === 'text') shape.set('visible', false);
        });
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
