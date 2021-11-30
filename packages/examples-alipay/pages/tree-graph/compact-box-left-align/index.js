import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';

import data from './data.js';

/**
 * 节点左右对齐的紧凑树
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
    const fontSize = 15;
    F6.registerNode('crect', {
      draw: (cfg, group) => {
        const width = cfg.id.length * 10;
        const rect = group.addShape('rect', {
          attrs: {
            x: 0,
            y: -10,
            ...cfg.style,
            width,
            height: 20,
            lineWidth: 0,
            opacity: 0,
          },
          name: 'rect-shape',
          draggable: true,
        });
        const label = group.addShape('text', {
          attrs: {
            text: cfg.id,
            fill: '#ccc',
            fontSize,
            x: 0,
            y: 0,
          },
          name: 'label-shape',
          draggable: true,
        });
        const bboxWidth = label.getBBox().width + 20;
        rect.attr({ width: bboxWidth });

        group.addShape('path', {
          attrs: {
            lineWidth: 1,
            fill: '#ccc',
            stroke: '#ccc',
            path: [
              ['M', 0, 0],
              ['L', bboxWidth, 0],
            ],
          },
          name: 'path-shape',
          draggable: true,
        });

        return rect;
      },
      getAnchorPoints: () => {
        return [
          [0, 0.5],
          [1, 0.5],
        ];
      },
    });

    const { width, height, pixelRatio } = this.data;

    // 创建F6实例
    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      modes: {
        default: ['collapse-expand', 'drag-canvas', 'zoom-canvas'],
      },
      defaultNode: {
        type: 'crect',
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF',
        },
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        },
        getWidth: function getWidth(d) {
          return F6.Util.getTextSize(d.id, fontSize)[0] + 20;
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
