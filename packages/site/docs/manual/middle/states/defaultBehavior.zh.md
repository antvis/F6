---
title: 内置的 Behavior
order: 1
---

## 什么是 Behavior

Behavior 是 F6 提供的定义图上交互事件的机制。它与[交互模式 Mode](/zh/docs/manual/middle/states/mode) 搭配使用，如何将下文所述各种 Behavior 配置到图上，见 [交互模式](/zh/docs/manual/middle/states/mode)。

## 内置 Behavior

理论上， F6 上的所有基础图形、Item（节点/边）都能通过事件来进行操作。考虑到通用性，F6 目前共提供了以下 9 个内置的 Behavior。此外，用户可以注册 [自定义 Behavior](/zh/docs/manual/middle/states/custom-behavior)。

### drag-combo

- 含义：拖动 Combo；
- 配置项：
  - `type: 'drag-combo'`；
  - `enableDelegate`：拖动 Combo 时候是否开启图形代理 delegate，即拖动 Combo 时候 Combo 不会实时跟随变动，拖动过程中有临时生成一个 delegate 图形，拖动结束后才更新 Combo 位置，默认为 false，不开启；
  - `delegateStyle`：delegate 的样式；
  - `onlyChangeComboSize`：拖动嵌套的 Combo 时，只改变父 Combo 的大小，不改变层级关系，默认为 false；
  - `activeState`：当拖动 Combo 时，父 Combo 或进入到的 Combo 的状态值，需要用户在实例化 Graph 时在 `comboStateStyles` 里面配置，默认为空；
  - `selectedState`：选中 Combo 的状态，默认为 selected，需要在 `comboStateStyles` 里面配置；
  - `shouldUpdate(e)`：是否允许当前被操作的 combo 被拖拽，参见下面示例。

**使用默认配置**

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['drag-combo'],
  },
});
```

用户可根据实际需求，为 `activeState` 或 `selectedState` 配置样式：

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'drag-combo',
        enableDelegate: true,
        activeState: 'actived',
        shouldUpdate: (e) => {
          // 不允许 id 为 'combo1' 的 combo 被拖拽
          if (e.item && e.item.getModel().id === 'combo1') return false;
          return true;
        },
      },
    ],
  },
  comboStateStyles: {
    actived: {
      stroke: 'red',
      lineWidth: 3,
    },
  },
});
```

### collapse-expand-combo

- 含义：收起和展开 Combo。若图配置有布局，则该 behavior 被触发后会触发图的重新布局。若希望避免重新布局，可以通过监听 combo 点击事件和 [graph.collapseExpandCombo API](/zh/docs/api/Graph#collapseexpandcombocombo) 控制收缩展开逻辑；
- 配置项：
  - `type: 'collapse-expand-combo'`；
  - `trigger`：触发方式，默认为双击收起或展示，可配置 `'click'` 和 `'dblclick'`；
  - `relayout`：收缩或展开后是否触发重新布局，默认为 `true`。

**使用默认配置**

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['collapse-expand-combo'],
  },
});
```

用户可以配置成单击展示或收起：

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'collapse-expand-combo',
        trigger: 'click',
        relayout: false, // 收缩展开后，不重新布局
      },
    ],
  },
});
```

### drag-canvas

- 含义：拖拽画布；
- 配置项：

  - `type: 'drag-canvas'`；
  - `direction`：允许拖拽方向，支持`'x'`，`'y'`，`'both'`，默认方向为 `'both'`；
  - `enableOptimize`：是否开启优化，开启后拖动画布过程中隐藏所有的边及节点上非 keyShape 部分，默认关闭；
  - `shouldBegin(e)`：是否允许触发该操作；
  - `allowDragOnItem`：是否允许用户在节点/边/ combo 上拖拽时响应，默认为 false；
  - `scalableRange`：拖动 canvas 可扩展的范围，默认为 0，值为 -1 ～ 1 代表可超出视口的范围的比例值（相对于视口大小）。值小于 -1 或大于 1 时，为正和负数时的效果如下图所示。

  <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IFfoS67_HssAAAAAAAAAAAAAARQnAQ' width='650' />

- 相关时机事件：
  - `canvas:dragstart`：画布拖拽开始时触发，使用 `graph.on('canvas:dragstart', e => {...})` 监听；
  - `canvas:drag`：画布拖拽中触发，使用 `graph.on('canvas:drag', e => {...})` 监听；
  - `canvas:dragend`：画布拖拽结束后触发，使用 `graph.on('canvas:drag', e => {...})` 监听。

