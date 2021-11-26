---
title: 微信中使用F6
order: 7
---

## 前言

微信小程序承载了各种各样的商业模式，作为线上和线下连接的纽带，覆盖了生活中的方方面面。小程序中绘制关系图一直没有很好的解决方案，目前微信小程序中有很多应用关系图依旧使用 H5 的方式进行展示，用户体验大打折扣，作为针对移动端的图可视化引擎，F6 在微信小程序中也可以流畅使用。

## 流程

### 新建一个微信小程序

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*9YXpSqJ9jAkAAAAAAAAAAAAAARQnAQ)

### 初始化

```
npm init
```

⚠️：如果对微信小程序下 npm 包使用不了解，可以点击[这里](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

### 安装依赖

首先安装 F6 和 F6 微信小程序组件，使用小程序组件可以省去很多功夫

```
➜  miniprogram-3 git:(master) ✗ npm i @antv/f6-wx -S

added 78 packages, and audited 79 packages in 14s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

执行完安装命令后，我们可以看到以下结构

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*0tb7QrHWRn4AAAAAAAAAAAAAARQnAQ)

安装完成依赖后，在微信开发者工具中需要进行一次转换

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*rL7VRpSJD10AAAAAAAAAAAAAARQnAQ)

展开 `miniprogram_npm` 这个目录，可以看到类似这样的目录结构

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*Sip7RpVOvcIAAAAAAAAAAAAAARQnAQ)

剩下的就是进行编码了对原有的 `pages/index/index.json`做一些简单改造

```json
{
  "usingComponents": {
    "f6-canvas": "@antv/f6-wx/canvas/canvas"
  }
}
```

`pages/index/index.wxml`

```xml
<view>
  <view>width: {{canvasWidth}}</view>
  <view>height: {{canvasHeight}}</view>
  <view>pixelRatio: {{pixelRatio}}</view>
  <f6-canvas
    width="{{canvasWidth}}"
    height="{{canvasHeight}}"
    pixelRatio="{{pixelRatio}}"
    bind:onInit="handleCanvasInit"
    bind:onTouchEvent="handleTouch"
  />
</view>
```

`pages/index/index.js`

```javascript
import F6 from '@antv/f6-wx';
import force from '@antv/f6-wx/extends/layout/forceLayout';

/**
 * 基本力导向布局及节点拖拽
 */

Page({
  canvas: null,
  ctx: null,
  renderer: '', // mini、mini-native等，F6需要，标记环境
  graph: null,

  data: {
    width: 375,
    height: 600,
    pixelRatio: 1,
    forceMini: false,
  },

  onLoad() {
    F6.registerLayout('force', force);
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();

    this.setData({
      canvasWidth: windowWidth,
      canvasHeight: windowHeight,
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
  handleCanvasInit(event) {
    const { ctx, canvas, renderer } = event.detail;
    this.isCanvasInit = true;
    this.ctx = ctx;
    this.renderer = renderer;
    this.canvas = canvas;
    this.updateChart();
  },

  /**
   * canvas派发的事件，转派给graph实例
   */
  handleTouch(e) {
    this.graph && this.graph.emitEvent(e.detail);
  },

  updateChart() {
    const { canvasWidth, canvasHeight, pixelRatio } = this.data;
    const data = {
      nodes: [
        { id: 'node0', size: 50 },
        { id: 'node1', size: 30 },
        { id: 'node2', size: 30 },
        { id: 'node3', size: 30 },
        { id: 'node4', size: 30, isLeaf: true },
        { id: 'node5', size: 30, isLeaf: true },
        { id: 'node6', size: 15, isLeaf: true },
        { id: 'node7', size: 15, isLeaf: true },
        { id: 'node8', size: 15, isLeaf: true },
        { id: 'node9', size: 15, isLeaf: true },
        { id: 'node10', size: 15, isLeaf: true },
        { id: 'node11', size: 15, isLeaf: true },
        { id: 'node12', size: 15, isLeaf: true },
        { id: 'node13', size: 15, isLeaf: true },
        { id: 'node14', size: 15, isLeaf: true },
        { id: 'node15', size: 15, isLeaf: true },
        { id: 'node16', size: 15, isLeaf: true },
      ],
      edges: [
        { source: 'node0', target: 'node1', id: 'edge0' },
        { source: 'node0', target: 'node2', id: 'edge1' },
        { source: 'node0', target: 'node3', id: 'edge2' },
        { source: 'node0', target: 'node4', id: 'edge3' },
        { source: 'node0', target: 'node5', id: 'edge4' },
        { source: 'node1', target: 'node6', id: 'edge5' },
        { source: 'node1', target: 'node7', id: 'edge6' },
        { source: 'node2', target: 'node8', id: 'edge7' },
        { source: 'node2', target: 'node9', id: 'edge8' },
        { source: 'node2', target: 'node10', id: 'edge9' },
        { source: 'node2', target: 'node11', id: 'edge10' },
        { source: 'node2', target: 'node12', id: 'edge11' },
        { source: 'node2', target: 'node13', id: 'edge12' },
        { source: 'node3', target: 'node14', id: 'edge13' },
        { source: 'node3', target: 'node15', id: 'edge14' },
        { source: 'node3', target: 'node16', id: 'edge15' },
      ],
    };

    // 创建F6实例
    this.graph = new F6.Graph({
      container: this.canvas,
      context: this.ctx,
      renderer: this.renderer,
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio,
      modes: {
        default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
      },
      layout: {
        type: 'force',
      },
      defaultNode: {
        size: 15,
      },
    });

    // 注册数据
    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
```

接下来保存看看效果吧 <br/>

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*KPjqSIAo9J4AAAAAAAAAAAAAARQnAQ)

真机体验会更棒

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*gyGjSr9o1QQAAAAAAAAAAAAAARQnAQ)

完整示例源码可以参考这里[F6 微信小程序演示](https://github.com/antvis/F6/tree/master/packages/examples-wx/package-general-graph/pages/general-graph/basic-force-directed)

## 注意事项

如有问题，可以加钉钉群咨询，我们会快速相应您的问题 ![]()

<p>
    <img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*wEQkTKK9GgMAAAAAAAAAAAAAARQnAQ' style='width:250px;display:inline-block;vertical-align:top;' alt='' />
</p>
