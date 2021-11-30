import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';

import data_ from './data';

/**
 * 自定义复杂树图样式
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
    F6.registerNode(
      'tree-node',
      {
        drawShape: function drawShape(cfg, group) {
          const rect = group.addShape('rect', {
            attrs: {
              fill: '#fff',
              stroke: '#666',
              x: 0,
              y: 0,
              width: 1,
              height: 1,
            },
            name: 'rect-shape',
          });
          const content = cfg.name.replace(/(.{19})/g, '$1\n');
          const text = group.addShape('text', {
            attrs: {
              text: content,
              x: 0,
              y: 0,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#666',
            },
            name: 'text-shape',
          });
          const bbox = text.getBBox();
          const hasChildren = cfg.children && cfg.children.length > 0;
          rect.attr({
            x: -bbox.width / 2 - 4,
            y: -bbox.height / 2 - 6,
            width: bbox.width + (hasChildren ? 26 : 12),
            height: bbox.height + 12,
          });
          text.attr({
            x: -bbox.width / 2,
            y: 0,
          });
          if (hasChildren) {
            group.addShape('marker', {
              attrs: {
                x: bbox.width / 2 + 12,
                y: 0,
                r: 6,
                symbol: cfg.collapsed ? F6.Marker.expand : F6.Marker.collapse,
                stroke: '#666',
                lineWidth: 2,
              },
              name: 'collapse-icon',
            });
          }
          return rect;
        },
        update: (cfg, item) => {
          const group = item.getContainer();
          const icon = group.find((e) => e.get('name') === 'collapse-icon');
          icon.attr('symbol', cfg.collapsed ? F6.Marker.expand : F6.Marker.collapse);
        },
      },
      'single-node',
    );

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
      linkCenter: true,
      pixelRatio,
      fitView: true,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model');
              this.graph.updateItem(item, {
                collapsed,
              });
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        type: 'tree-node',
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
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
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 20;
        },
        getHGap: function getHGap() {
          return 80;
        },
      },
    });

    F6.Util.traverseTree(data_, function(item) {
      item.id = item.name;
    });
    this.graph.data(data_);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
