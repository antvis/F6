import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import { data, legendData } from './data';
// import fruchtermanLayout from '@antv/f6/dist/extends/layout/fruchtermanLayout';
/**
 * sublayoutPipes
 */

// 注册布局
// F6.registerLayout('fruchterman', fruchtermanLayout);

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

    // 新建F6.legend实例
    // TODO:Ledgend is not a constructor
    const legend = new F6.Legend({
      data: legendData,
      align: 'center',
      layout: 'horizontal', // vertical
      position: 'bottom-left',
      vertiSep: 12,
      horiSep: 24,
      offsetY: -24,
      padding: [4, 16, 8, 16],
      containerStyle: {
        fill: '#ccc',
        lineWidth: 1,
      },
      title: 'Legend',
      titleConfig: {
        position: 'left',
        offsetX: 0,
        offsetY: 12,
      },
      filter: {
        enable: true,
        multiple: true,
        trigger: 'click',
        graphActiveState: 'activeByLegend',
        graphInactiveState: 'inactiveByLegend',
        filterFunctions: {
          a: (d) => {
            if (d.cluster === 'a') return true;
            return false;
          },
          b: (d) => {
            if (d.cluster === 'b') return true;
            return false;
          },
          c: (d) => {
            if (d.cluster === 'c') return true;
            return false;
          },
          d: (d) => {
            if (d.cluster === 'd') return true;
            return false;
          },
        },
      },
    });

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 40,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      plugins: [legend],
      animate: true,
      nodeStateStyles: {
        activeByLegend: {
          lineWidth: 5,
          strokeOpacity: 0.5,
          stroke: '#f00',
        },
        inactiveByLegend: {
          opacity: 0.5,
        },
      },
      layout: {
        pipes: [
          {
            type: 'circular',
            nodesFilter: (node) => +node.id <= 6,
            center: [(width / 5) * 4 - 30, height / 2],
            radius: width / 10,
          },
          {
            type: 'circular',
            nodesFilter: (node) => +node.id >= 7 && +node.id <= 10,
            center: [width / 20 + 30, (height / 3) * 2],
            radius: width / 20,
          },
          {
            type: 'circular',
            nodesFilter: (node) => +node.id >= 11 && +node.id <= 16,
            center: [width / 20 + 30, height / 3],
            radius: width / 20,
          },
          {
            type: 'grid',
            nodesFilter: (node) => +node.id > 16,
            begin: [width / 10 + 50, 20],
            width: (width / 5) * 3 - 100,
            height: height - 40,
          },
        ],
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
