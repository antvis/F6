import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
import mds from '@antv/f6/dist/extends/layout/mdsLayout';
/**
 * 环形弧线图
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
    F6.registerLayout('mds', mds);

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
    const colors = [
      'rgb(91, 143, 249)',
      'rgb(90, 216, 166)',
      'rgb(93, 112, 146)',
      'rgb(246, 189, 22)',
      'rgb(232, 104, 74)',
      'rgb(109, 200, 236)',
      'rgb(146, 112, 202)',
      'rgb(255, 157, 77)',
      'rgb(38, 154, 153)',
      'rgb(227, 137, 163)',
    ];

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
              const text = `source: ${model.sourceName}<br/> target: ${model.targetName}`;
              return text;
            },
          },
        ],
      },
      defaultNode: {
        style: {
          opacity: 0.8,
          lineWidth: 1,
          stroke: '#999',
        },
      },
      defaultEdge: {
        size: 1,
        color: '#e2e2e2',
        style: {
          opacity: 0.6,
          lineAppendWidth: 3,
        },
      },
    });

    // 处理数据
    function scaleNodeProp(nodes, propName, refPropName, dataRange, outRange) {
      const outLength = outRange[1] - outRange[0];
      const dataLength = dataRange[1] - dataRange[0];
      nodes.forEach(function(n) {
        n[propName] = ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
      });
    }

    const origin = [width / 2, height / 2];
    const radius = width < height ? width / 3 : height / 3;
    const { edges } = data;
    const { nodes } = data;
    const nodeMap = new Map();
    const clusterMap = new Map();
    let clusterId = 0;
    const n = nodes.length;
    const angleSep = (Math.PI * 2) / n;
    nodes.forEach(function(node, i) {
      const angle = i * angleSep;
      node.x = radius * Math.cos(angle) + origin[0];
      node.y = radius * Math.sin(angle) + origin[1];
      node.angle = angle;
      nodeMap.set(node.id, node);
      // cluster
      if (node.cluster && clusterMap.get(node.cluster) === undefined) {
        clusterMap.set(node.cluster, clusterId);
        clusterId++;
      }
      const id = clusterMap.get(node.cluster);
      if (node.style) {
        node.style.fill = colors[id % colors.length];
      } else {
        node.style = {
          fill: colors[id % colors.length],
        };
      }
      // label
      node.label = node.name;
      node.labelCfg = {
        position: 'center',
        style: {
          rotate: angle,
          rotateCenter: 'lefttop',
          textAlign: 'start',
        },
      };
    });
    edges.forEach((edge) => {
      edge.type = 'quadratic';
      const source = nodeMap.get(edge.source);
      const target = nodeMap.get(edge.target);
      edge.controlPoints = [
        {
          x: origin[0],
          y: origin[1],
        },
      ];
      edge.color = source.style.fill;
      edge.sourceName = source.name;
      edge.targetName = target.name;
    });

    // map the value to node size
    let maxValue = -9999;
    let minValue = 9999;
    nodes.forEach(function(k) {
      if (maxValue < k.value) maxValue = k.value;
      if (minValue > k.value) minValue = k.value;
    });
    const sizeRange = [3, 30];
    const sizeDataRange = [minValue, maxValue];
    scaleNodeProp(nodes, 'size', 'value', sizeDataRange, sizeRange);

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
