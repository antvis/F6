import F6 from '@antv/f6-wx';
import TreeGraph from '@antv/f6-wx/extends/graph/treeGraph';

import data_ from './data';

/**
 * 至上而下的生态树
 */

Page({
  canvas: null,
  ctx: null, // 延迟获取的2d context
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
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

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
    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      linkCenter: true,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model');
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'cubic-vertical',
      },
      layout: {
        type: 'dendrogram',
        direction: 'TB', // H / V / LR / RL / TB / BT
        nodeSep: 40,
        rankSep: 100,
      },
    });

    this.graph.node((node) => {
      let position = 'right';
      let rotate = 0;
      if (!node.children) {
        position = 'bottom';
        rotate = Math.PI / 2;
      }
      return {
        label: node.id,
        labelCfg: {
          position,
          offset: 5,
          style: {
            rotate,
            textAlign: 'start',
          },
        },
      };
    });

    this.graph.data(data_);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
