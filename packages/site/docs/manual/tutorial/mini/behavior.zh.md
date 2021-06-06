---
title: 图的交互 Behavior
order: 4
---

F6 封装了一系列交互方法，方便用户直接使用。本文将为 **Tutorial 案例** 增加简单的交互：hover 节点、点击节点、点击边、放缩画布、拖拽画布。本节目标效果如下：

<img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*ZNTWT6DRWBgAAAAAAAAAAAAAARQnAQ' width=500 alt='img' />

> 图 1 Tutorial 案例的交互效果。

## 基本概念

### 交互行为 Behavior

F6 中的交互行为。F6 **内置**了一系列交互行为，用户可以直接使用。简单地理解，就是可以一键开启这些交互行为：

- `drag-canvas`：拖拽画布；
- `zoom-canvas`：缩放画布。

更多详见：[交互行为 Behavior](/zh/docs/manual/middle/states/defaultBehavior)

### 交互管理 Mode

Mode 是 F6 交互行为的管理机制，一个 mode 是多种行为 Behavior 的组合，允许用户通过切换不同的模式进行交互行为的管理。由于该概念较为复杂，在本入门教程中，读者不需要对该机制深入理解。如有需求，参见 [交互模式 Mode](/zh/docs/manual/middle/states/mode)。

### 交互状态 State

[状态 State](/zh/docs/manual/middle/states/state) 是 F6 中的状态机制。用户可以为图中的元素（节点/边）设置不同的状态及不同状态下的样式。在状态发生变化时，F6 自动更新元素的样式。例如，可以为节点设置状态 `'tap'` 为 `true` 或 `false`，并为节点设置 `'tap'` 的样式为加粗节点边框。当 `'tap'` 状态被切换为 `true` 时，节点的边框将会被加粗，`'tap'` 状态被切换为 `false` 时，节点的样式恢复到默认。在下面的使用方法中，将会有具体例子。

## 使用方法

### 拖拽、缩放——内置的交互行为

在 F6 中使用内置 Behavior 的方式非常简单，只需要在图实例化时配置 `modes`。拖拽和缩放属于 F6 内置交互行为，修改代码如下：

```javascript
const graph = new F6.Graph({
  // ...                                          // 其他配置项
  modes: {
    default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
  },
});
```

除了直接使用内置交互名称外，也可以为 Behavior 配置参数，例如放缩画布的敏感度、最大/最小放缩程度等，具体用法参见  [交互行为 Behavior](/zh/docs/manual/middle/states/defaultBehavior)。

上面代码中的 `modes` 定义了 F6 的模式，`default` 是默认的模式，还可以允许有其他的模式，比如：编辑模式 `edit` 等。不同的模式，用户能进行的行为可以不同，比如默认模式能拖拽画布，编辑模式不允许拖拽画布：

```javascript
// 举例解释不同模式
modes: {
  default: ['drag-canvas'],
  edit: []
}
```

更多关于模式、行为可以参考: [交互模型 Mode](/zh/docs/manual/middle/states/mode) 和 [交互行为 Behavior](/zh/docs/manual/middle/states/defaultBehavior) 文档。

### Tap 改变样式——状态式交互

有时我们希望通过交互可以将元素样式变成特定样式，如我们看到的图 1 中，点击节点、点击边时，样式发生了变化。这里涉及到了 F6 中 [状态 State](/zh/docs/manual/middle/states/state) 的概念。简单地说，是否 `tap` 、任何操作（可以是自己起的状态名），都可以称为一种状态（state）。用户可以自由设置不同状态下的元素样式。要达到交互更改元素样式，需要两步：

- Step 1: 设置各状态下的元素样式；
- Step 2: 监听事件并切换元素状态。

#### 设置各状态下的元素样式

在实例化图时，通过 `nodeStateStyles` 和 `edgeStateStyles` 两个配置项可以配置元素在不同状态下的样式。<br />为达到 **Tutorial 案例** 中的效果：

- 点击节点时，该节点边框加粗变黑；
- 点击边时，该边变成蓝色。

下面代码设置了节点在 `tap` 状态为 `true` 时的样式，边在 `tap` 状态为 `true` 时的样式：

```javascript
const graph = new F6.Graph({
  // ...                           // 其他配置项
  // 节点不同状态下的样式集合
  nodeStateStyles: {
    // 点击节点，即 tap 状态为 true 时的样式
    tap: {
      stroke: '#000',
      lineWidth: 3,
    },
  },
  // 边不同状态下的样式集合
  edgeStateStyles: {
    // 点击边，即 tap 状态为 true 时的样式
    tap: {
      stroke: 'steelblue',
    },
  },
});
```

#### 监听事件并切换元素状态

F6 中所有元素监听都挂载在图实例上，如下代码中的 `graph` 对象是 F6.Graph 的实例，`graph.on()`  函数监听了某元素类型（`node` / `edge`）的某种事件（`tap` / ... 所有事件参见：[Event API](/zh/docs/api/Event)）。

```javascript
// 在图实例 graph 上监听
graph.on('元素类型:事件名', (e) => {
  // do something
});
```

现在，我们通过下面代码，为 **Tutorial 案例** 增加点和边上的监听事件，并在监听函数里使用 `graph.setItemState()` 改变元素的状态：

```javascript
// 点击节点
graph.on('node:tap', (e) => {
  // 先将所有当前是 tap 状态的节点置为非 tap 状态
  const tapNodes = graph.findAllByState('node', 'tap');
  tapNodes.forEach((cn) => {
    graph.setItemState(cn, 'tap', false);
  });
  const nodeItem = e.item; // 获取被点击的节点元素对象
  graph.setItemState(nodeItem, 'tap', true); // 设置当前节点的 tap 状态为 true
});

// 点击边
graph.on('edge-shape:tap', (e) => {
  // 先将所有当前是 tap 状态的边置为非 tap 状态
  const tapEdges = graph.findAllByState('edge', 'tap');
  tapEdges.forEach((ce) => {
    graph.setItemState(ce, 'tap', false);
  });
  const edgeItem = e.item; // 获取被点击的边元素对象
  graph.setItemState(edgeItem, 'tap', true); // 设置当前边的 tap 状态为 true
});
```

## 完整代码

<iframe src="https://herbox-embed.alipay.com/p/f6/tutorial-behavior?editorSlider=expand&previewZoom=100&defaultOpenedFiles=pages/index/index.js" width="100%" height=800/>
