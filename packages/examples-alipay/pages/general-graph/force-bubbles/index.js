import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import getData from './data';
import force from '@antv/f6/dist/extends/layout/forceLayout';

/**
 * 力导向气泡图
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
    F6.registerLayout('force', force);
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
    const data = getData();

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      layout: {
        type: 'force',
        nodeStrength: 30,
        collideStrength: 0.7,
        alphaDecay: 0.01,
        preventOverlap: true,
      },
      modes: {
        default: ['drag-node'],
      },
      defaultNode: {
        size: [10, 10],
      },
    });

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const colors = [
      '#BDD2FD',
      '#BDEFDB',
      '#C2C8D5',
      '#FBE5A2',
      '#F6C3B7',
      '#B6E3F5',
      '#D3C6EA',
      '#FFD8B8',
      '#AAD8D8',
      '#FFD6E7',
    ];
    const strokes = [
      '#5B8FF9',
      '#5AD8A6',
      '#5D7092',
      '#F6BD16',
      '#E8684A',
      '#6DC8EC',
      '#9270CA',
      '#FF9D4D',
      '#269A99',
      '#FF99C3',
    ];

    const { nodes } = data;
    const nodeMap = new Map();
    const clusterMap = new Map();
    let clusterId = 0;
    nodes.forEach((node) => {
      nodeMap.set(node.id, node);
      // cluster
      if (node.cluster && clusterMap.get(node.cluster) === undefined) {
        clusterMap.set(node.cluster, clusterId);
        clusterId++;
      }
      const cid = clusterMap.get(node.cluster);
      if (!node.style) node.style = {};
      node.style.fill = colors[cid % colors.length];
      node.style.stroke = strokes[cid % strokes.length];
      node.x = width / 2 + 200 * (Math.random() - 0.5);
      node.y = height / 2 + 200 * (Math.random() - 0.5);
    });

    // map the value to node size
    let maxNodeValue = -9999;
    let minNodeValue = 9999;
    nodes.forEach(function(n) {
      if (maxNodeValue < n.value) maxNodeValue = n.value;
      if (minNodeValue > n.value) minNodeValue = n.value;
    });
    const nodeSizeRange = [10, 30];
    const nodeSizeDataRange = [minNodeValue, maxNodeValue];
    scaleNodeProp(nodes, 'size', 'value', nodeSizeDataRange, nodeSizeRange);

    nodes.forEach(function(node) {
      node.oriSize = node.size;
      node.oriLabel = node.label;
    });

    function refreshDragedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
    }

    // 监听
    this.graph.on('node:dragstart', function(e) {
      this.graph.layout();
      refreshDragedNodePosition(e);
    });
    this.graph.on('node:drag', function(e) {
      refreshDragedNodePosition(e);
    });
    this.graph.on('node:dragend', function(e) {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    });
    this.graph.on('node:click', function(e) {
      const node = e.item;
      const states = node.getStates();
      let clicked = false;
      const model = node.getModel();
      let size = 200;
      let labelText = `NODE: ${model.id}\n${model.description}`;
      states.forEach(function(state) {
        if (state === 'click') {
          clicked = true;
          size = model.oriSize;
          labelText = model.oriLabel;
        }
      });
      this.graph.setItemState(node, 'click', !clicked);
      this.graph.updateItem(node, {
        size,
        label: labelText,
      });
      this.graph.layout();
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    function scaleNodeProp(elements, propName, refPropName, dataRange, outRange) {
      const outLength = outRange[1] - outRange[0];
      const dataLength = dataRange[1] - dataRange[0];
      elements.forEach(function(n) {
        if (propName.split('.')[0] === 'style') {
          if (n.style) {
            n.style[propName.split('.')[1]] =
              ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
          } else {
            n.style = _defineProperty(
              {},
              propName.split('.')[1],
              ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0],
            );
          }
        } else {
          n[propName] = ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
        }
      });
    }
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
