import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';

/**
 * combo_rect
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

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 60,
      // Set groupByTypes to false to get rendering result with reasonable visual zIndex for combos
      groupByTypes: false,
      defaultCombo: {
        type: 'rect',
        size: [40, 10], // The minimum size of the Combo
        padding: [30, 20, 10, 20],
        style: {
          lineWidth: 1,
        },
        labelCfg: {
          refY: 10,
          refX: 20,
          position: 'bottom',
        },
      },
      comboStateStyles: {
        dragenter: {
          lineWidth: 4,
          stroke: '#FE9797',
        },
      },
      modes: {
        default: [
          'drag-canvas',
          'drag-node',
          'drag-combo',
          'collapse-expand-combo',
          'click-select',
        ],
      },
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // 监听
    this.graph.on('combo:dragend', () => {
      this.graph.getCombos().forEach((combo) => {
        this.graph.setItemState(combo, 'dragenter', false);
      });
    });
    this.graph.on('node:dragend', () => {
      this.graph.getCombos().forEach((combo) => {
        this.graph.setItemState(combo, 'dragenter', false);
      });
    });

    this.graph.on('combo:dragenter', (e) => {
      this.graph.setItemState(e.item, 'dragenter', true);
    });
    this.graph.on('combo:dragleave', (e) => {
      this.graph.setItemState(e.item, 'dragenter', false);
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
