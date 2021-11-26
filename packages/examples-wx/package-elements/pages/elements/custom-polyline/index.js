import F6 from '@antv/f6-wx';

import data from './data';
/**
 * custom-polyline
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
    pixelRatio: 1,
    forceMini: false,
  },

  onLoad() {
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    // 注册边
    F6.registerEdge(
      'line-arrow',
      {
        getPath(points) {
          const startPoint = points[0];
          const endPoint = points[1];
          return [
            ['M', startPoint.x, startPoint.y],
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
            ['L', endPoint.x, endPoint.y],
          ];
        },
        getShapeStyle(cfg) {
          const { startPoint } = cfg;
          const { endPoint } = cfg;
          const controlPoints = this.getControlPoints(cfg);
          let points = [startPoint]; // the start point
          // the control points
          if (controlPoints) {
            points = points.concat(controlPoints);
          }
          // the end point
          points.push(endPoint);
          const path = this.getPath(points);
          const style = Object.assign(
            {},
            F6.Global.defaultEdge.style,
            {
              stroke: '#BBB',
              lineWidth: 1,
              path,
            },
            cfg.style,
          );
          return style;
        },
      },
      'line',
    );

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
  handleInit(event) {
    const { ctx, canvas, renderer } = event.detail;
    this.isCanvasInit = true;
    this.ctx = ctx;
    this.renderer = renderer;
    this.canvas = canvas;
    this.updateChart();
  },

  /**
   * canvas派发的事件，转派给graph实例
   */
  handleTouch(e) {
    this.graph && this.graph.emitEvent(e.detail);
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
