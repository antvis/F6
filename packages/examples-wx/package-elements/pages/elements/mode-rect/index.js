import F6 from '@antv/f6-wx';

import data from './data';
/**
 * mode-rect
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

    // 创建F6实例
    this.graph = new F6.Graph({
      container: this.canvas,
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      extra: {
        createImage: this.canvas && this.canvas.createImage,
      },
      fitCenter: true,
      defaultNode: {
        type: 'modelRect',
        size: [270, 80],
        style: {
          radius: 5,
          stroke: '#69c0ff',
          fill: '#ffffff',
          lineWidth: 1,
          fillOpacity: 1,
        },
        // label configurations
        labelCfg: {
          style: {
            fill: '#595959',
            fontSize: 14,
          },
          offset: 30,
        },
        // left rect
        preRect: {
          show: true,
          width: 4,
          fill: '#40a9ff',
          radius: 2,
        },
        // configurations for the four linkpoints
        linkPoints: {
          top: false,
          right: false,
          bottom: false,
          left: false,
          // the size of the linkpoints' circle
          size: 10,
          lineWidth: 1,
          fill: '#72CC4A',
          stroke: '#72CC4A',
        },
        // configurations for the icon
        logoIcon: {
          // whether to show the icon
          show: false,
          x: 0,
          y: 0,
          // the image url for the icon, string type
          img: 'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
          width: 16,
          height: 16,
          // adjust the offset along x-axis for the icon
          offset: 0,
        },
        // configurations for state icon
        stateIcon: {
          // whether to show the icon
          show: false,
          x: 0,
          y: 0,
          // the image url for the icon, string type
          img: 'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
          width: 16,
          height: 16,
          // adjust hte offset along x-axis for the icon
          offset: -5,
        },
      },
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      nodeStateStyles: {
        hover: {
          lineWidth: 2,
          stroke: '#1890ff',
          fill: '#e6f7ff',
        },
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // 监听
    this.graph.on('node:mouseenter', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'hover', true);
    });

    this.graph.on('node:mouseleave', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'hover', false);
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
