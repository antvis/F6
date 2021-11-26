import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
import circular from '@antv/f6/dist/extends/layout/circularLayout';
import grid from '@antv/f6/dist/extends/layout/gridLayout';
import force from '@antv/f6/dist/extends/layout/forceLayout';
import radial from '@antv/f6/dist/extends/layout/radialLayout';
import concentric from '@antv/f6/dist/extends/layout/concentricLayout';
import mds from '@antv/f6/dist/extends/layout/mdsLayout';

/**
 * layoutTranslate
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
    // 注册布局
    F6.registerLayout('circular', circular);
    F6.registerLayout('grid', grid);
    F6.registerLayout('force', force);
    F6.registerLayout('radial', radial);
    F6.registerLayout('concentric', concentric);
    F6.registerLayout('mds', mds);
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();

    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },

  /**
   * 初始化canvas回调，缓存获得的context
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

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      layout: {
        type: 'circular', // TODO:random
      },
      modes: {
        default: ['drag-node'],
      },
      animate: true,
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'circular',
        radius: 200,
      });
    }, 3000);
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'grid',
      });
    }, 6000);
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'force',
        preventOverlap: true,
        nodeSize: 20,
      });
    }, 9000);
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'radial',
        preventOverlap: true,
        nodeSize: 15,
      });
    }, 12000);
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'concentric',
        minNodeSpacing: 30,
      });
    }, 15000);
    setTimeout(() => {
      this.graph.updateLayout({
        type: 'mds',
        linkDistance: 100,
      });
    }, 18000);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
