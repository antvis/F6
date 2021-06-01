# F6: A Mobile Graph Visualization Framework in TypeScript.

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*KV1pSIPeJPAAAAAAAAAAAAAAARQnAQ)

[![travis-ci](https://img.shields.io/travis/antvis/f6/master.svg)](https://travis-ci.org/antvis/f6) [![codecov](https://codecov.io/gh/antvis/f6/branch/master/graph/badge.svg)](https://codecov.io/gh/antvis/f6) ![typescript](https://img.shields.io/badge/language-typescript-red.svg) ![MIT](https://img.shields.io/badge/license-MIT-000000.svg) [![npm package](https://img.shields.io/npm/v/@antv/f6.svg)](https://www.npmjs.com/package/@antv/f6) [![NPM downloads](http://img.shields.io/npm/dm/@antv/f6.svg)](https://npmjs.org/package/@antv/f6) [![Percentage of issues still open](http://isitmaintained.com/badge/open/antvis/f6.svg)](http://isitmaintained.com/project/antvis/f6 'Percentage of issues still open')

[中文 README](README-zh_CN.md)

## What is F6

[F6](https://github.com/antvis/f6) is a mobile graph visualization engine, which provides a set of basic mechanisms, including rendering, layout, analysis, interaction, animation, and other auxiliary tools. F6 aims to simplify the relationships, and help people to obtain the insight of relational data.

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zTjwQaXokeQAAAAAAAAAAABkARQnAQ' width=550 alt='' />

Developers are able to build graph visualization **analysis** applications or graph visualization **modeling** applications easily.

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*cDzXR4jIWr8AAAAAAAAAAABkARQnAQ)

> Powerful Animation and Interactions

<img src="https://user-images.githubusercontent.com/6113694/44995293-02858600-afd5-11e8-840c-349e4730d63d.gif" height=150 alt='' /><img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*I9OdTbXJIi0AAAAAAAAAAABkARQnAQ" height=150 alt='' /><img src="https://user-images.githubusercontent.com/6113694/44995332-2ba61680-afd5-11e8-8cab-db0e9d08ceb7.gif" height=150 alt='' />

<img src="https://gw.alipayobjects.com/zos/rmsportal/HQxYguinFOMIXrGQOABY.gif" height=150 alt='' /><img src="https://gw.alipayobjects.com/zos/rmsportal/nAugyFgrbrUWPmDIDiQm.gif" height=150 alt='' /><img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*xoufSYcjK2AAAAAAAAAAAABkARQnAQ" height=150 alt='' />

> Powerful Layouts

## Features

- Abundant Built-in Items: Nodes and edges with free configurations;
- Steerable Interactions: More than 10 basic interaction behaviors ;
- Powerful Layout: More than 10 layout algorithms;
- Convenient Components: Outstanding ability and performance;
- Friendly User Experience: Complete documents for different levels of user requirements. TypeScript supported.

F6 concentrates on the principle of 'good by default'. In addition, the custom mechanism of the item, interation behavior, and layout satisfies the customazation requirements.

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Y0c6S7cxjVkAAAAAAAAAAABkARQnAQ' width=800 height=200 alt='' />

> Abundant Built-in Items

## Installation

```bash
$ npm install @antv/f6
```

## Usage

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*khbvSrptr0kAAAAAAAAAAABkARQnAQ" width=437 height=148 alt='' />

```js
import F6 from '@antv/f6';

const data = {
  nodes: [
    {
      id: 'node1',
      label: 'Circle1',
      x: 150,
      y: 150,
    },
    {
      id: 'node2',
      label: 'Circle2',
      x: 400,
      y: 150,
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};

const graph = new F6.Graph({
  container: 'container',
  width: 500,
  height: 500,
  defaultNode: {
    type: 'circle',
    size: [100],
    color: '#5B8FF9',
    style: {
      fill: '#9EC9FF',
      lineWidth: 3,
    },
    labelCfg: {
      style: {
        fill: '#fff',
        fontSize: 20,
      },
    },
  },
  defaultEdge: {
    style: {
      stroke: '#e2e2e2',
    },
  },
});

graph.data(data);
graph.render();
```

For more information of the usage, please refer to [Getting Started](https://antv-f6.gitee.io/en/docs/manual/getting-started).

## Development

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

## Documents

- <a href='https://f6.antv.vision/en/docs/manual/tutorial/preface' target='_blank'>Tutorial</a>
- <a href='https://f6.antv.vision/en/docs/manual/middle/overview' target='_blank'>Middle Guides</a>
- <a href='https://f6.antv.vision/en/docs/manual/advanced/coordinate-system' target='_blank'>Further Reading</a>
- <a href='https://f6.antv.vision/en/docs/api/Graph' target='_blank'>API Reference</a>

## F6 Communication Group

Welcome to join the **F6 Communication Group** or **F6 Communication Group-2** (DingTalk groups). We also welcome the github issues.

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*J5qVTo11-1MAAAAAAAAAAAAAARQnAQ)

## How to Contribute

Please let us know what you are you going to help. Do check out [issues](https://github.com/antvis/f6/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](https://github.com/antvis/f6/blob/master/packages/f6/CONTRIBUTING.md).

## License

[MIT license](./LICENSE).
