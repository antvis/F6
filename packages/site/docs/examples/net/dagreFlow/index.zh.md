---
title: Dagre 流程图布局
order: 1
---

Dagre 是适合有向流程图的布局算法。其根据图数据中边的方向，自动计算节点的层级及位置。

## 使用指南

F6 内置的 Dagre 布局可以实现有向图的自动分层布局。如下面代码所示，可在实例化 Graph 时使用该布局。除此之外，还可以如[子图布局](/zh/docs/manual/middle/layout/sub-layout)所示单独使用布局。该布局可以通过配置调整布局方向、节点对齐方式、节点间距、层高等。

- 代码演示 1 ：简单的 Dagre 布局。
- 代码演示 2 ：带有 Combo 的 Dagre 布局（目前只能处理好同层节点的 Combo 问题）。
- 代码演示 3 ：自左向右向上对齐的 Dagre 布局。
- 代码演示 4 ：自左向右的 Dagre 布局。
- 代码演示 5 ：Dagre 布局参数动态变化。

## Dagre 流程图

<iframe src="https://herbox-embed.alipay.com/p/f6/demo_generalgraph_basicdagre?editorSlider=expand&previewZoom=100" width="100%" height=800/>
