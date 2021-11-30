import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * star
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
      extra: {
        createImage: this.canvas && this.canvas.createImage,
      },
      defaultNode: {
        /* node type */
        type: 'star',
        /* node size */
        size: [60, 60],
        /* style for the keyShape */
        // style: {
        //   fill: '#9EC9FF',
        //   stroke: '#5B8FF9',
        //   lineWidth: 3,
        // },
        labelCfg: {
          /* label's position, options: center, top, bottom, left, right */
          position: 'bottom',
          /* label's offset to the keyShape, 4 by default */
          //   offset: 12,
          /* label's style */
          //   style: {
          //     fontSize: 20,
          //     fill: '#ccc',
          //     fontWeight: 500
          //   }
        },
        /* configurations for four linkpoints */
        linkPoints: {
          top: true,
          right: true,
          bottom: true,
          left: true,
          /* linkPoints' size, 8 by default */
          //   size: 5,
          /* linkPoints' style */
          //   fill: '#ccc',
          //   stroke: '#333',
          //   lineWidth: 2,
        },
        /* icon configuration */
        icon: {
          /* whether show the icon, false by default */
          show: true,
          /* icon's img address, string type */
          // img: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
          /* icon's size, 20 * 20 by default: */
          //   width: 40,
          //   height: 40
        },
      },
      /* styles for different states, there are built-in styles for states: active, inactive, selected, highlight, disable */
      // nodeStateStyles: {
      //   // node style of active state
      //   active: {
      //     fillOpacity: 0.8,
      //   },
      //   // node style of selected state
      //   selected: {
      //     lineWidth: 5,
      //   },
      // },
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // 监听

    this.graph.on('node:tap', (evt) => {
      const { item } = evt;
      this.graph.setItemState(item, 'selected', true);
    });
    this.graph.on('canvas:tap', () => {
      this.graph.getNodes().forEach((node) => {
        this.graph.clearItemStates(node);
      });
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
