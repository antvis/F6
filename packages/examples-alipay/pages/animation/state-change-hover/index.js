import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import { nodes, edges } from './data';

/**
 * stateChange_hover
 */

F6.registerNode(
  'leaf-node',
  {
    afterDraw(cfg, group) {
      group.addShape('circle', {
        attrs: {
          x: 0,
          y: 0,
          r: 5,
          fill: cfg.color || '#5B8FF9',
        },
        name: 'circle-shape',
      });
    },
    getAnchorPoints() {
      return [
        [0, 0.5],
        [1, 0.5],
      ];
    },
  },
  'circle',
);

F6.registerNode(
  'center-node',
  {
    afterDraw(cfg, group) {
      const r = cfg.size / 2;
      group.addShape('circle', {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r: r + 10,
          fill: 'gray',
          opacity: 0.4,
        },
        name: 'circle-shape1',
      });
      group.addShape('circle', {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r: r + 20,
          fill: 'gray',
          opacity: 0.2,
        },
        name: 'circle-shape2',
      });
      group.sort();
    },
    getAnchorPoints() {
      return [
        [0, 0.5],
        [1, 0.5],
      ];
    },
  },
  'circle',
);

// lineDash array
const lineDash = [4, 2, 1, 2];

F6.registerEdge(
  'can-running',
  {
    setState(name, value, item) {
      const shape = item.get('keyShape');
      if (name === 'running') {
        if (value) {
          let index = 0;
          shape.animate(
            () => {
              index += 1;
              if (index > 9) {
                index = 0;
              }
              const res = {
                lineDash,
                lineDashOffset: -index,
              };
              // return the params for this frame
              return res;
            },
            {
              repeat: true,
              duration: 3000,
            },
          );
        } else {
          shape.stopAnimate();
          shape.attr('lineDash', null);
        }
      }
    },
  },
  'cubic-horizontal',
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
      defaultNode: {
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#b5b5b5',
        },
      },
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
      defaultNode: {
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#b5b5b5',
        },
      },
    });

    this.graph.data({ nodes, edges });
    this.graph.render();
    this.graph.fitView();

    this.graph.on('node:tap', (ev) => {
      const node = ev.item;
      const edges_ = node.getEdges();
      edges_.forEach((edge) => this.graph.setItemState(edge, 'running', true));
    });
    // this.graph.on('node:dbltap', (ev) => {
    //   console.log('点击了')
    //   const node = ev.item;
    //   const edges_ = node.getEdges();
    //   edges_.forEach((edge) => this.graph.setItemState(edge, 'running', false));
    // });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
