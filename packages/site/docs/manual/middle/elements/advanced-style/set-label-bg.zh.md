---
title: 设置节点或边的背景
order: 0
---

用户可以直接通过以下配置为节点或边设置背景。

**特别说明：** 该功能是由 GitHub 用户 @zhanba 贡献 [feat: add label background](https://github.com/antvis/F6/pull/1354) 。

```
const graph = new F6.Graph({
  // ...
  defaultNode: {
    position: 'left',
    style: {
      background: {
        fill: '#ffffff',
        stroke: 'green',
        padding: [3, 2, 3, 2],
        radius: 2,
        lineWidth: 3,
      },
    },
  },
  defaultEdge: {
    autoRotate: true,
    style: {
      background: {
        fill: '#ffffff',
        stroke: '#000000',
        padding: [2, 2, 2, 2],
        radius: 2,
      },
    },
  }
})
```
