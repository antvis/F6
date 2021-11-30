import F6 from '@antv/f6-wx';
import data from './data';
import { Menu } from '@antv/f6-plugin/f6Plugin';

/**
 * basic-arc-diagram
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
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

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

    const contextMenu = new Menu({
      getContent(evt) {
        let header;
        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
          header = 'Canvas ContextMenu';
        } else if (evt.item) {
          const itemType = evt.item.getType();
          header = `${itemType.toUpperCase()} ContextMenu`;
        }
        return `
        <div class="container">
          <div class="header" title="header">${header}</div>
          <div>
            <div class="li" title="1">div 1</div>
            <div class="li" title="2">div 2</div>
          </div>
        </div>
        `;
      },
      getCss: () => {
        return `
          .container {
            opacity: 0.9;
            width: 150;
            padding: 10 8;
            border: 1 solid #e2e2e2;
          }
          .header {
            padding-bottom: 10;
            font-weight: bold;
          }
          .li {
            padding-bottom: 10;
          }
        `;
      },
      handleMenuClick: (target) => {
        wx.showToast({
          title: `点击了: ${target.title}`,
        });
      },
      // offsetX and offsetY include the padding of the parent container
      // 需要加上父级容器的 padding-left 16 与自身偏移量 10
      offsetX: 0,
      // 需要加上父级容器的 padding-top 24 、画布兄弟元素高度、与自身偏移量 10
      offsetY: 0,
      // the types of items that allow the menu show up
      // 在哪些类型的元素上响应
      itemTypes: ['node', 'edge', 'canvas'],
    });

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      container: this.canvas,
      pixelRatio,
      width,
      height,
      linkCenter: true,
      fitView: true,
      plugins: [contextMenu],
      defaultNode: {
        size: [80, 40],
        type: 'rect',
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#b5b5b5',
          lineAppendWidth: 3, // Enlarge the range the edge to be hitted
        },
        labelCfg: {
          autoRotate: true,
          style: {
            // A white stroke with width 5 helps show the label more clearly avoiding the interference of the overlapped edge
            stroke: 'white',
            lineWidth: 5,
          },
        },
      },
      modes: {
        default: ['drag-node'],
      },
    });

    this.graph.data(data);
    this.graph.render();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
