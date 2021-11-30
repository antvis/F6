import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';
import { wrapContext } from '../../../common/utils/context';

import data from './data.js';

/**
 * dragSubtree:拖拽子树改变结构
 */

Page({
  canvas: null,
  ctx: null, // 延迟获取的2d context
  renderer: '', // mini、mini-native等，F6需要，标记环境
  isCanvasInit: false, // canvas是否准备好了
  graph: null,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 2,
    forceMini: false,
    discription:
      'Click a node to collapse the siblings with same cluster, and click again to expand',
  },

  onLoad() {
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

    // custom the collapse-sibling behavior
    F6.registerBehavior('collapse-slibing', {
      getEvents() {
        return {
          'node:click': 'onClick',
        };
      },
      onClick(evt) {
        const { item } = evt;
        const model = item.getModel();
        const { cluster } = model;
        const parentData = item.get('parent').getModel();
        const me = this;

        if (model.collapsedSiblings) {
          this.graph.removeChild(model.id);
          setTimeout(() => {
            const { children } = parentData;
            for (let i = model.collapsedSiblings.length - 1; i >= 0; i--) {
              const add = model.collapsedSiblings[i];
              children.splice(add.idx, 0, add);
            }
            delete model.collapsedSiblings;
            me.graph.updateChildren(children, parentData.id);
          }, 550);
          return;
        }
        const siblingData = parentData.children;
        if (siblingData.length <= 1) return;
        let count = 0;
        const aggregateNode = {
          id: `aggregate-node-${model.id}`,
          children: [],
          cluster,
          collapsedSiblings: [],
        };
        let modelIdx = siblingData.length - 1;
        for (let i = siblingData.length - 1; i >= 0; i--) {
          const sibling = siblingData[i];
          if (sibling.id === model.id) {
            const remove = siblingData[i];
            remove.idx = i;
            aggregateNode.collapsedSiblings.push(remove);
            modelIdx = Math.min(i, modelIdx);

            aggregateNode.children = (siblingData[i].children || []).concat(aggregateNode.children);
          } else if (sibling.cluster === cluster && sibling.id !== model.id) {
            count++;
            aggregateNode.children = (siblingData[i].children || []).concat(aggregateNode.children);
            const remove = siblingData.splice(i, 1)[0];
            remove.idx = i;
            aggregateNode.collapsedSiblings.push(remove);
            modelIdx = Math.min(i, modelIdx);
          }
        }
        if (!count) return;
        aggregateNode.label = count + 1;
        aggregateNode.size = 16 + (count + 1) * 4;

        this.graph.removeChild(model.id);
        siblingData.splice(modelIdx, 0, aggregateNode);
        setTimeout(() => {
          me.graph.updateChildren(siblingData, parentData.id);
        }, 550);
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
    const colors = ['#5F95FF', '#61DDAA', '#65789B'];
    const colorSets = F6.Util.getColorSetsBySubjectColors(colors, '#fff', 'default', '#777');

    // 创建F6实例
    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      modes: {
        default: ['collapse-slibing', 'drag-canvas'],
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        defalutPosition: [],
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 50;
        },
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        color: '#A3B1BF',
      },
    });

    this.graph.node(function(node) {
      const colorSet = colorSets[+node.cluster.replace('c', '')];
      return {
        size: node.size || 16,
        style: {
          fill: colorSet.mainFill || '#DEE9FF',
          stroke: colorSet.mainStroke || '#5B8FF9',
        },
      };
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
