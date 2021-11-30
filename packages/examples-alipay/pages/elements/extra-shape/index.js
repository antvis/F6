import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * extraShapes
 */
// 注册边
F6.registerEdge(
  'extra-shape-edge',
  {
    afterDraw(cfg, group) {
      // get the first shape in the graphics group of this edge, it is the path of the edge here
      // 获取图形组中的第一个图形，在这里就是边的路径图形
      const shape = group.get('children')[0];
      // get the coordinate of the mid point on the path
      // 获取路径图形的中点坐标
      const midPoint = shape.getPoint(0.5);
      const rectColor = cfg.midPointColor || '#333';
      // add a rect on the mid point of the path. note that the origin of a rect shape is on its lefttop
      // 在中点增加一个矩形，注意矩形的原点在其左上角
      group.addShape('rect', {
        attrs: {
          width: 10,
          height: 10,
          fill: rectColor || '#333',
          // x and y should be minus width / 2 and height / 2 respectively to translate the center of the rect to the midPoint
          // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
          x: midPoint.x - 5,
          y: midPoint.y - 5,
        },
      });

      // get the coordinate of the quatile on the path
      // 获取路径上的四分位点坐标
      const quatile = shape.getPoint(0.25);
      const quatileColor = cfg.quatileColor || '#333';
      // add a circle on the quatile of the path
      // 在四分位点上放置一个圆形
      group.addShape('circle', {
        attrs: {
          r: 5,
          fill: quatileColor || '#333',
          x: quatile.x,
          y: quatile.y,
        },
      });
    },
    update: undefined,
  },
  'cubic',
);

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
        // behavior
        default: ['drag-node', 'drag-canvas'],
      },
      defaultEdge: {
        type: 'extra-shape-edge',
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
