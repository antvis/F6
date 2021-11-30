import F6 from '@antv/f6-wx';

import data from './data';

/**
 * setMode
 */
// const modeNum = 0; // 用来标记选择的模式
// const modeList = ['默认模式', '添加节点模式', '添加边模式'];

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
    currentMode: '请选择模式',
    showDialog: false,
    groups: [
      { text: '示例菜单', value: 1 },
      { text: '示例菜单', value: 2 },
      { text: '负向菜单', type: 'warn', value: 3 },
    ],
  },

  tapButton(event) {
    console.log(event);
    const { mode } = event.target.dataset;
    console.log(mode);
    this.graph.setMode(mode);
  },

  onLoad() {
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    // 注册自定义节点
    let addedCount = 0;
    // Register a custom behavior: add a node when user click the blank part of canvas
    F6.registerBehavior('click-add-node', {
      // Set the events and the corresponding responsing function for this behavior
      getEvents() {
        // The event is canvas:click, the responsing function is onClick
        return {
          'canvas:click': 'onClick',
        };
      },
      // Click event
      onClick(ev) {
        const self = this;
        const { graph } = self;
        // Add a new node
        graph.addItem('node', {
          x: ev.canvasX,
          y: ev.canvasY,
          id: `node-${addedCount}`, // Generate the unique id
        });
        addedCount++;
      },
    });
    // Register a custom behavior: click two end nodes to add an edge
    F6.registerBehavior('click-add-edge', {
      // Set the events and the corresponding responsing function for this behavior
      getEvents() {
        return {
          'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
          mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
          'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
        };
      },
      // The responsing function for node:click defined in getEvents
      onClick(ev) {
        const self = this;
        const node = ev.item;
        const { graph } = self;
        // The position where the mouse clicks
        // const point = { x: ev.x, y: ev.y };
        const model = node.getModel();
        if (self.addingEdge && self.edge) {
          graph.updateItem(self.edge, {
            target: model.id,
          });

          self.edge = null;
          self.addingEdge = false;
        } else {
          // Add anew edge, the end node is the current node user clicks
          self.edge = graph.addItem('edge', {
            source: model.id,
            target: model.id,
          });
          self.addingEdge = true;
        }
      },
      // The responsing function for mousemove defined in getEvents
      onMousemove(ev) {
        const self = this;
        // The current position the mouse clicks
        const point = { x: ev.x, y: ev.y };
        if (self.addingEdge && self.edge) {
          // Update the end node to the current node the mouse clicks
          self.graph.updateItem(self.edge, {
            target: point,
          });
        }
      },
      // The responsing function for edge:click defined in getEvents
      onEdgeClick(ev) {
        const self = this;
        const currentEdge = ev.item;
        if (self.addingEdge && self.edge === currentEdge) {
          self.graph.removeItem(self.edge);
          self.edge = null;
          self.addingEdge = false;
        }
      },
    });

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
      // The sets of behavior modes
      modes: {
        // Defualt mode
        default: ['drag-node', 'click-select'],
        // Adding node mode
        addNode: ['click-add-node', 'click-select'],
        // Adding edge mode
        addEdge: ['click-add-edge', 'click-select'],
      },
      // The node styles in different states
      nodeStateStyles: {
        // The node styles in selected state
        selected: {
          stroke: '#666',
          lineWidth: 2,
          fill: 'steelblue',
        },
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
