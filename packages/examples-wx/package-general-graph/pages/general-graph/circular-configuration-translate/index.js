import F6 from '@antv/f6-wx';

import data from './data';
import circular from '@antv/f6-wx/extends/layout/circularLayout';
/**
 * Circular布局参数动态变化
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
    discription: 'Circular layout with radius: take full use of the canvas, ordering: topology',
  },

  onLoad() {
    // 注册布局
    F6.registerLayout('circular', circular);

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
        type: 'circular',
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
    }, 11500);

    function layoutConfigTranslation() {
      setTimeout(() => {
        me.setData({
          discription: 'Circular layout, radius = 200, divisions = 5, ordering: degree',
        });
        me.graph.updateLayout({
          radius: 200,
          startAngle: Math.PI / 4,
          endAngle: Math.PI,
          divisions: 5,
          ordering: 'degree',
        });
      }, 1000);

      setTimeout(() => {
        me.setData({
          discription: 'Circular layout, radius = 200, divisions = 3, ordering: degree',
        });
        me.graph.updateLayout({
          startAngle: Math.PI / 4,
          endAngle: Math.PI,
          divisions: 3,
        });
      }, 2500);

      setTimeout(() => {
        me.setData({
          discription: 'Circular layout, radius = 200, divisions = 8, ordering: degree',
        });
        me.graph.updateLayout({
          radius: 200,
          startAngle: 0,
          endAngle: Math.PI / 2,
          divisions: 8,
        });
      }, 4000);

      setTimeout(() => {
        me.setData({
          discription:
            'Circular layout, radius = 10～300(spiral), endAngle: PI, divisions = 1, ordering: degree',
        });
        me.graph.updateLayout({
          radius: null,
          startRadius: 10,
          endRadius: 300,
          divisions: 1,
          startAngle: 0,
          endAngle: Math.PI,
        });
      }, 5500);

      setTimeout(() => {
        me.setData({
          discription:
            'Circular layout, radius = 10～300(spiral),endAngle: 2 * PI, divisions= 1, ordering: degree',
        });
        me.graph.updateLayout({
          endAngle: 2 * Math.PI,
        });
      }, 7000);

      setTimeout(() => {
        me.setData({
          discription: 'Circular layout, radius = 200, ordering: degree',
        });
        me.graph.updateLayout({
          radius: 200,
        });
      }, 8500);

      setTimeout(() => {
        me.setData({
          discription: 'Circular layout, radius = 200, ordering: topology',
        });
        me.graph.updateLayout({
          radius: 200,
          ordering: 'topology',
        });
      }, 10000);
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
