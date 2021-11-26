import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * pieChart：使用G自定义的饼图节点
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

    const lightBlue = '#5b8ff9';
    const lightOrange = '#5ad8a6';

    // register a pie chart node
    F6.registerNode('pie-node', {
      draw: (cfg, group) => {
        const radius = cfg.size / 2; // node radius
        const inPercentage = cfg.inDegree / cfg.degree; // the ratio of indegree to outdegree
        const inAngle = inPercentage * Math.PI * 2; // the anble for the indegree fan
        const inArcEnd = [radius * Math.cos(inAngle), -radius * Math.sin(inAngle)]; // the end position for the in-degree fan
        let isInBigArc = 0;
        let isOutBigArc = 1;
        if (inAngle > Math.PI) {
          isInBigArc = 1;
          isOutBigArc = 0;
        }
        // fan shape for the in degree
        const fanIn = group.addShape('path', {
          attrs: {
            path: [
              ['M', radius, 0],
              ['A', radius, radius, 0, isInBigArc, 0, inArcEnd[0], inArcEnd[1]],
              ['L', 0, 0],
              ['Z'],
            ],
            lineWidth: 0,
            fill: lightOrange,
          },
          name: 'in-fan-shape',
        });
        // draw the fan shape
        group.addShape('path', {
          attrs: {
            path: [
              ['M', inArcEnd[0], inArcEnd[1]],
              ['A', radius, radius, 0, isOutBigArc, 0, radius, 0],
              ['L', 0, 0],
              ['Z'],
            ],
            lineWidth: 0,
            fill: lightBlue,
          },
          name: 'out-fan-shape',
        });
        // 返回 keyshape
        return fanIn;
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
      fitCenter: true,
      defaultNode: {
        type: 'pie-node',
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
