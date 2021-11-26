import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
import dagreLayout from '@antv/f6/dist/extends/layout/dagreLayout';

/**
 * dagreCombo
 */

Page({
  canvas: null,
  ctx: null,
  renderer: '', // mini、mini-native等，F6需要，标记环境
  isCanvasInit: false, // canvas是否准备好了
  graph: null,
  sortByCombo: false,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 2,
    forceMini: false,
    description: 'Enable sortByCombo',
  },

  onLoad() {
    F6.registerLayout('dagre', dagreLayout);

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

  handleClickButton() {
    console.log('click', this.sortByCombo);
    this.sortByCombo = !this.sortByCombo;
    this.setData({
      description: this.sortByCombo ? 'Disable sortByCombo' : 'Enable sortByCombo',
    });
    const { sortByCombo } = this;
    this.graph.updateLayout({
      sortByCombo,
    });
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
      fitViewPadding: 30,
      animate: true,
      groupByTypes: false,
      modes: {
        default: [
          'drag-combo',
          'drag-node',
          'drag-canvas',
          {
            type: 'collapse-expand-combo',
            relayout: false,
          },
        ],
      },
      layout: {
        type: 'dagre',
        sortByCombo: false,
        ranksep: 10,
        nodesep: 10,
      },
      defaultNode: {
        size: [60, 30],
        type: 'rect',
        anchorPoints: [
          [0.5, 0],
          [0.5, 1],
        ],
      },
      defaultEdge: {
        type: 'line',
      },
      defaultCombo: {
        type: 'rect',
        style: {
          fillOpacity: 0.1,
        },
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
