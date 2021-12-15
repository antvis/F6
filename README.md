# F6：移动端图可视化引擎

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*KV1pSIPeJPAAAAAAAAAAAAAAARQnAQ) [![travis-ci](https://img.shields.io/travis/antvis/f6.svg)](https://travis-ci.org/antvis/f6) [![codecov](https://codecov.io/gh/antvis/f6/branch/master/graph/badge.svg)](https://codecov.io/gh/antvis/f6) ![typescript](https://img.shields.io/badge/language-typescript-red.svg) ![MIT](https://img.shields.io/badge/license-MIT-000000.svg) [![npm package](https://img.shields.io/npm/v/@antv/f6.svg)](https://www.npmjs.com/package/@antv/f6) [![NPM downloads](http://img.shields.io/npm/dm/@antv/f6.svg)](https://npmjs.org/package/@antv/f6) [![Percentage of issues still open](http://isitmaintained.com/badge/open/antvis/f6.svg)](http://isitmaintained.com/project/antvis/f6 'Percentage of issues still open')

[English](./README-en-US.md) | 简体中文

## 欢迎扫码体验

<img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*-VctS49Qe6QAAAAAAAAAAAAAARQnAQ' width=550 alt='img'/>

## 什么是 F6

<a href='https://github.com/antvis/f6' target='_blank'>F6</a> 是一款可以快速、流畅运行于移动设备中的图可视化引擎，通过丰富的布局、组件及分析能力，帮助用户落地跨平台的图可视化应用解决方案。在 H5、小程序等移动端平台上，对包体积、性能有更高的要求，也需要定义一套合适的交互模式。针对以上问题，我们在 G6 的基础上重新设计并构建了 F6。F6 不仅具有基础的关联图绘制、事件、动画，同时内置了常用的移动端交互模式、丰富的布局和分析组件，通过简单的配置即可使用。

<img src='https://raw.githubusercontent.com/antvis/F6/master/examples.gif' width='100%' alt='img'/>

如果您还没有使用过 F6， 建议通过 [快速上手](https://f6.antv.vision/zh/docs/manual/getting-started) 抢先体验 F6 的魅力。

## F6 文档

- [F6 入门教程](https://f6.antv.vision/zh/docs/manual/introduction)
- [F6 核心概念](https://f6.antv.vision/zh/docs/manual/middle/overview)
- [F6 扩展阅读](https://f6.antv.vision/zh/docs/manual/advanced/coordinate-system)
- [API](https://f6.antv.vision/zh/docs/api/Graph)
- [示例](https://f6.antv.vision/zh/docs/examples/tree/compactBox)

## 安装

```bash
$ npm install @antv/f6
```

## 使用

<img src="https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*g8A8T6urwOEAAAAAAAAAAAAAARQnAQ" width=500 alt='' />

- <a href='https://herbox-embed.alipay.com/p/f6/demo' target='_blank'>demo</a>

```js
import F6 from '@antv/f6';
import graphData from './data';
import dagreLayout from '@antv/f6/dist/extends/layout/dagreLayout';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';

F6.registerLayout('dagreLayout', dagreLayout);
F6.registerGraph('TreeGraph', TreeGraph);

Page({
  data: {
    width: 300,
    height: 400,
    pixelRatio: 1,
  },
  onLoad() {
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();
    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio: pixelRatio,
    });
  },
  onCanvasInit(ctx, rect, canvas, renderer) {
    this.graph = new F6.TreeGraph({
      context: ctx,
      renderer,
      width: this.data.width,
      height: this.data.height,
      linkCenter: true,
      modes: {
        default: ['drag-canvas', 'zoom-canvas'],
      },
      defaultNode: {
        size: 40,
      },
      layout: {
        type: 'compactBox',
        direction: 'RL',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: () => {
          return 26;
        },
        getWidth: () => {
          return 26;
        },
        getVGap: () => {
          return 20;
        },
        getHGap: () => {
          return 30;
        },
        radial: false,
      },
    });

    this.graph.node(function (node) {
      return {
        label: node.id,
      };
    });

    this.graph.data(graphData);
    this.graph.render();
    this.graph.fitView();
  },
  onTouch(e) {
    this.graph.emitEvent(e);
  },
  onUnload() {
    this.graph?.destroy();
  },
});
```

## 如何开发

```bash
$ npm install

# lerna bootstrap for multiple packages
$ npm run bootstrap

# build the packages
$ npm run build:all

# if you wanna watch one of the packages, e.g. packages/core
$ cd ./packages/core
$ npm run watch

# run test case
$ npm test

# run test case in watch mode
npm test -- --watch ./tests/unit/algorithm/find-path-spec
DEBUG_MODE=1 npm test -- --watch ./tests/unit/algorithm/find-path-spec
```

更详细的内容请参考 [快速上手](https://f6.antv.vision/zh/docs/manual/getting-started) 文档。

## F6 图可视化交流群

欢迎各界 F6 使用者、图可视化爱好者加入 **F6 超级服务群**（钉钉群，使用钉钉扫一扫加入）讨论与交流。

<p>
    <img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*wEQkTKK9GgMAAAAAAAAAAAAAARQnAQ' style='width:250px;display:inline-block;vertical-align:top;' alt='' />
</p>

## 如何贡献

请让我们知道您要解决或贡献什么，所以在贡献之前请先提交 <a href='https://github.com/antvis/f6/issues' target='_blank'>issues</a> 描述 bug 或建议。

成为一个贡献者前请阅读 <a href='https://github.com/antvis/F6/blob/master/packages/f6/CONTRIBUTING.zh-CN.md' target='_blank'>代码贡献规范</a>。

## License

<a href='https://github.com/antvis/f6/blob/master/LICENSE' target='_blank'>MIT license</a>。
