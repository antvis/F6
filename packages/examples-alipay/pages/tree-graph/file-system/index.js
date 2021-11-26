import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';

import data from './data';

/**
 * 缩进树-文件系统
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

    // registerNode
    F6.registerNode('file-node', {
      draw: function draw(cfg, group) {
        const keyShape = group.addShape('rect', {
          attrs: {
            x: 10,
            y: -12,
            fill: '#fff',
            stroke: null,
          },
        });
        let isLeaf = false;
        if (cfg.collapsed) {
          group.addShape('marker', {
            attrs: {
              symbol: 'triangle',
              x: 4,
              y: -2,
              r: 4,
              fill: '#666',
            },
            name: 'marker-shape',
          });
        } else if (cfg.children && cfg.children.length > 0) {
          group.addShape('marker', {
            attrs: {
              symbol: 'triangle-down',
              x: 4,
              y: -2,
              r: 4,
              fill: '#666',
            },
            name: 'marker-shape',
          });
        } else {
          isLeaf = true;
        }
        const shape = group.addShape('text', {
          attrs: {
            x: 15,
            y: 4,
            text: cfg.name,
            fill: '#666',
            fontSize: 16,
            textAlign: 'left',
            fontFamily:
              typeof window !== 'undefined'
                ? window.getComputedStyle(document.body, null).getPropertyValue('font-family') ||
                  'Arial, sans-serif'
                : 'Arial, sans-serif',
          },
          name: 'text-shape',
        });
        const bbox = shape.getBBox();
        let backRectW = bbox.width;
        let backRectX = keyShape.attr('x');
        if (!isLeaf) {
          backRectW += 8;
          backRectX -= 15;
        }
        keyShape.attr({
          width: backRectW,
          height: bbox.height + 4,
          x: backRectX,
        });
        return keyShape;
      },
    });

    // registerEdge
    F6.registerEdge(
      'step-line',
      {
        getControlPoints: function getControlPoints(cfg) {
          const { startPoint } = cfg;
          const { endPoint } = cfg;
          return [
            startPoint,
            {
              x: startPoint.x,
              y: endPoint.y,
            },
            endPoint,
          ];
        },
      },
      'polyline',
    );

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
            animate: false,
            onChange: function onChange(item, collapsed) {
              const model = item.getModel();
              model.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultEdge: {
        style: {
          stroke: '#A3B1BF',
        },
      },
      layout: {
        type: 'indented',
        isHorizontal: true,
        direction: 'LR',
        indent: 30,
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
      },
    });
    let centerX = 0;
    this.graph.node(function(node) {
      if (node.id === 'Modeling Methods') {
        centerX = node.x;
      }

      // position的取值（由于ESlint禁止嵌套的三元表达，所以单独提取出来写）
      let position_value = null;
      if (node.children && node.children.length > 0) {
        position_value = 'left';
      } else if (node.x > centerX) position_value = 'right';
      else position_value = 'left';

      return {
        label: node.id,
        labelCfg: {
          offset: 5,
          position: position_value,
        },
      };
    });

    this.graph.node((node) => {
      return {
        type: 'file-node',
        label: node.name,
      };
    });

    this.graph.edge(() => {
      return {
        type: 'step-line',
      };
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
