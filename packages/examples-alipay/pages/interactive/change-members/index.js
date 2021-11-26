import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
import grid from '@antv/f6/dist/extends/layout/gridLayout';

/**
 * changeMembers：修改包裹内部成员
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
    discription: 'Wait for the layout to complete...',
  },

  onLoad() {
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();

    F6.registerLayout('grid', grid);

    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },

  /**
   * 初始化canvas回调，缓存获得的context
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
      fitViewPadding: 50,
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      layout: {
        type: 'grid',
      },
    });

    const hull1 = this.graph.createHull({
      id: 'hull1',
      type: 'smooth-convex',
      padding: 15,
      members: this.graph.getNodes().filter((node) => node.getModel().group === 1),
    });
    const hull2 = this.graph.createHull({
      id: 'hull2',
      members: this.graph.getNodes().filter((node) => node.getModel().group === 2),
      padding: 15,
      type: 'bubble',
      style: {
        fill: 'pink',
        stroke: 'red',
      },
      update: 'drag',
    });

    this.graph.on('canvas:contextmenu', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const item = this.graph.addItem('node', {
        x: ev.x,
        y: ev.y,
        id: Math.random(),
        group: 2,
      });
      hull2.addMember(item);
    });

    this.graph.on('afterupdateitem', (e) => {
      if (hull1.members.indexOf(e.item) > -1 || hull1.nonMembers.indexOf(e.item) > -1) {
        hull1.updateData(hull1.members);
      }
    });

    this.graph.on('node:dragend', (e) => {
      const { item } = e;
      const memberIdx = hull2.members.indexOf(item);
      if (memberIdx > -1) {
        // 如果移出原hull范围，则去掉
        if (!hull2.contain(item)) {
          hull2.removeMember(item);
        } else {
          hull2.updateData(hull2.members);
        }
      } else if (hull2.contain(item)) hull2.addMember(item);
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
