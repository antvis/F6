import F6 from '@antv/f6-wx';

import { nodes, edges, data } from './data';
/**
 * metro-lines
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

    wx.setBackgroundColor({
      backgroundColorTop: '#000000',
      backgroundColorBottom: '#000000',
    });
    // custom the node
    F6.registerNode(
      'breath-node',
      {
        afterDraw(cfg, group) {
          const r = cfg.size / 2;
          const back1 = group.addShape('circle', {
            zIndex: -3,
            attrs: {
              x: 0,
              y: 0,
              r,
              fill: cfg.color || (cfg.style && cfg.style.fill),
              opacity: 0.6,
            },
            name: 'back1-shape',
          });
          const back2 = group.addShape('circle', {
            zIndex: -2,
            attrs: {
              x: 0,
              y: 0,
              r,
              fill: cfg.color,
              // 为了显示清晰，随意设置了颜色
              opacity: 0.6,
            },
            name: 'back2-shape',
          });
          const back3 = group.addShape('circle', {
            zIndex: -1,
            attrs: {
              x: 0,
              y: 0,
              r,
              fill: cfg.color,
              opacity: 0.6,
            },
            name: 'back3-shape',
          });
          group.sort(); // 排序，根据zIndex 排序
          const delayBase = Math.random() * 2000;
          back1.animate(
            {
              // 逐渐放大，并消失
              r: r + 10,
              opacity: 0.0,
            },
            {
              repeat: true, // 循环
              duration: 3000,
              easing: 'easeCubic',
              delay: delayBase, // 无延迟
            },
          );
          back2.animate(
            {
              // 逐渐放大，并消失
              r: r + 10,
              opacity: 0.0,
            },
            {
              repeat: true, // 循环
              duration: 3000,
              easing: 'easeCubic',
              delay: delayBase + 1000, // 1 秒延迟
            },
          );
          back3.animate(
            {
              // 逐渐放大，并消失
              r: r + 10,
              opacity: 0.0,
            },
            {
              repeat: true, // 循环
              duration: 3000,
              easing: 'easeCubic',
              delay: delayBase + 2000, // 2 秒延迟
            },
          );
        },
      },
      'circle',
    );

    // custom the edge
    F6.registerEdge(
      'running-polyline',
      {
        afterDraw(cfg, group) {
          const shape = group.get('children')[0];
          const length = shape.getTotalLength();
          let circleCount = Math.ceil(length / 20);
          circleCount = circleCount === 0 ? 1 : circleCount;

          const _loop = function _loop(i) {
            const delay = Math.random() * 1000;
            const start = shape.getPoint(i / circleCount);
            const circle = group.addShape('circle', {
              attrs: {
                x: start.x,
                y: start.y,
                r: 0.8,
                fill: '#A0F3AF',
                shadowColor: '#fff',
                shadowBlur: 30,
              },
              name: 'circle-shape',
            });
            circle.animate(
              (ratio) => {
                ratio += i / circleCount;
                if (ratio > 1) {
                  ratio %= 1;
                }
                const tmpPoint = shape.getPoint(ratio);
                return {
                  x: tmpPoint.x,
                  y: tmpPoint.y,
                };
              },
              {
                repeat: true,
                duration: 10 * length,
                easing: 'easeCubic',
                delay,
              },
            );
          };

          for (let i = 0; i < circleCount; i++) {
            _loop(i);
          }
        },
      },
      'polyline',
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
    function scaleNodesPoints(nodes_, edges_, graphSize) {
      const size = graphSize[0] < graphSize[1] ? graphSize[0] : graphSize[1];
      let minX = 99999999999999999;
      let maxX = -99999999999999999;
      let minY = 99999999999999999;
      let maxY = -99999999999999999;
      nodes_.forEach((node) => {
        if (node.x > maxX) maxX = node.x;
        if (node.x < minX) minX = node.x;
        if (node.y > maxY) maxY = node.y;
        if (node.y < minY) minY = node.y;
      });

      edges_.forEach((edge) => {
        const { controlPoints } = edge;
        controlPoints.forEach((cp) => {
          if (cp.x > maxX) maxX = cp.x;
          if (cp.x < minX) minX = cp.x;
          if (cp.y > maxY) maxY = cp.y;
          if (cp.y < minY) minY = cp.y;
        });
      });

      const xScale = maxX - minX;
      const yScale = maxY - minY;
      nodes_.forEach((node) => {
        node.orix = node.x;
        node.oriy = node.y;
        node.x = ((node.x - minX) / xScale) * size;
        node.y = ((node.y - minY) / yScale) * size;
      });
      edges_.forEach((edge) => {
        const { controlPoints } = edge;
        controlPoints.forEach((cp) => {
          cp.x = ((cp.x - minX) / xScale) * size;
          cp.y = ((cp.y - minY) / yScale) * size;
        });
      });
    }

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      linkCenter: true,
      fitView: true,
      modes: {
        default: [
          {
            type: 'edge-tooltip',
            formatText: function formatText(model) {
              const text = model.class;
              return text;
            },
          },
        ],
      },
      defaultNode: {
        type: 'breath-node',
        size: 3,
        style: {
          lineWidth: 0,
          fill: 'rgb(240, 223, 83)',
        },
      },
      defaultEdge: {
        type: 'running-polyline',
        size: 1,
        color: 'rgb(14,142,63)',
        style: {
          opacity: 0.4,
          lineAppendWidth: 3,
        },
      },
    });
    const graphSize = [500, 500];
    scaleNodesPoints(nodes, edges, graphSize);
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
