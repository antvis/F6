import F6 from '@antv/f6-wx';

import data from './data';

/**
 * canvas-two-fingers
 */

// 注册行为
// F6.registerBehavior('double-finger-drag-canvas', {
//   getEvents: function getEvents() {
//     return {
//       wheel: 'onWheel',
//     };
//   },

//   onWheel: function onWheel(ev) {
//     if (ev.ctrlKey) {
//       const canvas = graph.get('canvas');
//       const point = canvas.getPointByClient(ev.clientX, ev.clientY);
//       let ratio = this.graph.getZoom();
//       if (ev.wheelDelta > 0) {
//         ratio = ratio + ratio * 0.05;
//       } else {
//         ratio = ratio - ratio * 0.05;
//       }
//       this.graph.zoomTo(ratio, {
//         x: point.x,
//         y: point.y,
//       });
//     } else {
//       const x = ev.deltaX || ev.movementX;
//       let y = ev.deltaY || ev.movementY;
//       this.graph.translate(-x, -y);
//     }
//     ev.preventDefault();
//   },
// });

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
    currentMode: '请选择模式',
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
    const { width, height, pixelRatio, currentMode } = this.data;
    console.log(currentMode, '111');
    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 60,
      modes: {
        default: ['double-finger-drag-canvas'],
      },
      layout: {
        type: 'force',
      },
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
