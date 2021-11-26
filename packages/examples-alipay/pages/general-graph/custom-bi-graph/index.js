import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';

/**
 * customBiGraph
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
    // 注册布局
    F6.registerLayout('bigraphLayout', {
      execute() {
        const self = this;
        const center = self.center || [0, 0];
        const biSep = self.biSep || 100;
        const nodeSep = self.nodeSep || 20;
        const nodeSize = self.nodeSize || 20;
        const direction = self.direction || 'horizontal';
        let part1Pos = 0;
        let part2Pos = 0;
        if (direction === 'horizontal') {
          part1Pos = center[0] - biSep / 2;
          part2Pos = center[0] + biSep / 2;
        }
        const { nodes, edges } = self;
        const part1Nodes = [];
        const part2Nodes = [];
        const part1NodeMap = new Map();
        const part2NodeMap = new Map();
        // separate the nodes and init the positions
        nodes.forEach(function(node, i) {
          if (node.cluster === 'part1') {
            part1Nodes.push(node);
            part1NodeMap.set(node.id, i);
          } else {
            part2Nodes.push(node);
            part2NodeMap.set(node.id, i);
          }
        });

        // order the part1 node
        part1Nodes.forEach(function(p1n) {
          let index = 0;
          let adjCount = 0;
          edges.forEach(function(edge) {
            const sourceId = edge.source;
            const targetId = edge.target;
            if (sourceId === p1n.id) {
              index += part2NodeMap.get(targetId);
              adjCount += 1;
            } else if (targetId === p1n.id) {
              index += part2NodeMap.get(sourceId);
              adjCount += 1;
            }
          });
          index /= adjCount;
          p1n.index = index;
        });
        part1Nodes.sort(function(a, b) {
          return a.index - b.index;
        });
        part2Nodes.forEach(function(p2n) {
          let index = 0;
          let adjCount = 0;
          edges.forEach(function(edge) {
            const sourceId = edge.source;
            const targetId = edge.target;
            if (sourceId === p2n.id) {
              index += part1NodeMap.get(targetId);
              adjCount += 1;
            } else if (targetId === p2n.id) {
              index += part1NodeMap.get(sourceId);
              adjCount += 1;
            }
          });
          index /= adjCount;
          p2n.index = index;
        });
        part2Nodes.sort(function(a, b) {
          return a.index - b.index;
        });

        // place the nodes
        const hLength =
          part1Nodes.length > part2Nodes.length ? part1Nodes.length : part2Nodes.length;
        const height = hLength * (nodeSep + nodeSize);
        let begin = center[1] - height / 2;
        if (direction === 'vertical') {
          begin = center[0] - height / 2;
        }
        part1Nodes.forEach(function(p1n, i) {
          if (direction === 'horizontal') {
            p1n.x = part1Pos;
            p1n.y = begin + i * (nodeSep + nodeSize);
          } else {
            p1n.x = begin + i * (nodeSep + nodeSize);
            p1n.y = part1Pos;
          }
        });
        part2Nodes.forEach(function(p2n, i) {
          if (direction === 'horizontal') {
            p2n.x = part2Pos;
            p2n.y = begin + i * (nodeSep + nodeSize);
          } else {
            p2n.x = begin + i * (nodeSep + nodeSize);
            p2n.y = part2Pos;
          }
        });
      },
    });
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();

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
      layout: {
        type: 'bigraphLayout',
        biSep: 300,
        nodeSep: 20,
        nodeSize: 20,
      },
      animate: true,
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
      modes: {
        default: ['drag-canvas'],
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
