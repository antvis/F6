import F6 from '@antv/f6-wx';

import data from './data';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * activate-relations:内置的高亮节点
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

    F6.registerLayout('force', force);

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
    // const tooltip = new F6.Tooltip({
    //   offsetX: 10,
    //   offsetY: 10,
    //   fixToNode: [1, 0.5],
    //   // the types of items that allow the tooltip show up
    //   // 允许出现 tooltip 的 item 类型
    //   itemTypes: ['node', 'edge'],
    //   // custom the tooltip's content
    //   // 自定义 tooltip 内容
    //   getContent: (e) => {
    //     const outDiv = document.createElement('div');
    //     outDiv.style.width = 'fit-content';
    //     outDiv.style.height = 'fit-content';
    //     const model = e.item.getModel();
    //     if (e.item.getType() === 'node') {
    //       outDiv.innerHTML = `${model.name}`;
    //     } else {
    //       const source = e.item.getSource();
    //       const target = e.item.getTarget();
    //       outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${target.getModel().name}`;
    //     }
    //     return outDiv;
    //   },
    // });

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 50,
      layout: {
        type: 'force',
        edgeStrength: 0.7,
      },
      // plugins: [tooltip],
      modes: {
        default: ['drag-canvas', 'activate-relations'],
      },
      defaultNode: {
        size: [10, 10],
        /* style for the keyShape */
        // style: {
        //   lineWidth: 2,
        //   fill: '#DEE9FF',
        //   stroke: '#5B8FF9',
        // },
      },
      defaultEdge: {
        /* style for the keyShape */
        style: {
          stroke: '#aaa',
          lineAppendWidth: 2,
          opacity: 0.3,
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
