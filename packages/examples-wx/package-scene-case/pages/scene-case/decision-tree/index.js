import F6 from '@antv/f6-wx';
import TreeGraph from '@antv/f6-wx/extends/graph/treeGraph';
import { Tooltip } from '@antv/f6-plugin/f6Plugin';

import mockData from './data';

/**
 * decision-tree
 */

const colors = {
  B: '#5B8FF9',
  R: '#F46649',
  Y: '#EEBC20',
  G: '#5BD8A6',
  DI: '#A7A7A7',
};

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
  },

  onLoad() {
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

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

    // 默认配置
    const defaultConfig = {
      width,
      height,
      modes: {
        default: ['zoom-canvas', 'drag-canvas'],
      },
      fitView: true,
      animate: true,
      defaultNode: {
        type: 'flow-rect',
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#CED4D9',
        },
      },
      layout: {
        type: 'indented',
        direction: 'LR',
        dropCap: false,
        indent: 300,
        getHeight: () => {
          return 60;
        },
      },
    };

    //  组件props
    const props = {
      data: mockData,
      config: {
        padding: [20, 50],
        defaultLevel: 3,
        defaultZoom: 0.8,
        modes: { default: ['zoom-canvas', 'drag-canvas'] },
      },
    };

    // 自定义节点、边
    const registerFn = () => {
      /**
       * 自定义节点
       */
      F6.registerNode(
        'flow-rect',
        {
          shapeType: 'flow-rect',
          draw(cfg, group) {
            const {
              name = '',
              variableName,
              variableValue,
              variableUp,
              label,
              collapsed,
              currency,
              status,
              // rate,
            } = cfg;
            const grey = '#CED4D9';
            // 逻辑不应该在这里判断
            const rectConfig = {
              width: 202,
              height: 60,
              lineWidth: 1,
              fontSize: 12,
              fill: '#fff',
              radius: 4,
              stroke: grey,
              opacity: 1,
            };

            const nodeOrigin = {
              x: -rectConfig.width / 2,
              y: -rectConfig.height / 2,
            };

            const textConfig = {
              textAlign: 'left',
              textBaseline: 'bottom',
            };

            const rect = group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: nodeOrigin.y,
                ...rectConfig,
              },
            });

            const rectBBox = rect.getBBox();

            // label title
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 12 + nodeOrigin.x,
                y: 20 + nodeOrigin.y,
                text: name.length > 28 ? `${name.substr(0, 28)}...` : name,
                fontSize: 12,
                opacity: 0.85,
                fill: '#000',
                cursor: 'pointer',
              },
              name: 'name-shape',
            });

            // price
            const price = group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 12 + nodeOrigin.x,
                y: rectBBox.maxY - 12,
                text: label,
                fontSize: 16,
                fill: '#000',
                opacity: 0.85,
              },
            });

            // label currency
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: price.getBBox().maxX + 5,
                y: rectBBox.maxY - 12,
                text: currency,
                fontSize: 12,
                fill: '#000',
                opacity: 0.75,
              },
            });

            // percentage
            const percentText = group.addShape('text', {
              attrs: {
                ...textConfig,
                x: rectBBox.maxX - 8,
                y: rectBBox.maxY - 12,
                text: `${((variableValue || 0) * 100).toFixed(2)}%`,
                fontSize: 12,
                textAlign: 'right',
                fill: colors[status],
              },
            });

            // percentage triangle
            const symbol = variableUp ? 'triangle' : 'triangle-down';
            const triangle = group.addShape('marker', {
              attrs: {
                ...textConfig,
                x: percentText.getBBox().minX - 10,
                y: rectBBox.maxY - 12 - 6,
                symbol,
                r: 6,
                fill: colors[status],
              },
            });

            // variable name
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: triangle.getBBox().minX - 4,
                y: rectBBox.maxY - 12,
                text: variableName,
                fontSize: 12,
                textAlign: 'right',
                fill: '#000',
                opacity: 0.45,
              },
            });

            // bottom line background
            // const bottomBackRect = group.addShape('rect', {
            //   attrs: {
            //     x: nodeOrigin.x,
            //     y: rectBBox.maxY - 4,
            //     width: rectConfig.width,
            //     height: 4,
            //     radius: [0, 0, rectConfig.radius, rectConfig.radius],
            //     fill: '#E0DFE3',
            //   },
            // });

            // bottom percent
            // const bottomRect = group.addShape('rect', {
            //   attrs: {
            //     x: nodeOrigin.x,
            //     y: rectBBox.maxY - 4,
            //     width: rate * rectBBox.width,
            //     height: 4,
            //     radius: [0, 0, 0, rectConfig.radius],
            //     fill: colors[status],
            //   },
            // });

            // collapse rect
            if (cfg.children && cfg.children.length) {
              group.addShape('rect', {
                attrs: {
                  x: rectConfig.width / 2 - 8,
                  y: -8,
                  width: 16,
                  height: 16,
                  stroke: 'rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer',
                  fill: '#fff',
                },
                name: 'collapse-back',
                modelId: cfg.id,
              });

              // collpase text
              group.addShape('text', {
                attrs: {
                  x: rectConfig.width / 2,
                  y: -1,
                  textAlign: 'center',
                  textBaseline: 'middle',
                  text: collapsed ? '+' : '-',
                  fontSize: 16,
                  cursor: 'pointer',
                  fill: 'rgba(0, 0, 0, 0.25)',
                },
                name: 'collapse-text',
                modelId: cfg.id,
              });
            }

            this.drawLinkPoints(cfg, group);
            return rect;
          },
          update(cfg, item) {
            const group = item.getContainer();
            this.updateLinkPoints(cfg, group);
          },
          setState(name, value, item) {
            if (name === 'collapse') {
              const group = item.getContainer();
              const collapseText = group.find((e) => e.get('name') === 'collapse-text');
              if (collapseText) {
                if (!value) {
                  collapseText.attr({
                    text: '-',
                  });
                } else {
                  collapseText.attr({
                    text: '+',
                  });
                }
              }
            }
          },
          getAnchorPoints() {
            return [
              [0, 0.5],
              [1, 0.5],
            ];
          },
        },
        'rect',
      );

      F6.registerEdge(
        'flow-cubic',
        {
          getControlPoints(cfg) {
            let { controlPoints } = cfg; // 指定controlPoints
            if (!controlPoints || !controlPoints.length) {
              const { startPoint, endPoint, sourceNode, targetNode } = cfg;
              const {
                x: startX,
                y: startY,
                coefficientX,
                coefficientY,
              } = sourceNode ? sourceNode.getModel() : startPoint;
              const { x: endX, y: endY } = targetNode ? targetNode.getModel() : endPoint;
              let curveStart = (endX - startX) * coefficientX;
              let curveEnd = (endY - startY) * coefficientY;
              curveStart = curveStart > 40 ? 40 : curveStart;
              curveEnd = curveEnd < -30 ? curveEnd : -30;
              controlPoints = [
                { x: startPoint.x + curveStart, y: startPoint.y },
                { x: endPoint.x + curveEnd, y: endPoint.y },
              ];
            }
            return controlPoints;
          },
          getPath(points) {
            const path = [];
            path.push(['M', points[0].x, points[0].y]);
            path.push([
              'C',
              points[1].x,
              points[1].y,
              points[2].x,
              points[2].y,
              points[3].x,
              points[3].y,
            ]);
            return path;
          },
        },
        'single-line',
      );
    };
    registerFn();

    const { onInit, config } = props;
    console.log(onInit);
    const tooltip = new Tooltip({
      trigger: 'press',
      // TODO: _f2.default.Tooltip is not a constructor
      // offsetX and offsetY include the padding of the parent container
      // the types of items that allow the tooltip show up
      // 允许出现 tooltip 的 item 类型
      itemTypes: ['node'],
      // custom the tooltip's content
      // 自定义 tooltip 内容
      getContent: (e) => {
        // outDiv.style.padding = '0px 0px 20px 0px';
        return `
        <div>Custom Content</div>
        <div>Type: ${e.item.getType()}</div>
        <div>Label: ${e.item.getModel().label || e.item.getModel().id}</div>
      `;
      },
      getCss: () => {
        return `
        #tootip-content{
          width: 150;
          padding: 10;
        }
         #tootip-content div{
           height: 20;
         }
        `;
      },
      shouldBegin: (e) => {
        if (e.target.get('name') === 'name-shape') return true;
        return true;
      },
    });
    // 创建F6实例
    this.graph = new F6.TreeGraph({
      container: this.canvas,
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      linkCenter: true,
      pixelRatio,
      fitView: true,
      extra: {
        createImage: this.canvas && this.canvas.createImage,
      },
      ...defaultConfig,
      ...config,
      plugins: [tooltip],
    });

    this.graph.data(mockData);
    this.graph.render();
    this.graph.fitView();
    this.graph.zoom(config.defaultZoom || 1);

    const handleCollapse = (e) => {
      const { target } = e;
      const id = target.get('modelId');
      const item = this.graph.findById(id);
      const nodeModel = item.getModel();
      nodeModel.collapsed = !nodeModel.collapsed;
      this.graph.layout();
      this.graph.setItemState(item, 'collapse', nodeModel.collapsed);
    };
    this.graph.on('collapse-text:tap', (e) => {
      handleCollapse(e);
    });
    this.graph.on('collapse-back:tap', (e) => {
      handleCollapse(e);
    });
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
