import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';
import data from './data';

/**
 * addChild
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
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

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
    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      modes: {
        default: ['collapse-expand', 'drag-canvas'],
      },
      fitView: true,
      layout: {
        type: 'compactBox',
        direction: 'LR',
        defalutPosition: [],
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 50;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });
    this.graph.node(function(node) {
      return {
        size: 16,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
        label: node.id,
        labelCfg: {
          position: node.children && node.children.length > 0 ? 'left' : 'right',
        },
      };
    });

    this.graph.edge(function() {
      return {
        type: 'cubic-horizontal',
        color: '#A3B1BF',
      };
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    let count = 0;

    this.graph.on('node:tap', (evt) => {
      const { item } = evt;

      const nodeId = item.get('id');
      const model = item.getModel();
      const { children } = model;
      if (!children || children.length === 0) {
        const childData = {
          id: `child-data-${count}`,
          type: 'rect',
          children: [
            {
              id: `x-${count}`,
            },
            {
              id: `y-${count}`,
            },
          ],
        };
        this.graph.addChild(childData, nodeId);
        count++;
      }
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
