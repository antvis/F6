---
title: 两节点间存在多条边
order: 9
---

两节点间存在多条边时，可以使用 F6 内置的工具函数 `F6.Util.processParallelEdges(data.edges)` 处理。它将会自动检测边数据中两端点相同的边。若为自环边，则它们的 `type` 将会被设置为 `'loop'`，并且自动计算自环高度与位置以放置重叠；若不是自环边，则它们的 `type` 将会被设置为 `'quadratic'` 二次贝塞尔曲线,并自动计算控制点位置，以避免相互重叠。为达到更好的展示效果，建议在实例化图时，将 `linkCenter` 设置为 `true`。

<iframe src="https://herbox-embed.alipay.com/p/f6/demo_elements_multiedges?editorSlider=expand&previewZoom=100" width="100%" height=800/>
