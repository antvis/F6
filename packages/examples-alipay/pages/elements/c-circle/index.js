import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * cCircle
 */

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
  'cCircle',
  {
    drawShape: function draw(cfg, group) {
      const self = this;
      // Get the shape style, where the style.r corresponds to the R in the Illustration of Built-in Rect Combo
      const style = self.getShapeStyle(cfg);
      // Add a circle shape as keyShape which is the same as the extended 'circle' type Combo
      const circle = group.addShape('circle', {
        attrs: {
          ...style,
          x: 0,
          y: 0,
          r: style.r,
        },
        draggable: true,
        name: 'combo-keyShape',
      });
      // Add the marker on the bottom
      group.addShape('marker', {
        attrs: {
          ...style,
          fill: '#fff',
          opacity: 1,
          x: 0,
          y: style.r,
          r: 10,
          symbol: collapseIcon,
        },
        draggable: true,
        name: 'combo-marker-shape',
      });

      return circle;
    },
    // Define the updating logic for the marker
    afterUpdate: function afterUpdate(cfg, combo) {
      const self = this;
      // Get the shape style, where the style.r corresponds to the R in the Illustration of Built-in Rect Combo
      const style = self.getShapeStyle(cfg);
      const group = combo.get('group');
      // Find the marker shape in the graphics group of the Combo
      const marker = group.find((ele) => ele.get('name') === 'combo-marker-shape');
      // Update the marker shape
      marker.attr({
        x: 0,
        y: style.r,
        // The property 'collapsed' in the combo data represents the collapsing state of the Combo
        // Update the symbol according to 'collapsed'
        symbol: cfg.collapsed ? expandIcon : collapseIcon,
      });
    },
  },
  'circle',
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

      // Set groupByTypes to false to get rendering result with reasonable visual zIndex for combos
      groupByTypes: false,
      // Configure the combos globally
      defaultCombo: {
        // The type of the combos. You can also assign type in the data of combos
        type: 'cCircle',
        labelCfg: {
          refY: 2,
        },
        // ... Other global configurations for combos
      },
      modes: {
        default: ['drag-combo', 'drag-node', 'drag-canvas'],
      },
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    // collapse/expand when click the marker
    this.graph.on('combo:tap', (e) => {
      if (e.target.get('name') === 'combo-marker-shape') {
        // graph.collapseExpandCombo(e.item.getModel().id);
        this.graph.collapseExpandCombo(e.item);
        if (this.graph.get('layout')) this.graph.layout();
        else this.graph.refreshPositions();
      }
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
