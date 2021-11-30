import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * 多标签边
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

    F6.registerEdge('multipleLabelsEdge', {
      options: {
        style: {
          stroke: '#000',
        },
      },
      labelAutoRotate: true,
      draw(cfg, group) {
        const { startPoint } = cfg;
        const { endPoint } = cfg;
        const stroke = (cfg.style && cfg.style.stroke) || this.options.style.stroke;

        const shape = group.addShape('path', {
          attrs: {
            stroke,
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x, endPoint.y],
            ],
          },
          name: 'path-shape',
        });
        if (cfg.label && cfg.label.length) {
          // the left label
          group.addShape('text', {
            attrs: {
              text: cfg.label[0],
              fill: '#595959',
              textAlign: 'start',
              textBaseline: 'middle',
              x: startPoint.x,
              y: startPoint.y - 10,
            },
            name: 'left-text-shape',
          });
          if (cfg.label.length > 1) {
            // the right label
            group.addShape('text', {
              attrs: {
                text: cfg.label[1],
                fill: '#595959',
                textAlign: 'end',
                textBaseline: 'middle',
                x: endPoint.x,
                y: endPoint.y - 10,
              },
              name: 'right-text-shape',
            });
          }
        }
        // return the keyShape
        return shape;
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
        default: [
          {
            type: 'drag-node',
            delegate: false,
          },
          'drag-canvas',
          {
            type: 'zoom-canvas',
            sensitivity: 0.5,
          },
        ],
      },
      defaultNode: {
        type: 'circle',
        size: [50],
        linkPoints: {
          left: true,
          right: true,
        },
      },
      defaultEdge: {
        type: 'multipleLabelsEdge',
        style: {
          stroke: '#F6BD16',
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
