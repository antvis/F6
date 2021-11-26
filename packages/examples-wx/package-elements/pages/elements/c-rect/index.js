import F6 from '@antv/f6-wx';

import data from './data';
/**
 * c-rect
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
    // The symbols for the marker inside the combo
    const collapseIcon = (x, y, r) => {
      return [
        ['M', x - r, y],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x - r + 4, y],
        ['L', x - r + 2 * r - 4, y],
      ];
    };
    const expandIcon = (x, y, r) => {
      return [
        ['M', x - r, y],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x - r + 4, y],
        ['L', x - r + 2 * r - 4, y],
        ['M', x - r + r, y - r + 4],
        ['L', x, y + r - 4],
      ];
    };

    F6.registerCombo(
      'c-rect',
      {
        drawShape: function drawShape(cfg, group) {
          const self = this;
          // Get the padding from the configuration
          cfg.padding = cfg.padding || [50, 20, 20, 20];
          // Get the shape's style, where the style.width and style.height correspond to the width and height in the figure of Illustration of Built-in Rect Combo
          const style = self.getShapeStyle(cfg);
          // Add a rect shape as the keyShape which is the same as the extended rect Combo
          const rect = group.addShape('rect', {
            attrs: {
              ...style,
              x: -style.width / 2 - (cfg.padding[3] - cfg.padding[1]) / 2,
              y: -style.height / 2 - (cfg.padding[0] - cfg.padding[2]) / 2,
              width: style.width,
              height: style.height,
            },
            draggable: true,
            name: 'combo-keyShape',
          });
          // Add the circle on the right
          group.addShape('marker', {
            attrs: {
              ...style,
              fill: '#fff',
              opacity: 1,
              // cfg.style.width and cfg.style.heigth correspond to the innerWidth and innerHeight in the figure of Illustration of Built-in Rect Combo
              x: cfg.style.width / 2 + cfg.padding[1],
              y: (cfg.padding[2] - cfg.padding[0]) / 2,
              r: 10,
              symbol: collapseIcon,
            },
            draggable: true,
            name: 'combo-marker-shape',
          });
          return rect;
        },
        // Define the updating logic of the right circle
        afterUpdate: function afterUpdate(cfg, combo) {
          const group = combo.get('group');
          // Find the circle shape in the graphics group of the Combo by name
          const marker = group.find((ele) => ele.get('name') === 'combo-marker-shape');
          // Update the position of the right circle
          marker.attr({
            // cfg.style.width and cfg.style.heigth correspond to the innerWidth and innerHeight in the figure of Illustration of Built-in Rect Combo
            x: cfg.style.width / 2 + cfg.padding[1],
            y: (cfg.padding[2] - cfg.padding[0]) / 2,
            // The property 'collapsed' in the combo data represents the collapsing state of the Combo
            // Update the symbol according to 'collapsed'
            symbol: cfg.collapsed ? expandIcon : collapseIcon,
          });
        },
      },
      'rect',
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

      // Set groupByTypes to false to get rendering result with reasonable visual zIndex for combos
      groupByTypes: false,
      // Configure the combos globally
      defaultCombo: {
        // The type of the combos. You can also assign type in the data of combos
        type: 'c-rect',
        // ... Other global configurations for combos
      },
      modes: {
        default: ['drag-combo', 'drag-node', 'drag-canvas'],
      },
    });

    // collapse/expand when click the marker
    this.graph.on('combo:tap', (e) => {
      if (e.target.get('name') === 'combo-marker-shape') {
        // graph.collapseExpandCombo(e.item.getModel().id);
        this.graph.collapseExpandCombo(e.item);
        if (this.graph.get('layout')) this.graph.layout();
        else this.graph.refreshPositions();
      }
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
