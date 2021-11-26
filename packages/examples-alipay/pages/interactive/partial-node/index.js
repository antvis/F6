import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';

/**
 * partialNode
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
    // 注册自定义节点
    F6.registerNode(
      'customNode',
      {
        // 绘制节点
        drawShape: function drawShape(cfg, group) {
          const { shapeType } = this;
          const style = Object.assign({}, this.getShapeStyle(cfg), {
            x: 0,
            y: 0,
            r: 50,
          });
          const shape = group.addShape(shapeType, {
            attrs: style,
            name: 'key-shape',
          });
          // 绘制节点里面的小圆。点击这个小圆会显示tooltip
          group.addShape('circle', {
            attrs: {
              x: 0,
              y: -30,
              r: 10,
              fill: '#096dd9',
              cursor: 'pointer',
            },
            name: 'circle-shape',
          });
          return shape;
        },
      },
      'circle',
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
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 60,
      modes: {
        default: [
          {
            type: 'drag-node',
            delegate: false,
          },
        ],
      },
      defaultNode: {
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
        labelCfg: {
          style: {
            fontSize: 12,
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2',
        },
      },
      nodeStateStyles: {
        selected: {
          stroke: 'red',
        },
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // 节点上的点击事件
    this.graph.on('node:tap', (event) => {
      const { item } = event;
      this.graph.setItemState(item, 'selected', true);
    });

    this.graph.on('circle-shape:tap', (evt) => {
      const { item } = evt;
      this.graph.updateItem(item, {
        label: '点击了局部',
        labelCfg: {
          style: {
            fill: '#003a8c',
            fontSize: 16,
          },
        },
      });
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
