# F6：移动端图可视化引擎

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*KV1pSIPeJPAAAAAAAAAAAAAAARQnAQ)

[![travis-ci](https://img.shields.io/travis/antvis/f6.svg)](https://travis-ci.org/antvis/f6) [![codecov](https://codecov.io/gh/antvis/f6/branch/master/graph/badge.svg)](https://codecov.io/gh/antvis/f6) ![typescript](https://img.shields.io/badge/language-typescript-red.svg) ![MIT](https://img.shields.io/badge/license-MIT-000000.svg) [![npm package](https://img.shields.io/npm/v/@antv/f6.svg)](https://www.npmjs.com/package/@antv/f6) [![NPM downloads](http://img.shields.io/npm/dm/@antv/f6.svg)](https://npmjs.org/package/@antv/f6) [![Percentage of issues still open](http://isitmaintained.com/badge/open/antvis/f6.svg)](http://isitmaintained.com/project/antvis/f6 'Percentage of issues still open')

[English README](README.md)

## 什么是 f6

[F6](https://github.com/antvis/f6) 是一个移动端图可视化引擎。它提供了图的绘制、布局、分析、交互、动画等图可视化的基础能力。旨在让关系变得透明，简单。让用户获得关系数据的 Insight。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zTjwQaXokeQAAAAAAAAAAABkARQnAQ' width=550 alt='' />

基于 F6，用户可以快速搭建自己的 **图分析** 应用。 ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*cDzXR4jIWr8AAAAAAAAAAABkARQnAQ)

> 强大的动画及交互

<img src="https://user-images.githubusercontent.com/6113694/44995293-02858600-afd5-11e8-840c-349e4730d63d.gif" height=150 alt='' /><img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*I9OdTbXJIi0AAAAAAAAAAABkARQnAQ" height=150 alt='' /><img src="https://user-images.githubusercontent.com/6113694/44995332-2ba61680-afd5-11e8-8cab-db0e9d08ceb7.gif" height=150 alt='' />

<img src="https://gw.alipayobjects.com/zos/rmsportal/HQxYguinFOMIXrGQOABY.gif" height=150><img src="https://gw.alipayobjects.com/zos/rmsportal/nAugyFgrbrUWPmDIDiQm.gif" height=150 alt='' /><img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*xoufSYcjK2AAAAAAAAAAAABkARQnAQ" height=150 alt='' />

> 强大的布局

## F6 的特性

F6 作为一款专业的图可视化引擎，具有以下特性：

- 丰富的元素：内置丰富的节点与边元素，自由配置，支持自定义；
- 可控的交互：内置 10+ 交互行为，支持自定义交互；
- 强大的布局：内置了 10+ 常用的图布局，支持自定义布局；
- 便捷的组件：优化内置组件功能及性能；
- 友好的体验：根据用户需求分层梳理文档，支持 TypeScript 类型推断。

除了默认好用、配置自由的内置功能，元素、交互、布局均具有高可扩展的自定义机制。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Y0c6S7cxjVkAAAAAAAAAAABkARQnAQ' width=800 height=200 alt='' />

> 丰富的图元素

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
    console.log(ctx, rect, canvas, renderer);
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
});
```

更多关于 F6 使用的问题，请参考[快速上手](https://f6.antv.vision/zh/docs/manual/getting-started)。

## 开发

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

## 文档

- <a href='https://f6.antv.vision/zh/docs/manual/tutorial/preface' target='_blank'>入门教程</a>
- <a href='https://f6.antv.vision/zh/docs/manual/middle/overview' target='_blank'>核心概念</a>
- <a href='https://f6.antv.vision/zh/docs/manual/advanced/coordinate-system' target='_blank'>扩展阅读</a>
- <a href='https://f6.antv.vision/zh/docs/api/Graph' target='_blank'>API</a>

## F6 图可视化交流群

欢迎各界 F6 使用者、图可视化爱好者加入 **F6 超级服务群**（钉钉群，使用钉钉扫一扫加入）讨论与交流。

<img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*J5qVTo11-1MAAAAAAAAAAAAAARQnAQ' width=550 alt='' />

## 如何贡献

请让我们知道您要解决或贡献什么，所以在贡献之前请先提交 [issues](https://github.com/antvis/f6/issues) 描述 bug 或建议。

成为一个贡献者前请阅读 [代码贡献规范](https://github.com/antvis/f6/blob/master/packages/f6/CONTRIBUTING.zh-CN.md).

## License

[MIT license](./LICENSE).
