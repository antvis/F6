import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';

import data from './data';

/**
 * 缩进树-顶部对齐
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
    F6.registerNode('card-node', {
      draw: function drawShape(cfg, group) {
        const r = 2;
        const color = '#5B8FF9';
        const w = cfg.size[0];
        const h = cfg.size[1];
        const shape = group.addShape('rect', {
          attrs: {
            x: -w / 2,
            y: -h / 2,
            width: w, // 200,
            height: h, // 60
            stroke: color,
            radius: r,
            fill: '#fff',
          },
          name: 'main-box',
          draggable: true,
        });

        group.addShape('rect', {
          attrs: {
            x: -w / 2,
            y: -h / 2,
            width: w, // 200,
            height: h / 2, // 60
            fill: color,
            radius: [r, r, 0, 0],
          },
          name: 'title-box',
          draggable: true,
        });

        // title text
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            x: -w / 2 + 8,
            y: -h / 2 + 2,
            lineHeight: 20,
            text: cfg.id,
            fill: '#fff',
          },
          name: 'title',
        });
        cfg.children &&
          group.addShape('marker', {
            attrs: {
              x: w / 2,
              y: 0,
              r: 6,
              cursor: 'pointer',
              symbol: F6.Marker.collapse,
              stroke: '#666',
              lineWidth: 1,
              fill: '#fff',
            },
            name: 'collapse-icon',
          });
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            x: -w / 2 + 8,
            y: -h / 2 + 24,
            lineHeight: 20,
            text: 'description',
            fill: 'rgba(0,0,0, 1)',
          },
          name: `description`,
        });
        return shape;
      },
      setState(name, value, item) {
        if (name === 'collapsed') {
          const marker = item.get('group').find((ele) => ele.get('name') === 'collapse-icon');
          const icon = value ? F6.Marker.expand : F6.Marker.collapse;
          marker.attr('symbol', icon);
        }
      },
    });

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
        default: ['drag-canvas'],
      },
      defaultNode: {
        type: 'card-node',
        size: [100, 40],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          endArrow: true,
        },
      },
      layout: {
        type: 'indented',
        direction: 'LR',
        dropCap: false,
        indent: 200,
        getHeight: () => {
          return 60;
        },
      },
    });
    this.graph.on('node:tap', (e) => {
      if (e.target.get('name') === 'collapse-icon') {
        e.item.getModel().collapsed = !e.item.getModel().collapsed;
        this.graph.setItemState(e.item, 'collapsed', e.item.getModel().collapsed);
        this.graph.layout();
      }
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
