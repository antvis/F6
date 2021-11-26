import F6 from '@antv/f6-wx';

import data from './data';
import radial from '@antv/f6-wx/extends/layout/radialLayout';
/**
 * Radial布局参数动态变化
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
    description: 'Radial layout, focusNode =  = 0, unitRadius = 50, preventOverlap: false',
  },

  onLoad() {
    // 注册布局
    F6.registerLayout('radial', radial);
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
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'radial',
        unitRadius: 50,
      },
      animate: true,
      defaultNode: {
        size: 20,
      },
      defaultEdge: {
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

    setInterval(() => {
      layoutConfigTranslation();
    }, 7000);

    function layoutConfigTranslation() {
      setTimeout(() => {
        me.setData({
          description: 'Radial layout, focusNode =  = 0, unitRadius = 50, preventOverlap: true',
        });
        me.graph.updateLayout({
          preventOverlap: true,
          nodeSize: 20,
        });
      }, 1000);

      setTimeout(() => {
        me.setData({
          description: 'Radial layout, focusNode =  = 0, unitRadius = 80, preventOverlap: true',
        });
        me.graph.updateLayout({
          unitRadius: 80,
        });
      }, 2500);

      setTimeout(() => {
        me.setData({
          description: 'Radial layout, focusNode =  = 10, unitRadius = 80, preventOverlap: true',
        });
        me.graph.updateLayout({
          focusNode: '10',
        });
      }, 4000);

      setTimeout(() => {
        me.setData({
          description: 'Radial layout, focusNode =  = 20, unitRadius = 80, preventOverlap: true',
        });
        me.graph.updateLayout({
          focusNode: '20',
        });
      }, 5500);

      setTimeout(() => {
        me.setData({
          description: 'Radial layout, focusNode =  = 0, unitRadius = 50, preventOverlap: false',
        });
        me.graph.updateLayout({
          focusNode: '0',
          preventOverlap: false,
          unitRadius: 50,
        });
      }, 5500);
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
