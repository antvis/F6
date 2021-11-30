import F6 from '@antv/f6-wx';

import result from './data';
import dagreLayout from '@antv/f6-wx/extends/layout/dagreLayout';

/**
 * sankey
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
    F6.registerLayout('dagre', dagreLayout);
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    F6.registerNode(
      'dice-sankey-node',
      {
        jsx: (cfg) => `
        <group>
          <rect style={{ width: ${cfg.size[0]}, height: ${cfg.size[1]}, fill: ${cfg.color} }} />
          <text style={{ marginLeft: 6, marginTop: 24,  fill: #333, stroke: ${cfg.color}, lineWidth: 2, fontSize: 24 }}>${cfg.label} ${cfg.size[1]}</text>
        </group>
      `,
        getAnchorPoints() {
          return [[0, 0]];
        },
      },
      'single-node',
    );

    F6.registerEdge('dice-sankey-edge', {
      draw(cfg, group) {
        const { startPoint, endPoint, color } = cfg;
        const deltaY1 = Number(cfg.sourceIndex);
        const deltaY2 = Number(cfg.sourceIndex) + Number(cfg.value);
        const deltaY3 = Number(cfg.targetIndex);
        const deltaY4 = Number(cfg.targetIndex) + Number(cfg.value);
        const quaterX = (Math.abs(endPoint.x - startPoint.x) / 5) * 3;
        return group.addShape('path', {
          attrs: {
            fill: color,
            opacity: 0.6,
            path: [
              ['M', startPoint.x, startPoint.y + deltaY1],
              [
                'C',
                endPoint.x - quaterX,
                startPoint.y + deltaY1,
                startPoint.x + quaterX,
                endPoint.y + deltaY3,
                endPoint.x,
                endPoint.y + deltaY3,
              ],
              ['L', endPoint.x, endPoint.y + deltaY4],
              [
                'C',
                startPoint.x + quaterX,
                endPoint.y + deltaY4,
                endPoint.x - quaterX,
                startPoint.y + deltaY2,
                startPoint.x,
                startPoint.y + deltaY2,
              ],
              ['L', startPoint.x, startPoint.y + deltaY1],
              ['Z'],
            ],
          },
        });
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
      defaultNode: {
        type: 'dice-sankey-node',
      },
      defaultEdge: {
        type: 'dice-sankey-edge',
      },
      fitView: true,
      fitViewPadding: 60,
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        nodesep: 10,
        ranksep: 130,
        align: 'ul',
      },
    });

    this.graph.data(result);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
