import F6 from '@antv/f6-wx';

import data from './data';
/**
 * stack-chart
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
    const getPath = (cx, cy, rs, re, startAngle, endAngle, clockwise) => {
      const flag1 = clockwise ? 1 : 0;
      const flag2 = clockwise ? 0 : 1;
      return [
        ['M', Math.cos(startAngle) * rs + cx, Math.sin(startAngle) * rs + cy],
        ['L', Math.cos(startAngle) * re + cx, Math.sin(startAngle) * re + cy],
        ['A', re, re, 0, 0, flag1, Math.cos(endAngle) * re + cx, Math.sin(endAngle) * re + cy],
        ['L', Math.cos(endAngle) * rs + cx, Math.sin(endAngle) * rs + cy],
        ['A', rs, rs, 0, 0, flag2, Math.cos(startAngle) * rs + cx, Math.sin(startAngle) * rs + cy],
        ['Z'],
      ];
    };

    // Custom stacked bar chart node
    F6.registerNode('stacked-bar-node', {
      draw(cfg, group) {
        /*
          G:
          Fan
          x: the circle center of the fan
          y: the circle center of the fan
          rs: inner radius
          re: outer radius
          startAngle: start angle
          endAngle: end angle
          clockwise: render clockwisely if it is true
        */
        const baseR = 30;
        let nowAngle = 0;
        const everyIncAngle = (2 * Math.PI * (360 / 5 / 5)) / 360;
        cfg.details.forEach((cat) => {
          cat.values.forEach((item) => {
            const baseNbr = Math.ceil(item / 10);
            const baseIncR = 7;
            let nowStartR = baseR;
            const last = item % 10;
            const endAngle = nowAngle + everyIncAngle;
            for (let i = 0; i < baseNbr; i++) {
              const path0 = getPath(
                0,
                0,
                nowStartR,
                nowStartR + baseIncR,
                nowAngle,
                endAngle,
                false,
              );
              group.addShape('path', {
                attrs: {
                  path: path0,
                  stroke: 'darkgray',
                  fill: cat.color,
                },
                name: 'path-shape1',
              });
              nowStartR = nowStartR + baseIncR + 2;
              if (i === baseNbr - 1 && last !== 0) {
                const path1 = getPath(
                  0,
                  0,
                  nowStartR,
                  nowStartR + (baseIncR * last) / 10,
                  nowAngle,
                  endAngle,
                  false,
                );
                group.addShape('path', {
                  attrs: {
                    path: path1,
                    stroke: 'darkgray',
                    fill: cat.color,
                  },
                  name: 'path-shape2',
                });
              }
            }
            nowAngle = endAngle;
          });
        });

        group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: baseR,
            fill: cfg.centerColor,
            stroke: 'darkgray',
          },
          name: 'circle-shape',
        });
        if (cfg.label) {
          group.addShape('text', {
            attrs: {
              x: 0,
              y: 0,
              textAlign: 'center',
              textBaseline: 'middle',
              text: cfg.label,
              fill: 'white',
              fontStyle: 'bold',
            },
            name: 'text-shape',
          });
        }
        return group;
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
      fitCenter: true,
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
