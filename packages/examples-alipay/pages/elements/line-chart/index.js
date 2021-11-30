import F6 from '@antv/f6';
import { wrapContext } from '../../../common/utils/context';
import data from './data';
/**
 * lineChart
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
    F6.registerNode('circleLine', {
      draw(cfg, group) {
        const baseR = 30;
        let nowAngle = 0;

        // Ref line
        let refR = baseR;
        const refInc = 10;
        for (let i = 0; i < 5; i++) {
          group.addShape('circle', {
            attrs: {
              x: 0,
              y: 0,
              r: (refR += refInc),
              stroke: '#bae7ff',
              lineDash: [4, 4],
            },
            name: 'circle-shape',
          });
        }

        const everyIncAngle = (2 * Math.PI * (360 / 5 / 5)) / 360;
        cfg.details.forEach((cat) => {
          // 计算一系列点的位置
          const postions = [];
          cat.values.forEach((item, index) => {
            const r = baseR + item;
            const xPos = r * Math.cos(nowAngle);
            const yPos = r * Math.sin(nowAngle);
            nowAngle += everyIncAngle;
            postions.push([xPos, yPos]);
            if (index === 4) {
              const r_ = baseR + item;
              const xPos_ = r_ * Math.cos(nowAngle);
              const yPos_ = r_ * Math.sin(nowAngle);
              postions.push([xPos_, yPos_]);
            }
          });
          const pathArrayL = postions.map((item) => ['L', ...item]);
          // add the connecting line
          group.addShape('path', {
            attrs: {
              path: [
                ['M', 0, 0], // the top vertex
                ...pathArrayL,
                ['Z'], // close the path
              ],
              stroke: cat.color,
            },
            name: 'path-shape',
          });

          postions.forEach((pos, index) => {
            if (index !== 5) {
              const littleCircle = group.addShape('circle', {
                // attrs: style
                attrs: {
                  x: pos[0],
                  y: pos[1],
                  r: 2,
                  fill: 'black',
                  stroke: cat.color,
                  cursor: 'pointer',
                },
                name: 'circle-shape',
              });
              // 加上交互动画
              littleCircle.on('mouseenter', function() {
                littleCircle.animate(
                  {
                    r: 5,
                  },
                  {
                    repeat: false,
                    duration: 200,
                  },
                );
              });
              littleCircle.on('mouseleave', function() {
                littleCircle.animate(
                  {
                    r: 2,
                  },
                  {
                    repeat: false,
                    duration: 200,
                  },
                );
              });
              // set the name
              littleCircle.set('name', 'littleCircle');
            }
          });
        });

        // add a circle with the same color with the background color
        group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: baseR,
            fill: cfg.centerColor,
            stroke: 'darkgray',
          },
          name: 'circle-shape',
        });
        if (cfg.label) {
          group.addShape('text', {
            attrs: {
              x: 0, // 居中
              y: 0,
              textAlign: 'center',
              textBaseline: 'middle',
              text: cfg.label,
              fill: 'white',
              fontStyle: 'bold',
            },
            name: 'text-shape',
          });
        }
        return group;
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
    });
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
