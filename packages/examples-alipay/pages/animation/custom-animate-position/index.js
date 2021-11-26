import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';

/**
 * customAnimate#position
 */

const r = 50;
const radius = Math.PI;

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
      animate: true,
      animateCfg: {
        duration: 1000,
        onFrame(node, ratio, toAttrs, fromAttrs) {
          const current = radius * ratio;
          let { x } = fromAttrs;
          let { y } = fromAttrs;
          if (fromAttrs.x > toAttrs.x) {
            x = x - r + r * Math.cos(current);
            y += r * Math.sin(current);
          } else {
            x = x + r - r * Math.cos(current);
            y -= r * Math.sin(current);
          }
          return { x, y };
        },
      },
    });

    // 加入两个节点
    const node1 = this.graph.addItem('node', {
      id: 'node1',
      x: 100,
      y: 100,
      type: 'circle',
      style: { fill: '#5B8FF9', lineWidth: 0 },
    });
    const node2 = this.graph.addItem('node', {
      id: 'node2',
      x: 200,
      y: 100,
      type: 'circle',
      style: { fill: '#5AD8A6', lineWidth: 0 },
    });

    // 循环动画
    let count = 0;
    setInterval(() => {
      if (count % 2 === 0) {
        node1.get('model').x = 200;
        node2.get('model').x = 100;
      } else {
        node1.get('model').x = 100;
        node2.get('model').x = 200;
      }
      count++;
      this.graph.refresh();
    }, 1000);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