**使用默认配置**

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['drag-canvas'],
  },
});
```

默认配置下，可以在 x 和 y 两个方向上拖动画布。

**使用自定义参数**

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'drag-canvas',
        direction: 'x',
      },
    ],
  },
});
```

此时只能在 x 方向上面拖动，y 方向上不允许拖动。<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*54yxRrW1A7sAAAAAAAAAAABkARQnAQ' width=400 alt='img'/>

### zoom-canvas

- 含义：缩放画布；
- `type: 'zoom-canvas'`；
- 配置项：
  - `sensitivity`：缩放灵敏度，支持 1-10 的数值，默认灵敏度为 5；
  - `minZoom`：最小缩放比例；
  - `maxZoom`：最大缩放比例；
  - `enableOptimize`：是否开启性能优化，默认为 false，设置为 true 开启，开启后缩放比例小于 optimizeZoom 时自动隐藏非 keyShape；
  - `optimizeZoom`：当 enableOptimize 为 true 时起作用，默认值为 0.7，表示当缩放到哪个比例时开始隐藏非 keyShape；
  - `shouldUpdate(e)`：是否允许发生缩放；
  - `fixSelectedItems`：在缩小画布时是否固定选定元素的描边粗细、文本大小、整体大小等，`fixSelectedItems` 是一个对象，有以下变量：
    - `fixSelectedItems.fixState`：将被固定的元素状态，被设置为该状态的节点将会在画布缩小时参与固定大小的计算，默认为 `'selected'`；
    - `fixSelectedItems.fixAll`：固定元素的整体大小，优先级高于 `fixSelectedItems.fixLineWidth` 和 `fixSelectedItems.fixLabel`；
    - `fixSelectedItems.fixLineWidth`：固定元素的 keyShape 的描边粗细；
    - `fixSelectedItems.fixLabel`：固定元素的文本大小。
- 相关时机事件：
  - `wheelzoom(e)`：当缩放发生变化时被触发。使用 `graph.on('wheelzoom', e => {...})` 监听该时机事件。

**提示：若要限定缩放尺寸，请在 graph 上设置  `minZoom`  和  `maxZoom`。**

### drag-node

- 含义：拖拽节点，或拖动 Combo 中的节点；
- 配置项：
  - `type: 'drag-node'`；
  - `delegateStyle`：节点拖拽时的绘图属性，默认为 `{ strokeOpacity: 0.6, fillOpacity: 0.6 }`；
  - `updateEdge`：是否在拖拽节点时更新所有与之相连的边，默认为 `true` 。
  - `enableDelegate`：拖动节点过程中是否启用 `delegate`，即在拖动过程中是否使用方框代替元素的直接移动，效果区别见下面两个动图。默认值为  `false`；
  - `onlyChangeComboSize`：V3.5 及以上版本支持，拖动节点过程中只改变 Combo 大小，不改变 Combo 结构，即不将节点从 Combo 中拖出或将节点拖入到 Combo 中，默认为 false；
  - `enableDebounce`：是否在拖动节点时使用 debounce 来避免频繁的更新计算。这个 boolean 类型的配置项可以为折线边的更新提高性能，减少折线边的频繁重新寻径。默认值为 `false`；
  - `enableOptimize`：是否在拖拽节点时隐藏相关边，拖拽结束后再显示。这个 boolean 类型的配置项可以完全避免拖拽过程中相关折线边的重新寻径，默认值为 `false`；
  - `comboActiveState`：V3.5 及以上版本支持，拖动节点过程中，如果存在 Combo，节点所在 Combo 或节点进入的 Combo 的状态，需要在实例化 Graph 时候通过 `comboStateStyles` 进行配置，默认为空；
  - `selectedState`：V3.5 及以上版本支持，选中 Combo 的样式，需要在实例化 Graph 时候通过 `comboStateStyles` 进行配置,默认为 selected；
  - `shouldBegin(e)`：是否允许当前被操作的节点被拖动；
  - `shouldUpdate(e)`：是否允许当前被操作的节点在拖动过程中更新自身/ delegate 位置；
  - `shouldEnd(e)`：是否允许当前被操作的节点在拖拽结束时更新位置。

