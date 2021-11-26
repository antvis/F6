import F6 from '@antv/f6-wx';

import data from './data';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * highlight-dark:自定义高亮
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
      // plugins: [tooltip],
      layout: {
        type: 'force',
        edgeStrength: 0.7,
      },
      modes: {
        default: ['drag-canvas'],
      },
      defaultNode: {
        size: [10, 10],
        style: {
          lineWidth: 2,
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        size: 1,
        style: {
          stroke: '#e2e2e2',
          lineAppendWidth: 2,
        },
      },
      nodeStateStyles: {
        highlight: {
          opacity: 1,
        },
        dark: {
          opacity: 0.2,
        },
      },
      edgeStateStyles: {
        highlight: {
          stroke: '#999',
        },
      },
    });

    // 监听
    function clearAllStats() {
      this.graph.setAutoPaint(false);
      this.graph.getNodes().forEach(function (node) {
        this.graph.clearItemStates(node);
      });
      this.graph.getEdges().forEach(function (edge) {
        this.graph.clearItemStates(edge);
      });
      this.graph.paint();
      this.graph.setAutoPaint(true);
    }

    this.graph.on('node:mouseenter', function (e) {
      const { item } = e;
      this.graph.setAutoPaint(false);
      this.graph.getNodes().forEach(function (node) {
        this.graph.clearItemStates(node);
        this.graph.setItemState(node, 'dark', true);
      });
      this.graph.setItemState(item, 'dark', false);
      this.graph.setItemState(item, 'highlight', true);
      this.graph.getEdges().forEach(function (edge) {
        if (edge.getSource() === item) {
          this.graph.setItemState(edge.getTarget(), 'dark', false);
          this.graph.setItemState(edge.getTarget(), 'highlight', true);
          this.graph.setItemState(edge, 'highlight', true);
          edge.toFront();
        } else if (edge.getTarget() === item) {
          this.graph.setItemState(edge.getSource(), 'dark', false);
          this.graph.setItemState(edge.getSource(), 'highlight', true);
          this.graph.setItemState(edge, 'highlight', true);
          edge.toFront();
        } else {
          this.graph.setItemState(edge, 'highlight', false);
        }
      });
      this.graph.paint();
      this.graph.setAutoPaint(true);
    });
    this.graph.on('node:mouseleave', clearAllStats);
    this.graph.on('canvas:tap', clearAllStats);

    this.graph.data({
      nodes: data.nodes,
      edges: data.edges.map((edge, i) => {
        edge.id = `edge${i}`;
        return Object.assign({}, edge);
      }),
    });
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
