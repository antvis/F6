---
title: 基础事件 Event
order: 12
---

本章介绍的事件可以通过 [graph.on](/zh/docs/api/graphFunc/on_off#graphoneventname-handler) 与 [graph.off](/zh/docs/api/graphFunc/on_off#graphoffeventname-handler) 进行绑定/解绑监听函数。

通用事件、Node 事件、Edge 事件及 Canvas 事件回调的参数请参考 [Behavior API](/zh/docs/api/Behavior)。

## 交互事件

使用如下形式进行交互事件的监听：

```
graph.on(eventName, evt => {
  // 一些操作
})
```

其中，事件对象 `evt` 的属性值有：

- `type`: 事件类型
- `name`: 事件名称
- `x`: 画布上的 x 坐标
- `y`: 画布上的 y 坐标
- `clientX`: 浏览器窗口上的 x 坐标
- `clientY`: 浏览器窗口上的 y 坐标
- `canvasX`: 画布父容器视口上的 x 坐标
- `canvasY`: 画布父容器视口上的 y 坐标

（x/y，clientX/clientY，canvasX/canvasY 三套坐标系详解见 [F6 坐标系深度解析](/zh/docs/manual/advanced/coordinate-system)）

- `item`: 事件的触发元素（节点/边/ Combo）
- `target`: 事件的触发图形 [Shape](/zh/docs/manual/middle/elements/shape/shape-keyshape) 或画布对象
- `bubbles`: 是否允许冒泡
- `defaultPrevented`: 是否阻止了原生事件
- `originalEvent`: 原始浏览器事件对象
- `timeStamp`: 触发事件的时间
- `propagationStopped`: 是否阻止传播（向上冒泡）
- `propagationPath`: 触发事件的路径

`eventName` 见下方内容。

### 通用交互事件

| 事件名称 | 描述 |
| --- | --- |
| tap | 点击设备屏幕 |
| dbltap | 快速点击两次设备屏幕 |
| dragstart | 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上 |
| drag | 当拖拽元素在拖动过程中时触发的事件，此事件作用于被拖拽元素上 |
| dragend | 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 |
| dragenter | 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上 |
| dragleave | 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上 |
| drop | 被拖拽的元素在目标元素上同时放开触发的事件，此事件作用在目标元素上 |
| panstart | 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 |
| panmove | 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用 `preventDefault()` 事件可以阻止滚动。 |
| panend | 当手指从屏幕上离开的时候触发 |

### Node 交互事件

| 事件名称       | 描述                                                               |
| -------------- | ------------------------------------------------------------------ |
| node:tap       | 点击设备屏幕触发                                                   |
| node:dbltap    | 快速双击屏幕触发                                                   |
| node:dragstart | 当节点开始被拖拽的时候触发的事件，此事件作用在被拖曳节点上         |
| node:drag      | 当节点在拖动过程中时触发的事件，此事件作用于被拖拽节点上           |
| node:dragend   | 当拖拽完成后触发的事件，此事件作用在被拖曳节点上                   |
| node:dragenter | 当拖曳节点进入目标元素的时候触发的事件，此事件作用在目标元素上     |
| node:dragleave | 当拖曳节点离开目标元素的时候触发的事件，此事件作用在目标元素上     |
| node:dragover  | 当拖曳节点在另一目标元素上移动时触发此事件，此事件作用在目标元素上 |
| node:drop      | 被拖拽的节点在目标元素上同时放开触发的事件，此事件作用在目标元素上 |
| node:panstart  | 在触控屏上，当节点开始被触碰的时候触发的事件                       |
| node:panmove   | 在触控屏上，当节点开始被触碰过程中触发的事件                       |
| node:panend    | 在触控屏上，当节点开始被触碰结束的时候触发的事件                   |

### Edge 交互事件

| 事件名称       | 描述                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| edge:tap       | 点击设备屏幕触发                                                       |
| edge:dbltap    | 快速双击屏幕触发                                                       |
| edge:dragenter | 当拖曳元素进入目标边元素的时候触发的事件，此事件作用在目标边元素上     |
| edge:dragleave | 当拖曳元素离开目标边元素的时候触发的事件，此事件作用在目标边元素上     |
| edge:dragover  | 当拖曳元素在另一目标边上移动时触发此事件，此事件作用在目标边元素上     |
| edge:drop      | 被拖拽的元素在目标边元素上同时放开触发的事件，此事件作用在目标边元素上 |

### Combo 交互事件

Combo 继承所有 Node 事件。

### Canvas 交互事件

| 事件名称         | 描述                                                               |
| ---------------- | ------------------------------------------------------------------ |
| canvas:tap       | 点击画布时触发                                                     |
| canvas:dbltap    | 双击画布时触发                                                     |
| canvas:dragstart | 当画布开始被拖拽的时候触发的事件，此事件作用在被拖曳画布上         |
| canvas:drag      | 当画布在拖动过程中时触发的事件，此事件作用于被拖拽画布上           |
| canvas:dragend   | 当拖拽完成后触发的事件，此事件作用在被拖曳画布上                   |
| canvas:dragenter | 当拖曳画布进入目标元素的时候触发的事件，此事件作用在目标画布上     |
| canvas:dragleave | 当拖曳画布离开目标元素的时候触发的事件，此事件作用在目标画布上     |
| canvas:drop      | 被拖拽的元素在空白画布上同时放开触发的事件，此事件作用在目标画布上 |
| canvas:panstart  | 在触控屏上，当画布开始被触碰的时候触发的事件                       |
| canvas:panmove   | 在触控屏上，当画布开始被触碰过程中触发的事件                       |
| canvas:panend    | 在触控屏上，当画布开始被触碰结束的时候触发的事件                   |

## 时机事件

用于监听图的某方法调用前后的时机。使用如下形式进行交互事件的监听：

```
graph.on(timingEventName, evt => {
  // 一些操作
})
```

`timingEventName` 见下方内容。

| 事件名称 | 描述 |
| --- | --- |
| beforerender | 调用 `graph.render` / `graph.read` 方法之前触发 |
| afterrender | 调用 `graph.render` / `graph.read` 方法之后触发 |
| beforeadditem | 调用 `graph.add` / `graph.addItem` 方法之前触发 |
| afteradditem | 调用 `graph.add` / `graph.addItem` 方法之后触发 |
| beforeremoveitem | 调用 `graph.remove` / `graph.removeItem` 方法之前触发 |
| afterremoveitem | 调用 `graph.remove` / `graph.removeItem` 方法之后触发 |
| beforeupdateitem | 调用 `graph.update` / `graph.updateItem` 方法之前触发 |
| afterupdateitem | 调用 `graph.update` / `graph.updateItem` 方法之后触发 |
| beforeitemvisibilitychange | 调用 `graph.showItem` / `graph.hideItem` 方法之前触发 |
| afteritemvisibilitychange | 调用 `graph.showItem` / `graph.hideItem` 方法之后触发 |
| beforeitemstatechange | 调用 `graph.setItemState` 方法之前触发 |
| afteritemstatechange | 调用 `graph.setItemState` 方法之后触发 |
| beforeitemrefresh | 调用 `graph.refreshItem` 方法之前触发 |
| afteritemrefresh | 调用 `graph.refreshItem` 方法之后触发 |
| beforeitemstatesclear | 调用 `graph.clearItemStates` 方法之前触发 |
| afteritemstatesclear | 调用 `graph.clearItemStates` 方法之后触发 |
| beforemodechange | 调用 `graph.setMode` / `graph.addBehaviors` / `graph.removeBehaviors` 方法之前触发 |
| aftermodechange | 调用 `graph.setMode` / `graph.addBehaviors` / `graph.removeBehaviors` 方法之后触发 |
| beforelayout | 布局前触发。调用 `graph.render` 时会进行布局，因此 `render` 时会触发。或用户主动调用图的 `graph.layout` 时触发。 |
| afterlayout | 布局完成后触发。调用 `graph.render` 时会进行布局，因此 `render` 时布局完成后会触发。或用户主动调用图的 `graph.layout` 时布局完成后触发。 |
| beforegraphrefreshposition | `graph.refreshPositions` 被调用前触发 |
| aftergraphrefreshposition | `graph.refreshPositions` 被调用后触发 |
| beforegraphrefresh | `graph.refresh` 被调用前触发 |
| aftergraphrefresh | `graph.refresh` 被调用后触发 |
| beforeanimate | 全局动画发生前触发 |
| afteranimate | 全局动画发生后触发 |
| beforecreateedge | 使用内置交互 `create-edge`，创建边之前触发 |
| aftercreateedge | 使用内置交互 `create-edge`，创建边之后触发 |
| beforecollapseexpandcombo | 当一个 combo 被收起或展开之前被触发，参数 `action` 指明了是收起还是展开 |
| aftercollapseexpandcombo | 当一个 combo 被收起或展开之后被触发，参数 `action` 指明了是收起还是展开 |
| graphstatechange | 调用 `graph.updateItemState` 方法之后触发 |
| afteractivaterelations | 使用了 `'activate-relations'` Behavior 并触发了该行为后，该事件被触发 |
| nodeselectchange | 使用了 `'brush-select'` , `'click-select'` 或 `'lasso-select'` Behavior 且选中元素发生变化时，该事件被触发 |
| itemcollapsed | 在 TreeGraph 上使用了 `'collapse-expand'` Behavior 并触发了该行为后，该事件被触发 |
| tooltipchange | 使用了 `'tooltip'` 或 `'edge-tooltip'` Behavior 且 tooltip 的显示/隐藏被改变后，该事件被触发 |
| wheelzoom | 使用了 `'zoom-canvas'` Behavior 并用滚轮对图进行缩放后，该事件被触发 |
| viewportchange | 调用 `graph.moveTo`，`graph.translate`，或 `graph.zoom` 均会触发该事件 |
| dragnodeend | 使用了 `'drag-node'` Behavior，当拖动结束时，该事件被触发 |
| stackchange | 撤销/重做栈发生变化时，该事件触发 |

**插件中的时机事件**

TimeBar 插件：

| 事件名称         | 描述                           |
| ---------------- | ------------------------------ |
| valuechange      | 时间轴的时间范围发生变化时触发 |
| timebarstartplay | 时间轴开始播放时触发           |
| timebarendplay   | 时间轴播放结束时触发           |

Tooltip 插件：

| 事件名称      | 描述                   |
| ------------- | ---------------------- |
| tooltipchange | Tooltip 发生变化时触发 |

### 回调参数

不同时机监听事件的回调参数不同，下面针对各个自定义事件的回调参数进行说明。

#### beforerender / afterrender

无参数

#### beforeadditem

| 名称  | 类型   | 描述           |
| ----- | ------ | -------------- |
| type  | String | 当前添加的类型 |
| model | Object | item 数据模型  |

#### afteradditem

| 名称  | 类型   | 描述                 |
| ----- | ------ | -------------------- |
| item  | Item   | 已经添加的 item 实例 |
| model | Object | item 数据模型        |

#### beforeremoveitem / afterremoveitem

| 名称 | 类型 | 描述               |
| ---- | ---- | ------------------ |
| item | Item | 要删除的 item 实例 |

#### beforeupdateitem / afterupdateitem

| 名称  | 类型   | 描述               |
| ----- | ------ | ------------------ |
| item  | Item   | 要更新的 item 实例 |
| model | Object | item 数据模型      |

#### beforeitemvisibilitychange / afteritemvisibilitychange

| 名称    | 类型    | 描述                                      |
| ------- | ------- | ----------------------------------------- |
| item    | Item    | 当前操作的 item 实例                      |
| visible | Boolean | 是否可见，`true` 为可见，`false` 为不可见 |

#### beforeitemstatechange / afteritemstatechange

| 名称    | 类型    | 描述                                      |
| ------- | ------- | ----------------------------------------- |
| item    | Item    | 当前操作的 item 实例                      |
| state   | String  | 状态                                      |
| enalbed | Boolean | 状态是否可用，`true` 可用，`false` 不可用 |

#### beforeitemstatesclear / afteritemstatesclear

| 名称   | 类型           | 描述                 |
| ------ | -------------- | -------------------- |
| item   | Item           | 当前操作的 item 实例 |
| states | Array / String | 需要批量清除的状态   |

#### beforemodechange / aftermodechange

| 名称 | 类型   | 描述           |
| ---- | ------ | -------------- |
| mode | String | 当前的模式名称 |

#### beforeitemrefresh / afteritemrefresh

| 名称 | 类型 | 描述                 |
| ---- | ---- | -------------------- |
| item | Item | 当前操作的 item 实例 |

#### beforelayout / afterlayout

无参数

#### graphstatechange

| 名称   | 类型   | 描述                                                                         |
| ------ | ------ | ---------------------------------------------------------------------------- |
| states | Object | 当前各个状态下的元素，格式举例 `{ hover: [Node, Node], selected: [ Node ] }` |

#### afteractivaterelations

| 名称   | 类型   | 描述                 |
| ------ | ------ | -------------------- |
| item   | Item   | 当前操作的 item 实例 |
| action | String | 当前操作名           |

#### nodeselectchange

| 名称          | 类型   | 描述                                                             |
| ------------- | ------ | ---------------------------------------------------------------- |
| target        | Item   | 当前操作的 item 实例                                             |
| selectedItems | Object | 当前被选中的所有 item 实例，形如 `{ nodes: [...], edges: [...]}` |

#### beforecreateedge / aftercreateedge

`beforecreateedge` 无参数。`aftercreateedge` 参数如下：

| 名称 | 类型 | 描述               |
| ---- | ---- | ------------------ |
| edge | Item | 当前被创建的边实例 |

#### beforecollapseexpandcombo / aftercollapseexpandcombo

| 名称   | 类型   | 描述                                    |
| ------ | ------ | --------------------------------------- |
| action | string | 具体的操作， `'collapse'` 或 `'expand'` |
| combo  | Item   | 被操作的 combo item                     |

#### itemcollapsed

| 名称      | 类型    | 描述                                  |
| --------- | ------- | ------------------------------------- |
| item      | Item    | 当前操作的 item 实例                  |
| collapsed | Boolean | 当前操作后，操作对象的 collapsed 状态 |

#### tooltipchange

| 名称   | 类型   | 描述                                          |
| ------ | ------ | --------------------------------------------- |
| item   | Item   | 当前操作的 item 实例                          |
| action | String | tooltip 当前是显示 `'show'` 还是隐藏 `'hide'` |

#### wheelzoom

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| deltaX | Number | 滚动的 x 方向，取值 `1`，`0`，`-1`，`0` 代表没有该方向的滚动 |
| deltaY | Number | 滚动的 y 方向，取值 `1`，`0`，`-1`，`0` 代表没有该方向的滚动 |
| ... 其他滚轮事件的回调参数 |  |  |

#### viewportchange

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| action | 'translate' / 'move' / 'zoom' | 视窗变换的类型，`'translate'`、`'move'`、`'zoom'` 分别标识该时机是由 `graph.translate`、`graph.move`、还是 `graph.zoom` 函数的调用而产生 |
| matrix | Array | 视窗变换后的图的矩阵 |

#### dragnodeend

| 名称       | 类型            | 描述                                                    |
| ---------- | --------------- | ------------------------------------------------------- |
| items      | Item[]          | 当前操作的 item 实例                                    |
| targetItem | null/Node/Combo | 拖动节点结束后，节点是放到 canvas、Node 还是 Combo 上面 |

#### stackchange

| 名称      | 类型     | 描述     |
| --------- | -------- | -------- |
| redoStack | Object[] | 重做堆栈 |
| undoStack | Object[] | 撤销堆栈 |

#### valuechange

| 名称  | 类型     | 描述                                                         |
| ----- | -------- | ------------------------------------------------------------ |
| value | number[] | 时间轴当前时间范围，`value[0]` 为起始值，`value[1]` 为结束值 |

#### timelinestart / timelineend

无参数

#### tooltipchange

| 名称   | 类型            | 描述                             |
| ------ | --------------- | -------------------------------- |
| item   | Item            | tooltip 所关联的元素（节点/边）  |
| action | 'show' / 'hide' | tooltip 当前的变化时显示还是隐藏 |
