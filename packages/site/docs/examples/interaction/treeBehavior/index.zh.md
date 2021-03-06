---
title: 自定义树图交互
order: 1
---

## 拖拽子树改变结构。

通过拖拽子树的根节点，靠近新的父节点后放下，可将该子树从原来位置删除，追加到新父节点下，从而改变树的结构。若新父节点是被拖拽子树中的一个节点，则拖拽改变结构将不会生效。

## 动态加载树图数据

共演示了两种动态添加数据的方式：

- 使用 `graph.changeData`；
- 使用 `graph.addChild`。

## 合并同类兄弟节点

展示合并同类兄弟节点的交互。

## 使用 changeData

<iframe src="https://herbox-embed.alipay.com/p/f6/demo_interactive_changedata?editorSlider=expand&previewZoom=100" width="100%" height=800/>

## 使用 addChild

<iframe src="https://herbox-embed.alipay.com/p/f6/demo_interactive_addchild?editorSlider=expand&previewZoom=100" width="100%" height=800/>
