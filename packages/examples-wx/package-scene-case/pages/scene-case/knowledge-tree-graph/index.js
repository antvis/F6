import F6 from '@antv/f6-wx';

import TreeGraph from '@antv/f6-wx/extends/graph/treeGraph';
import data from './data';

/**
 * 知识图谱树
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
    pixelRatio: 1,
    forceMini: false,
  },

  onLoad() {
    // 注册自定义树，节点等
    F6.registerGraph('TreeGraph', TreeGraph);

    const minWidth = 60;

    // TODO:这里需要定义两次，因为onLoad()里面传不到,updateChart()里面,如果定义在Page外面是不是就是全局的
    const BaseConfig = {
      nameFontSize: 12,
      childCountWidth: 22,
      countMarginLeft: 0,
      itemPadding: 16,
      nameMarginLeft: 4,
      rootPadding: 18,
    };
    F6.registerNode('treeNode', {
      draw: (cfg, group) => {
        const { label, collapsed, selected, children, depth } = cfg;
        const rootNode = depth === 0;
        const hasChildren = children && children.length !== 0;

        const { childCountWidth, countMarginLeft, itemPadding, nameMarginLeft, rootPadding } =
          BaseConfig;

        let width = 0;
        const height = 28;
        const x = 0;
        const y = -height / 2;

        // 名称文本
        const text = group.addShape('text', {
          attrs: {
            text: label,
            x: x * 2,
            y,
            textAlign: 'left',
            textBaseline: 'top',
            fontFamily: 'PingFangSC-Regular',
          },
          cursor: 'pointer',
          name: 'name-text-shape',
        });
        const textWidth = text.getBBox().width;
        width = textWidth + itemPadding + nameMarginLeft;

        width = width < minWidth ? minWidth : width;

        if (!rootNode && hasChildren) {
          width += countMarginLeft;
          width += childCountWidth;
        }

        const keyShapeAttrs = {
          x,
          y,
          width,
          height,
          radius: 4,
        };

        // keyShape根节点选中样式
        if (rootNode && selected) {
          keyShapeAttrs.fill = '#e8f7ff';
          keyShapeAttrs.stroke = '#e8f7ff';
        }
        const keyShape = group.addShape('rect', {
          attrs: keyShapeAttrs,
          name: 'root-key-shape-rect-shape',
        });

        if (!rootNode) {
          // 底部横线
          group.addShape('path', {
            attrs: {
              path: [
                ['M', x - 1, 0],
                ['L', width, 0],
              ],
              stroke: '#AAB7C4',
              lineWidth: 1,
            },
            name: 'node-path-shape',
          });
        }

        const mainX = x - 10;
        const mainY = -height + 15;

        if (rootNode) {
          group.addShape('rect', {
            attrs: {
              x: mainX,
              y: mainY,
              width: width + 12,
              height,
              radius: 14,
              fill: '#e8f7ff',
              cursor: 'pointer',
            },
            name: 'main-shape',
          });
        }

        let nameColor = 'rgba(0, 0, 0, .65)';
        if (selected) {
          nameColor = '#40A8FF';
        }

        // 名称
        if (rootNode) {
          group.addShape('text', {
            attrs: {
              text: label,
              x: mainX + rootPadding,
              y: 1,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: nameColor,
              fontSize: 12,
              fontFamily: 'PingFangSC-Regular',
              cursor: 'pointer',
            },
            name: 'root-text-shape',
          });
        } else {
          group.addShape('text', {
            attrs: {
              text: label,
              x: selected ? mainX + 6 + nameMarginLeft : mainX + 6,
              y: y - 5,
              textAlign: 'start',
              textBaseline: 'top',
              fill: nameColor,
              fontSize: 12,
              fontFamily: 'PingFangSC-Regular',
              cursor: 'pointer',
            },
            name: 'not-root-text-shape',
          });
        }

        // 子类数量
        if (hasChildren && !rootNode) {
          const childCountHeight = 12;
          const childCountX = width - childCountWidth;
          const childCountY = -childCountHeight / 2;

          group.addShape('rect', {
            attrs: {
              width: childCountWidth,
              height: 12,
              stroke: collapsed ? '#1890ff' : '#5CDBD3',
              fill: collapsed ? '#fff' : '#E6FFFB',
              x: childCountX,
              y: childCountY,
              radius: 6,
              cursor: 'pointer',
            },
            name: 'child-count-rect-shape',
          });
          group.addShape('text', {
            attrs: {
              text: `${children.length}`,
              fill: 'rgba(0, 0, 0, .65)',
              x: childCountX + childCountWidth / 2,
              y: childCountY + 12,
              fontSize: 10,
              width: childCountWidth,
              textAlign: 'center',
              cursor: 'pointer',
            },
            name: 'child-count-text-shape',
          });
        }

        return keyShape;
      },
    });

    F6.registerEdge('smooth', {
      draw(cfg, group) {
        const { startPoint, endPoint } = cfg;
        const hgap = Math.abs(endPoint.x - startPoint.x);

        const path = [
          ['M', startPoint.x, startPoint.y],
          [
            'C',
            startPoint.x + hgap / 4,
            startPoint.y,
            endPoint.x - hgap / 2,
            endPoint.y,
            endPoint.x,
            endPoint.y,
          ],
        ];

        const shape = group.addShape('path', {
          attrs: {
            stroke: '#AAB7C4',
            path,
          },
          name: 'smooth-path-shape',
        });
        return shape;
      },
    });

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
    const BaseConfig = {
      nameFontSize: 12,
      childCountWidth: 22,
      countMarginLeft: 0,
      itemPadding: 16,
      nameMarginLeft: 4,
      rootPadding: 18,
    };
    // 创建F6实例

    this.graph = new F6.TreeGraph({
      context: this.ctx,
      renderer: this.renderer,
      width,
      height,
      pixelRatio,
      fitView: true,
      fitViewPadding: 60,
      modes: {
        default: [
          {
            type: 'collapse-expand',
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        type: 'treeNode',
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'smooth',
      },
      layout: {
        type: 'compactBox', // TODO：为什么这里找不到
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth(d) {
          const labelWidth = F6.Util.getTextSize(d.label, BaseConfig.nameFontSize)[0];
          const width_ =
            BaseConfig.itemPadding +
            BaseConfig.nameMarginLeft +
            labelWidth +
            BaseConfig.rootPadding +
            BaseConfig.childCountWidth;
          return width_;
        },
        getVGap: function getVGap() {
          return 15;
        },
        getHGap: function getHGap() {
          return 30;
        },
      },
    });

    // 注册数据
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
