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
➜  miniprogram-3 git:(master) ✗ npm i @antv/f6 @antv/f6-wx -S

added 78 packages, and audited 79 packages in 14s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

执行完安装命令后，我们可以看到以下结构

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*corORLwy6egAAAAAAAAAAAAAARQnAQ)

⚠️：由于微信对 npm 支持不那么友好，所以删除没用的包，否则构建速度会比较慢

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*9xylQJW57vQAAAAAAAAAAAAAARQnAQ)

安装完成依赖后，在微信开发者工具中需要进行一次转换，具体操作步骤如下

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*BsWpT7RSAb4AAAAAAAAAAAAAARQnAQ)

看到这个弹窗，基本上已经成功一大半了

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*PTF_T4c-SC0AAAAAAAAAAAAAARQnAQ)

展开 `miniprogram_npm` 这个目录，可以看到类似这样的目录结构

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*E4GWR5mrcOIAAAAAAAAAAAAAARQnAQ)

剩下的就是进行编码了对原有的 `pages/index/index.json`做一些简单改造

```
{
  "usingComponents": {
    "F6": "@antv/f6-wx/container/container"
  }
}
```

`pages/index/index.wxml`

```
<view>
  <view>width: {{canvasWidth}}</view>
  <view>height: {{canvasHeight}}</view>
  <view>pixelRatio: {{pixelRatio}}</view>
  <F6 width="{{canvasWidth}}" height="{{canvasHeight}}" pixelRatio="{{pixelRatio}}" onInit="{{onCanvasInit}}" onTouchEvent="{{onTouch}}" ></F6>
</view>
```

`pages/index/index.js`

```
const F6 = require('@antv/f6/f6');
const force = require('@antv/f6/extends/layout/forceLayout');

F6.registerLayout('force', force);

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

function refreshDragedNodePosition(e) {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}

Page({
  data: {
    canvasWidth: 100,
    canvasHeight: 100,
    pixelRatio: 1,
    onCanvasInit(ctx, rect, canvas, renderer) {
      console.log(ctx, rect, canvas, renderer, this);
      this.graph = new F6.Graph({
        context: ctx,
        renderer,
        width: rect.width,
        height: rect.height,
        defaultNode: {
          color: '#5B8FF9',
        },
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: (d) => {
            if (d.source.id === 'node0') {
              return 100;
            }
            return 30;
          },
          nodeStrength: (d) => {
            if (d.isLeaf) {
              return -50;
            }
            return -10;
          },
          edgeStrength: (d) => {
            if (
              d.source.id === 'node1' ||
              d.source.id === 'node2' ||
              d.source.id === 'node3'
            ) {
              return 0.7;
            }
            return 0.1;
          },
        },
      });
      this.graph.data(data);
      this.graph.render();

      this.graph.on('node:dragstart', (e) => {
        this.graph.layout();
        refreshDragedNodePosition(e);
      });

      this.graph.on('node:drag', (e) => {
        refreshDragedNodePosition(e);
      });

      this.graph.on('node:dragend', (e) => {
        e.item.get('model').fx = null;
        e.item.get('model').fy = null;
      });
    },
    onTouch(e) {
      console.log('canvas ontouch', e);
      this.graph.emitEvent(e);
    },
  },
  onLoad() {
    const { windowWidth, windowHeight, pixelRatio } = wx.getSystemInfoSync();
    this.setData({
      canvasWidth: windowWidth,
      canvasHeight: windowHeight,
      pixelRatio,
    });
  },
});


```

接下来保存看看效果吧 ![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*HY5-Rq33wMoAAAAAAAAAAAAAARQnAQ)

真机体验会更棒

![](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*gyGjSr9o1QQAAAAAAAAAAAAAARQnAQ)

完整示例源码可以参考这里[F6 微信小程序演示](https://github.com/openwayne/g6-component-wx-demo)

## 注意事项

如有问题，可以加钉钉群咨询，我们会快速相应您的问题 ![]()

<p>
    <img src='https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*wEQkTKK9GgMAAAAAAAAAAAAAARQnAQ' style='width:250px;display:inline-block;vertical-align:top;' alt='' />
</p>
