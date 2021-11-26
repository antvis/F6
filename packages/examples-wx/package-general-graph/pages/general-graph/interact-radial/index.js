import F6 from '@antv/f6-wx';

import { data, data2_m } from './data';
import radial from '@antv/f6-wx/extends/layout/radialLayout';
/**
 * 交互扩展节点的辐射布局
 */

Page({
  canvas: null,
  ctx: null,
  renderer: '', // mini、mini-native等，F6需要，标记环境
  isCanvasInit: false, // canvas是否准备好了
  graph: null,
  mainUnitRadius: 80,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 1,
    forceMini: false,
  },

  onLoad() {
    // 注册布局
    F6.registerLayout('radial', radial);
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
    const focusNode = data.nodes[22];
    focusNode.style = {
      stroke: '#00419F',
      fill: '#729FFC',
      lineWidth: 2,
    };

    data.nodes[2].style = {
      stroke: '#00419F',
      fill: '#729FFC',
      lineWidth: 2,
    };

    // 创建F6实例
    this.graph = new F6.Graph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      layout: {
        type: 'radial',
        maxIteration: 200,
        focusNode,
        unitRadius: this.mainUnitRadius,
        linkDistance: 100,
        preventOverlap: true,
        nodeSize: 20,
      },
      animate: true,
      modes: {
        default: ['drag-node', 'click-select', 'click-add-node', 'drag-canvas'],
      },
      defaultNode: {
        size: 20,
      },
    });

    this.graph.on('node:tap', (ev) => {
      const itemModel = ev.item.getModel();
      const nodes = this.graph.getNodes();
      const edges = this.graph.getEdges();
      let newData;
      if (itemModel.id === '2') newData = data2_m;
      else return;
      const newNodeModels = newData.nodes;
      const newEdgeModels = [];
      // deduplication the items in newEdgeModels
      newData.edges.forEach((e) => {
        let exist = false;
        newEdgeModels.forEach((ne) => {
          if (ne.source === e.source && ne.target === e.target) exist = true;
        });
        if (!exist) {
          newEdgeModels.push(e);
        }
      });

      // for graph.changeData()
      const allNodeModels = [];
      const allEdgeModels = [];

      // add new nodes to graph
      const nodeMap = new Map();
      nodes.forEach((n) => {
        const nModel = n.getModel();
        nodeMap.set(nModel.id, n);
      });
      newNodeModels.forEach((nodeModel) => {
        if (nodeMap.get(nodeModel.id) === undefined) {
          // set the initial positions of the new nodes to the focus(clicked) node
          nodeModel.x = itemModel.x;
          nodeModel.y = itemModel.y;
          this.graph.addItem('node', nodeModel);
        }
      });

      // add new edges to graph
      const edgeMap = new Map();
      edges.forEach((e, i) => {
        const eModel = e.getModel();
        edgeMap.set(`${eModel.source},${eModel.target}`, i);
      });
      const oldEdgeNum = edges.length;
      newEdgeModels.forEach(function (em, i) {
        const exist = edgeMap.get(`${em.source},${em.target}`);
        if (exist === undefined) {
          this.graph.addItem('edge', em);
          edgeMap.set(`${em.source},${em.target}`, oldEdgeNum + i);
        }
      });

      edges.forEach((e) => {
        allEdgeModels.push(e.getModel());
      });
      nodes.forEach((n) => {
        allNodeModels.push(n.getModel());
      });
      // the max degree about foces(clicked) node in the newly added data
      const maxDegree = 4;
      // the max degree about foces(clicked) node in the original data
      const oMaxDegree = 3;
      const unitRadius = 40;
      // re-place the clicked node far away the exisiting items
      // along the radius from center node to it
      const vx = itemModel.x - focusNode.x;
      const vy = itemModel.y - focusNode.y;
      const vlength = Math.sqrt(vx * vx + vy * vy);
      const ideallength = unitRadius * maxDegree + this.mainUnitRadius * oMaxDegree;
      itemModel.x = (ideallength * vx) / vlength + focusNode.x;
      itemModel.y = (ideallength * vy) / vlength + focusNode.y;

      const Radial = F6.layout.radial;
      const subRadialLayout = new Radial({
        center: [itemModel.x, itemModel.y],
        maxIteration: 200,
        focusNode: '2',
        unitRadius,
        linkDistance: 180,
        preventOverlap: true,
      });
      subRadialLayout.init({
        nodes: newNodeModels,
        edges: newEdgeModels,
      });
      subRadialLayout.execute();
      this.graph.positionsAnimate();
      this.graph.data({
        nodes: allNodeModels,
        edges: allEdgeModels,
      });
    });

    this.graph.data({
      nodes: data.nodes,
      edges: data.edges.map((edge, i) => {
        edge.id = `edge${i}`;
        return Object.assign({}, edge);
      }),
    });
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
