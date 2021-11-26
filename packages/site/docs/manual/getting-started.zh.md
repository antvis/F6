---
title: 快速上手
order: 1
---

## 第一个示例

<img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*P4PNSZbNiM4AAAAAAAAAAAAAARQnAQ' width=400 alt='img'/>

## 安装

### 1 在项目中使用 NPM 包引入

**Step 1:** 使用命令行在项目目录下执行以下命令：

```bash
 npm install --save @antv/f6
```

**Step 2:** 在需要用的 F6 的 JS 文件中导入：

```javascript
import F6 from '@antv/f6';
```

<span style="background-color: rgb(251, 233, 231); color: rgb(139, 53, 56)"><strong>⚠️ 注意:</strong></span>

- F6 同时支持了小程序和 H5，所以在不论是小程序还是 H5，都可以使用 npm 的方式使用
- 在小程序中需搭配使用 F6 小程序组件

[支付宝小程序组件](https://www.npmjs.com/package/@antv/f6-alipay)

```bash
npm install --save @antv/f6-alipay
```

[微信小程序组件](https://www.npmjs.com/package/@antv/f6-wx)

```bash
npm install --save @antv/f6-wx
```

### 2 在 HTML 中使用  CDN 引入

若在移动端 H5 页面中使用，则可以通过 cdn 引入

```html
<script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.f6-{$version}/dist/f6.js"></script>
```

<span style="background-color: rgb(251, 233, 231); color: rgb(139, 53, 56)"><strong>⚠️ 注意:</strong></span>

- 在  `{$version}` 中填写版本号，例如  `0.0.1`；
- 最新版可以在  <a href='https://www.npmjs.com/package/@antv/f6' target='_blank'>NPM</a>  查看最新版本及版本号；
- 详情参考 Github 分支：<a href='https://github.com/antvis/f6/tree/master' target='_blank'>https://github.com/antvis/f6/tree/master</a>。

### 3 在 Native 应用中使用

- 💗 敬请期待

## 快速试用

创建一个 F6 的关系图仅需要下面几个步骤：

1. 创建关系图的容器；
2. 数据准备；
3. 创建关系图；
4. 配置数据源，渲染。

### Step 1 创建容器

#### H5

需要在 HTML 中创建一个用于容纳 F6 绘制的图的容器，通常为 `div`  标签。F6 在绘制时会在该容器下追加 `canvas` 标签，然后将图绘制在其中。

```html
<div id="mountNode"></div>
```

#### 小程序

由于小程序的特殊性，我们需要在`Axml`或者`Wxml`中使用 F6 配套的组件

- 支付宝组件

`/pages/index/index.json`

```json
{
  "defaultTitle": "f6-demo",
  "usingComponents": {
    "f6-canvas": "@antv/f6-alipay/es/container/container"
  }
}
```

`/pages/index/index.axml`

```
<f6-canvas
  width="{{width}}"
  height="{{height}}"
  forceMini="{{false}}"
  pixelRatio="{{pixelRatio}}"
  onInit="onCanvasInit"
  onTouchEvent="onTouch"
/>
```

- 微信组件

`/pages/index/index.json`

```
{
  "usingComponents": {
    "f6-canvas": "@antv/f6-wx/canvas/canvas"
  }
}
```

`/pages/index/index.wxml`

```

  <f6-canvas
    width="{{canvasWidth}}"
    height="{{canvasHeight}}"
    pixelRatio="{{pixelRatio}}"
    onInit="{{onCanvasInit}}"
    onTouchEvent="{{onTouch}}" >
  </f6-canvas>

```

具体在微信中使用，请参考[微信中使用 F6](/zh/docs/manual/tutorial/mini/wechat)

#### Native

💗 敬请期待

### Step 2 数据准备

引入 F6 的数据源为 JSON 格式的对象。该对象中需要有节点（`nodes`）和边（`edges`）字段，分别用数组表示：

```javascript
const data = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2', // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
  ],
};
```

注意

- `nodes` 数组中包含节点对象。每个节点对象中唯一的、必要的 `id` 以标识不同的节点，`x`、 `y` 指定该节点的位置；
- `edges` 数组中包含边对象。`source` 和 `target` 是每条边的必要属性，分别代表了该边的起始点 `id` 与 目标点 `id`。
- 点和边的其他属性参见链接：[内置节点](/zh/docs/manual/middle/elements/nodes/defaultNode) 和 [内置边](/zh/docs/manual/middle/elements/edges/defaultEdge)。

### Step 3 创建关系图

创建关系图（实例化）时，至少需要为图设置容器、宽和高。

#### 小程序

```javascript
const graph = new F6.Graph({
  container: null, // 如果为小程序，则传null或者不传
  renderer: 'mini', // renderer 目前支持`mini`和`mini-native`两个值，可以通过onCanvasInit回调获取
  context: ctx, // 由于小程序中无法直接获取canvas的context，所以需要从外部传入
  width: 800, // Number，必须，图的宽度
  height: 500, // Number，必须，图的高度
});
```

⚠️ 注意：小程序依赖 f6 组件，所以无需创建容器

#### H5

```javascript
const graph = new F6.Graph({
  container: "container" // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身,如果为小程序，则传null或者不传
  width: 800, // Number，必须，图的宽度
  height: 500, // Number，必须，图的高度
});
```

### Step 4 配置数据源，渲染

```javascript
graph.data(data); // 读取 Step 2 中的数据源到图上
graph.render(); // 渲染图
```

### 最终的结果

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*srtDT5slbN8AAAAAAAAAAABkARQnAQ' width=400 alt='img' />

## 完整代码

⚠️ 注意：本示例通过支付宝小程序进行演示，如需在微信中使用，参考[微信中使用 F6](/zh/docs/manual/tutorial/mini/wechat)

<iframe src="https://herbox-embed.alipay.com/p/f6/simple?editorSlider=expand&previewZoom=100&defaultOpenedFiles=pages/index/index.js" width="100%" height=800/>

## 更多

本章仅仅介绍了如何安装以及最简单的场景，在 F6 Tutorial 中其他的章节中我们会教会你：

- 实例化图时的常见配置；
- 设置元素（节点/边）属性、样式；
- 设置布局；
- 增加交互；
- 增加动画；
- 使用辅助组件。

想了解更高阶的功能，请参见 [F6 核心概念](/zh/docs/manual/middle/graph)，[F6 扩展阅读](/zh/docs/manual/advanced/coordinate-system)。
