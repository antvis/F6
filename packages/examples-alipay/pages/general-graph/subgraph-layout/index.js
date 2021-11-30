import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
import Force from '@antv/f6/dist/extends/layout/forceLayout';

/**
 * subgraphLayout
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

    const { nodes } = data;

    nodes.forEach(function(node, i) {
      if (i <= 16 && i !== 12) {
        if (!node.style) {
          node.style = {
            fill: '#F6C3B7',
            stroke: '#E8684A',
          };
        } else {
          node.style.fill = 'lightsteelblue';
        }
      }
    });

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 40,
      modes: {
        default: ['drag-node'],
      },
      defaultNode: {
        size: 20,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        size: 1,
        color: '#e2e2e2',
      },
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    setTimeout(() => {
      // const { nodes } = data;
      const { edges } = data;
      const newNodes = [];
      const newEdges = [];
      const newNodeMap = new Map();
      // fix the nodes[0]
      nodes[0].fx = nodes[0].x;
      nodes[0].fy = nodes[0].y;
      // add the nodes which should be re-layout
      nodes.forEach(function(node, i) {
        if (i <= 16 && i !== 12) {
          newNodes.push(node);
          newNodeMap.set(node.id, i);
        }
      });
      // add related edges
      edges.forEach(function(edge) {
        const sourceId = edge.source;
        const targetId = edge.target;
        if (newNodeMap.get(sourceId) !== undefined && newNodeMap.get(targetId) !== undefined) {
          newEdges.push(edge);
        }
      });

      const subForceLayout = new Force({
        center: [nodes[0].x, nodes[0].y],
        linkDistance: 70,
        preventOverlap: true,
        nodeSize: 20,
        tick: () => {
          // the tick function to show the animation of layout process
          this.graph.refreshPositions();
        },
      });
      subForceLayout.init({
        nodes: newNodes,
        edges: newEdges,
      });
      subForceLayout.execute();
    }, 1000);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
