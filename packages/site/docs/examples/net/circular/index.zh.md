---
title: Circular 环形布局
order: 4
---

Circular 环形布局根据参数指定的排序方式对节点进行排序后，将节点排列在圆环上。

## 使用指南

F6 内置的 Circular 环形布局可在实例化 Graph 时使用该布局。除此之外，还可以如[子图布局](/zh/docs/manual/middle/layout/sub-layout)所示单独使用布局。该布局可以通过配置调整半径、起始和结束角度、节点排序方式、节点分组、螺旋线布局等。

- 代码演示 1 ：基本的环形布局，节点根据在数据中的顺序逆时针排列。
- 代码演示 2 ：节点根据其度数从大到小逆时针排列。
- 代码演示 3 ：螺旋线布局。
- 代码演示 4 ：分组圆环布局。
- 代码演示 5 ：圆环布局参数动态变化。

## 基本 Circular 布局

<iframe src="https://herbox-embed.alipay.com/p/f6/demo_generalgraph_basiccircular?editorSlider=expand&previewZoom=100" width="100%" height=800/>
