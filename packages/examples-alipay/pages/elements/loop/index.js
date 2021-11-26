import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * loop
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
        // 支持的 behavior
        default: ['drag-node'],
      },
      defaultEdge: {
        type: 'loop',
        /* you can configure the global edge style as following lines */
        style: {
          // stroke: '#F6BD16',
          endArrow: {
            path: 'M 0,0 L 20,10 L 20,-10 Z',
            fill: '#eee',
          },
        },
        // 更多关于 loop 的配置请参考http://antv.alipay.com/zh/docs/manual/middle/elements/edges/loop/#%E8%87%AA%E7%8E%AF%E7%89%B9%E6%AE%8A%E9%85%8D%E7%BD%AE-loopcfg
        loopCfg: {
          position: 'top',
        },
      },
      /* styles for different states, there are built-in styles for states: active, inactive, selected, highlight, disable */
      // edgeStateStyles: {
      //   // edge style of active state
      //   active: {
      //     opacity: 0.5,
      //     stroke: '#f00'
      //   },
      //   // edge style of selected state
      //   selected: {
      //     stroke: '#ff0'
      //     lineWidth: 3,
      //   },
      // },
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // 监听
    this.graph.on('edge:tap', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'selected', true);
    });
    this.graph.on('canvas:tap', () => {
      this.graph.getEdges().forEach((edge) => {
        this.graph.clearItemStates(edge);
      });
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
