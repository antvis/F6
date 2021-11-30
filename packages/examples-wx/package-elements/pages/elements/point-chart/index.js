import F6 from '@antv/f6-wx';

import data from './data';
/**
 * point-chart：使用G自定义的点线图节点
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

    F6.registerNode('justPoints', {
      draw(cfg, group) {
        const baseR = 30;
        let nowAngle = 0;

        // Ref line
        let refR = baseR;
        const refInc = 10;
        for (let i = 0; i < 5; i++) {
          group.addShape('circle', {
            attrs: {
              x: 0,
              y: 0,
              r: (refR += refInc),
              stroke: '#5ad8a6',
              lineDash: [4, 4],
            },
            name: 'circle-shape',
          });
        }
        const everyIncAngle = (2 * Math.PI * (360 / 5 / 5)) / 360;
        nowAngle += everyIncAngle / 2;
        cfg.details.forEach((cat) => {
          // Calculate the positions for vertexes
          const postions = [];
          cat.values.forEach((item, index) => {
            const r = baseR + item;
            const xPos = r * Math.cos(nowAngle);
            const yPos = r * Math.sin(nowAngle);
            nowAngle += everyIncAngle;
            postions.push([xPos, yPos]);
            if (index === 4) {
              const r_ = baseR + item;
              const xPos_ = r_ * Math.cos(nowAngle);
              const yPos_ = r_ * Math.sin(nowAngle);
              postions.push([xPos_, yPos_]);
            }
          });

          // add marks
          postions.forEach((pos, index) => {
            if (index !== 5) {
              group.addShape('circle', {
                attrs: {
                  x: pos[0],
                  y: pos[1],
                  r: 3,
                  lineWidth: 2,
                  stroke: cat.color,
                },
                name: 'circle-marker-shape',
              });
            }
          });
        });

        let nowAngle2 = 0;
        const everyIncAngleCat = (2 * Math.PI * (360 / 5)) / 360;
        for (let i = 0; i < 5; i++) {
          const r = 30 + 50;
          const xPos = r * Math.cos(nowAngle2);
          const yPos = r * Math.sin(nowAngle2);

          group.addShape('path', {
            attrs: {
              path: [
                ['M', 0, 0],
                ['L', xPos, yPos],
              ],
              lineDash: [4, 4],
              stroke: '#5ad8a6',
            },
            name: 'path-shape',
          });
          nowAngle2 += everyIncAngleCat;
        }
        // add a circle with the same color with the background color
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
              fill: '#fff',
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
