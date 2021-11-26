import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * cardNode
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
    const ICON_MAP = {
      a: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ',
      b: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ',
    };

    F6.registerNode(
      'card-node',
      {
        drawShape: function drawShape(cfg, group) {
          const color = cfg.error ? '#F4664A' : '#30BF78';
          const r = 2;
          const shape = group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: 200,
              height: 60,
              stroke: color,
              radius: r,
            },
            name: 'main-box',
            draggable: true,
          });

          group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: 200,
              height: 20,
              fill: color,
              radius: [r, r, 0, 0],
            },
            name: 'title-box',
            draggable: true,
          });

          // left icon
          group.addShape('image', {
            attrs: {
              x: 4,
              y: 2,
              height: 16,
              width: 16,
              cursor: 'pointer',
              img: ICON_MAP[cfg.nodeType || 'app'],
            },
            name: 'node-icon',
          });

          // title text
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              y: 2,
              x: 24,
              lineHeight: 20,
              text: cfg.title,
              fill: '#fff',
            },
            name: 'title',
          });

          if (cfg.nodeLevel > 0) {
            group.addShape('marker', {
              attrs: {
                x: 184,
                y: 30,
                r: 6,
                cursor: 'pointer',
                symbol: cfg.collapse ? F6.Marker.expand : F6.Marker.collapse,
                stroke: '#666',
                lineWidth: 1,
              },
              name: 'collapse-icon',
            });
          }

          // The content list
          cfg.panels.forEach((item, index) => {
            // name text
            group.addShape('text', {
              attrs: {
                textBaseline: 'top',
                y: 25,
                x: 24 + index * 60,
                lineHeight: 20,
                text: item.title,
                fill: 'rgba(0,0,0, 0.4)',
              },
              name: `index-title-${index}`,
            });

            // value text
            group.addShape('text', {
              attrs: {
                textBaseline: 'top',
                y: 42,
                x: 24 + index * 60,
                lineHeight: 20,
                text: item.value,
                fill: '#595959',
              },
              name: `index-title-${index}`,
            });
          });
          return shape;
        },
      },
      'single-node',
    );

    // 创建F6实例
    this.graph = new F6.Graph({
      container: this.canvas,
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 60,
      fitCenter: true,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      defaultNode: {
        type: 'card-node',
      },
      extra: {
        createImage: this.canvas && this.canvas.createImage,
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
