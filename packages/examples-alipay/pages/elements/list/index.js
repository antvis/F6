import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data_ from './data';
/**
 * list:列表
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

    F6.registerNode('expandNode', {
      draw: function draw(cfg, group) {
        const mainGroup = group.addGroup({
          id: 'main-group',
        });
        const keyShape = mainGroup.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 100 + 60 * cfg.values.length,
            height: 50,
            fill: '#C6E5FF',
          },
          name: 'key-rect-shape',
        });

        // name text
        mainGroup.addShape('text', {
          attrs: {
            text: cfg.name,
            fill: '#000',
            width: 130,
            x: 10,
            y: 32,
          },
          name: 'name-text-shape',
        });

        const subGroup = group.addGroup({
          id: 'sub-group',
        });
        cfg.values.forEach(function(data, index) {
          subGroup.addShape('rect', {
            attrs: {
              x: 110 + index * 60,
              y: 0,
              width: 50,
              height: 50,
            },
            name: 'rect-shape',
          });

          subGroup.addShape('text', {
            attrs: {
              text: data.key,
              fill: '#000',
              x: 130 + index * 60,
              y: 20,
              fontSize: 10,
              textBaseline: 'middle',
              className: 'sub-group-text',
            },
            name: 'sub-text-shape1',
          });

          subGroup.addShape('text', {
            attrs: {
              text: data.value,
              fill: '#000',
              x: 130 + index * 60,
              y: 30,
              fontSize: 10,
              textBaseline: 'middle',
              textAlign: 'left',
              className: 'sub-group-text',
            },
            name: 'name-text-shape2',
          });
        });

        const listGroup = group.addGroup({
          id: 'detail-list-group',
        });

        listGroup.addShape('rect', {
          attrs: {
            width: 100 + 60 * cfg.values.length - 70,
            height: 30 * cfg.properties.length + 20,
            fill: '#fff',
            x: 70,
            y: 30,
          },
          name: 'list-rect-shape1',
        });

        const rectWidth = 100 + 60 * cfg.values.length - 80;
        cfg.properties.forEach(function(property, index) {
          listGroup.addShape('rect', {
            attrs: {
              width: rectWidth,
              height: 30,
              fill: '#9EC9FF',
              x: 80,
              y: 40 * index + 40,
            },
            name: 'list-rect-shape2',
          });
          let count = 0;
          for (const p in property) {
            // 每个rect中添加5个文本
            listGroup.addShape('text', {
              attrs: {
                text: property[p],
                fill: '#000',
                x: 85 + count * (rectWidth / cfg.values.length) - count * 10,
                y: 40 * index + 40 + 15,
                fontSize: 10,
                textBaseline: 'middle',
                textAlign: 'left',
              },
              name: 'text-shape',
            });
            count++;
          }
        });
        listGroup.hide();
        return keyShape;
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
      fitCenter: true,
      modes: {
        default: ['drag-canvas'],
      },
    });

    this.graph.on('node:tap', function(evt) {
      const { target } = evt;

      const parentGroup = target.get('parent').get('parent');
      const detailGroup = parentGroup.findById('detail-list-group');
      // 将sub-group中的内容网上移动一段距离
      const subGroup = parentGroup.findById('sub-group');
      const keyTexts = subGroup.findAll(function(item) {
        return item.attr('className') === 'sub-group-text';
      });
      const isVisible = detailGroup.get('visible');
      if (isVisible) {
        detailGroup.hide();
        keyTexts.forEach(function(text) {
          const top = text.attr('y');
          text.attr('y', top + 10);
        });
      } else {
        keyTexts.forEach(function(text) {
          const top = text.attr('y');
          text.attr('y', top - 10);
        });
        detailGroup.show();
      }
      this.graph.paint();
    });

    this.graph.data(data_);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