**使用默认配置**

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['drag-node'],
  },
});
```

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*hre9Qa7yCfQAAAAAAAAAAABkARQnAQ' width=400 alt='img'/>

**启用** `delegate`

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'drag-node',
        enableDelegate: true,
        shouldBegin: (e) => {
          // 不允许拖拽 id 为 'node1' 的节点
          if (e.item && e.item.getModel().id === 'node1') return false;
        },
      },
    ],
  },
});
```

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*BN83QJQpU40AAAAAAAAAAABkARQnAQ' width=400 alt='img'/>

### click-select

- 含义：点击选中节点，再次点击节点或点击 Canvas 取消选中状态；
- 配置项：
  - `type: 'click-select'`；
  - `multiple`：是否允许多选，默认为 `true`，当设置为 `false`，表示不允许多选；
  - `shouldBegin(e)`：是否允许该 behavior 发生，参考下面示例；
  - `shouldUpdate(e)`：是否允许对该 behavior 发生状态响应，参考下面示例。
- 相关时机事件：
  - `'nodeselectchange'`：当选中的元素集合发生变化时将会触发该时机事件。使用 `graph.on('nodeselectchange', e => {...})` 监听。其参数 `e` 有以下字段：
    - `e.target`：当前操作的 item；
    - `e.selectedItems`：当前操作后，所有被选中的 items 集合；
    - `e.select`：当前操作是选中(true)还是取消选中(false)。

**使用默认配置**

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['click-select'],
  },
});

// 当 click-select 选中的元素集合发生变化时将会触发下面时机事件，e 中包含相关信息
graph.on('nodeselectchange', (e) => {
  // 当前操作的 item
  console.log(e.target);
  // 当前操作后，所有被选中的 items 集合
  console.log(e.selectedItems);
  // 当前操作时选中(true)还是取消选中(false)
  console.log(e.select);
});
```

当允许多选时，点击节点可多选。<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mOiIQqBof8sAAAAAAAAAAABkARQnAQ' width=400/>

**使用自定义参数**

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'click-select',
        // 是否允许该 behavior 发生。若返回 false，被操作的 item 不会被选中，也不会触发 'nodeselectchange' 时机事件
        shouldBegin: (e) => {
          // 当点击的图形名为 'text-shape' 时，不允许该 behavior 发生
          if (e.target.get('name') === 'text-shape') return false;
          // 当点击的节点/边/ combo 的 id 为 'id1' 时，不允许该 behavior 发生
          if (e.item.getModel().id === 'id1') return false;
          return true;
        },
        // 是否允许对该 behavior 发生状态响应。若返回 false，被操作的对象的状态及相关状态样式不会被更新，但是仍然会触发 'nodeselectchange' 时机事件
        shouldUpdate: (e) => {
          // 当点击的节点/边/ combo 的 id 为 'id2' 时，该 item 不会发生状态的改变
          if (e.item.getModel().id === 'id2') return false;
          return true;
        },
      },
    ],
  },
});

// 当 click-select 选中的元素集合发生变化时将会触发下面时机事件，evt 中包含相关信息
graph.on('nodeselectchange', (e) => {
  // 当前操作的 item
  console.log(e.target);
  // 当前操作后，所有被选中的 items 集合
  console.log(e.selectedItems);
  // 当前操作时选中(true)还是取消选中(false)
  console.log(e.select);
});
```

以上配置中，用户可按住 **Ctrl** 键进行多选，也可以配置 **Alt** 键。当配置了  `multiple` 参数为 `false`，则表示不允许多选，此时 `trigger` 参数无效。

### tooltip

- 含义：节点文本提示；
- 配置项：
  - `type: 'tooltip'`；
  - `formatText(model)`：格式化函数，可以返回文本或者 HTML；
  - `offset`：tooltip 距离的偏移量；
  - `shouldBegin(e)`：是否允许 toolip 出现；
  - `shouldUpdate(e)`：是否允许 toolip 内容更新。
- 相关时机事件：
  - `tooltipchange`：当 tooltip 发生变化时被触发。使用 `graph.on('tooltipchange', e => {...})` 监听。

```javascript
const graph = new F6.Graph({
  ...
  width: 500,
  height: 500,
  modes: {
    default: [
      {
        type: 'tooltip',
        formatText(model) {
          return model.xxx;
        },
        offset: 10,
      },
    ],
  },
});
```

**提示：由于 F6 没有内置任何 tooltip 的样式，用户需要自己定义样式，例如：**

