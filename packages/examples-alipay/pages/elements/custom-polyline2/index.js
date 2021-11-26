import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * customPolyline2
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

    F6.registerEdge('line-arrow', {
      options: {
        style: {
          stroke: '#ccc',
        },
      },
      draw: function draw(cfg, group) {
        const { startPoint } = cfg;
        const { endPoint } = cfg;

        const stroke = (cfg.style && cfg.style.stroke) || this.options.style.stroke;
        const startArrow = (cfg.style && cfg.style.startArrow) || undefined;
        const endArrow = (cfg.style && cfg.style.endArrow) || undefined;

        const keyShape = group.addShape('path', {
          attrs: {
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
              ['L', endPoint.x, endPoint.y],
            ],
            stroke,
            lineWidth: 1,
            startArrow,
            endArrow,
          },
          className: 'edge-shape',
          name: 'edge-shape',
        });
        return keyShape;
      },
    });
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
      fitCenter: true,
      modes: {
        // behavior
        default: ['drag-node', 'drag-canvas'],
      },
      defaultNode: {
        type: 'circle',
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
        linkPoints: {
          left: true,
          right: true,
          fill: '#fff',
          stroke: '#1890FF',
          size: 3,
        },
      },
      defaultEdge: {
        type: 'line-arrow',
        style: {
          stroke: '#F6BD16',
          startArrow: {
            path: 'M 0,0 L 12,6 L 9,0 L 12,-6 Z',
            fill: '#F6BD16',
          },
          endArrow: {
            path: 'M 0,0 L 12,6 L 9,0 L 12,-6 Z',
            fill: '#F6BD16',
          },
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
