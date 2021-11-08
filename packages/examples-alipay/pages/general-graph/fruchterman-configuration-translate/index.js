import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import getData from './data';
import fruchtermanLayout from '@antv/f6/dist/extends/layout/fruchtermanLayout';
/**
 * fruchterman 布局参数动态变化
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
    description: 'Fructherman layout, gravity = 1',
  },

  onLoad() {
    // 注册布局
    F6.registerLayout('fruchterman', fruchtermanLayout);

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
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'fruchterman',
        gravity: 1,
        speed: 5,
      },
      animate: true,
      defaultNode: {
        size: 20,
      },
      defaultEdge: {
        size: 1,
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

    function layoutConfigTranslation() {
      setTimeout(function() {
        me.setData({
          description: 'Fructherman layout, gravity = 5',
        });
        me.graph.updateLayout({
          gravity: 5,
        });
      }, 1000);

      setTimeout(function() {
        me.setData({
          description: 'Fructherman layout, gravity = 10, layout by cluster',
        });
        me.graph.updateLayout({
          gravity: 10,
          clustering: true,
        });
      }, 2500);

      setTimeout(function() {
        me.setData({
          description: 'Fructherman layout, gravity = 20, layout by cluster',
        });
        me.graph.updateLayout({
          gravity: 20,
        });
      }, 4000);

      setTimeout(function() {
        me.setData({
          description: 'Fructherman layout, gravity = 50, layout by cluster',
        });
        me.graph.updateLayout({
          gravity: 50,
        });
      }, 5500);

      setTimeout(function() {
        me.setData({
          description: 'Fructherman layout, gravity = 80, layout by cluster',
        });
        me.graph.updateLayout({
          gravity: 80,
        });
      }, 7000);
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