```css
.g6-tooltip {
  padding: 10px 6px;
  color: #444;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #e2e2e2;
  border-radius: 4px;
}
```

### activate-relations

- 含义：当触碰某节点时，突出显示该节点以及与其直接关联的节点和连线；
- `type: 'activate-relations'`；
- 参数：
  - `activeState: 'active'`。活跃节点状态。当行为被触发，需要被突出显示的节点和边都会附带此状态，默认值为  `active`；可以与 graph 实例的  `nodeStyle`  和  `edgeStyle`  结合实现丰富的视觉效果。
  - `inactiveState: 'inactive'`。非活跃节点状态。不需要被突出显示的节点和边都会附带此状态。默认值为  `inactive`。可以与 graph 实例的  `nodeStyle`  和  `edgeStyle`  结合实现丰富的视觉效果；
  - `resetSelected`：高亮相连节点时是否重置已经选中的节点，默认为 `false`，即选中的节点状态不会被 `activate-relations` 覆盖；
  - `shouldUpdate(e)`：是否允许该 behavior 发生。
- 相关时机事件：
  - `'afteractivaterelations'`：当高亮发生改变时触发该时机事件。使用 `graph.on('afteractivaterelations', evt => {...})` 监听。其参数 `e` 有以下字段：
    - `e.item`：当前操作的节点 item；
    - `e.action`：当前操作是选中(`'activate'`)还是取消选中(`'deactivate'`)。

<br />**使用默认配置**<br />

```javascript
const graph = new F6.Graph({
  modes: {
    default: ['activate-relations'],
  },
});

graph.on('afteractivaterelations', (e) => {
  // 当前操作的节点 item
  console.log(e.item);
  // 当前操作是选中(`'activate'`)还是取消选中(`'deactivate'`)
  console.log(e.action);
});
```

默认情况下，选中的节点状态，在操作完以后仍然会保持选中状态。<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bG31RqbM4JMAAAAAAAAAAABkARQnAQ' width=400 alt='img'/>

**使用自定义参数**

```javascript
const graph = new F6.Graph({
  modes: {
    default: [
      {
        type: 'activate-relations',
        resetSelected: true,
      },
    ],
  },
});

graph.on('afteractivaterelations', (e) => {
  // 当前操作的节点 item
  console.log(e.item);
  // 当前操作是选中(`'activate'`)还是取消选中(`'deactivate'`)
  console.log(e.action);
});
```

配置 `resetSelected` 参数为 `true` 后，交互后会重置节点的选择状态。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VQDrT5Qpq_sAAAAAAAAAAABkARQnAQ' width=400 alt='img'/>

### collapse-expand

- 含义：只适用于树图，展开或收起子树；
- 注意：若希望在首次布局时有默认收起的子树，则可以在数据中设置子树根节点的属性 `collapsed` 为 `true`。若希望使用代码控制子树的展开/收起，同样可以在数据中设置子树根节点的 `collapsed` 属性，并调用 `treeGraph.layout()` 使之生效；
- 配置项：
  - `type: 'collapse-expand'`；
  - `trigger`：收起和展开树图的方式，支持 `'tap'` 和 `'dbltap'` 两种方式。默认为 `'tap'`，即单击；
  - `onChange`：收起或展开的回调函数。
  - `shouldBegin(e)`：是否允许该 behavior 在当前操作的 item 上发生。
- 相关时机事件：
  - `itemcollapsed`：当 collapse-expand 发生时被触发。使用 `graph.on('itemcollapsed', e => {...})` 监听，参数 `e` 有以下字段：
    - `e.item`：当前被操作的节点 item；
    - `e.collapsed`：当前操作是收起（`true`）还是展开（`false`）。

**用法**

```javascript
const graph = new F6.TreeGraph({
  modes: {
    default: [
      {
        type: 'collapse-expand',
        trigger: 'tap',
        onChange: (item, collapsed) => {
          const data = item.get('model').data;
          data.collapsed = collapsed;
          return true;
        },
        shouldBegin: (e) => {
          // 若当前操作的节点 id 为 'node1'，则不发生 collapse-expand
          if (e.item && e.item.getModel().id === 'node1') return false;
          return true;
        },
      },
      'drag-canvas',
      'zoom-canvas',
    ],
  },
});

graph.on('itemcollapsed', (e) => {
  // 当前被操作的节点 item
  console.log(e.item);
  // 当前操作是收起（`true`）还是展开（`false`）
  console.log(e.collapsed);
});
```
