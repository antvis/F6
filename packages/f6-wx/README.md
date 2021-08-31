# f6 for wx

微信小程序中快速使用 F6 的小工具，帮助用户封装了一些基础的操作，用户也可以参考这里的封装自行处理

## 基础参数

| 属性名 | 默认值 | 类型 | 是否必传 | 描述 |
| --- | --- | --- | --- | --- |
| width | 100 | Number | 否 | canvas 的宽度，这个值是页面中组件的宽度 |
| height | 100 | Number | 否 | canvas 的高度，这个值是页面中组件的高度 |
| pixelRatio | 1 | Number | 否 | 设备像素比，这个字段很关键！！！不传递绘制的图非高清！！！字段来自 getSystemInfo/getSystemInfoSync |
| onInit | 空 | Function | 否 | canvas 初始化完成后返回，会携带相关的信息回来，具体看下方表格 |
| onTouchEvent | 空 | Function | 否 | 所有的 touch 事件都来源这里，如果需要 f6 处理事件，都需自行传递，未统一处理的原因为，业务方可能需自行定制 |
| onError | 空 | Function | 否 | canvas 创建失败的回调 |
| style | 空 | String | 否 | 就是简单的 css 样式 |

## onInit 函数的回调

| 参数 | 描述 |
| --- | --- |
| context | canvas 的 context，由组件创建 |
| rect | 组件当前所在的位置 |
| canvas | native canvas 返回的 element |
| renderer | 渲染模式，在小程序下，f6 由两种模式， `mini` 和 `mini-native` 分别对应 web-canvas 和 native-canvas |

## 推荐组件

目前存在 2 个组件，一个是 container，另一个是 canvas，container 写法限制性较多，建议使用 canvas，两个组件差别不大，只是事件回传的操作些许区别。

- canvas(推荐)

canvas 使用 bind:来触发事件，会更容易和原有代码结合

```
<f6-canvas
  width="{{width}}"
  height="{{height}}"
  forceMini="{{forceMini}}"
  pixelRatio="{{pixelRatio}}"
  bind:onTouchEvent="handleTouch"
  bind:onInit="handleInit"
></f6-canvas>
```

js 中处理事件

```
Page({
  data: {
  },
  handleInit(ctx, rect, canvas, renderer) {
  },
  handleTouch(e) {
  },
})

```

- container

```
<f6-canvas
  width="{{width}}"
  height="{{height}}"
  forceMini="{{forceMini}}"
  pixelRatio="{{pixelRatio}}"
  onTouchEvent="{{handleTouch}}"
  onInit="{{handleInit}}"
></f6-canvas>
```

js 中处理事件, 如果使用 container，只能在 data 中处理逻辑

```
Page({
  data: {
    ...
    handleInit(ctx, rect, canvas, renderer) {
    },
    handleTouch(e) {
    },
  },
})

```

# demo

https://github.com/openwayne/g6-component-wx-demo
