### F6

## 使用方法

#### 使用 F6 绘图

```ts
import F6 from '@antv/f6';

Page({
  data: {
    canvasWidth: 400,
    canvasHeight: 610,
  },

  onLoad() {
    this.ctx = my.createCanvasContext('canvas');
    this.drawF6();
  },

  drawF6() {
    const { canvasWidth, canvasHeight } = this.data;
    const data = {
      nodes: [
        {
          id: 'node1',
          label: 'Circle1',
          x: 50,
          y: 50,
        },
        {
          id: 'node2',
          label: 'Circle2',
          x: 100,
          y: 100,
        },
      ],
      edges: [
        {
          source: 'node1',
          target: 'node2',
        },
      ],
    };

    const graph = new F6.Graph({
      container: null,
      context: this.ctx,
      renderer: 'mini',
      width: canvasWidth,
      height: canvasHeight,
      defaultNode: {
        shape: 'circle',
        size: [30],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3,
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 20,
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2',
        },
      },
    });

    graph.data(data);
    graph.render();
  },
});
```

#### TreeGraph with f6 extends package

```ts
import F6 from '@antv/f6';
import TreeGraph from '@antv/f6/dist/extends/graph/treeGraph';

F6.registerGraph('TreeGraph', TreeGraph);

Page({
  data: {
    canvasWidth: 400,
    canvasHeight: 610,
  },

  onLoad() {
    this.ctx = my.createCanvasContext('canvas');
    this.drawF6();
  },

  drawF6() {
    const { canvasWidth, canvasHeight } = this.data;

    const data = {
      id: 'Modeling Methods',
      children: [
        {
          id: 'Classification',
          children: [
            { id: 'Logistic regression' },
            { id: 'Linear discriminant analysis' },
            { id: 'Rules' },
          ],
        },
        {
          id: 'Consensus',
          children: [
            {
              id: 'Models diversity',
            },
            {
              id: 'Methods',
            },
            {
              id: 'Common',
            },
          ],
        },
      ],
    };

    const graph = new F6.TreeGraph({
      container: null,
      context: this.ctx,
      renderer: 'mini',
      width: canvasWidth,
      height: canvasHeight,
      defaultNode: {
        shape: 'circle',
        size: [20],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3,
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 10,
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2',
        },
      },
      layout: {
        type: 'dendrogram',
        direction: 'TB', // H / V / LR / RL / TB / BT
        // fixedRoot: true,
      },
    });

    graph.data(data);
    graph.render();
  },
});
```

#### Layout with F6 extends package

```ts
import F6 from '@antv/f6';
import CircularLayout from '@antv/f6/dist/extends/layout/circularLayout';

F6.registerLayout('circle', CircularLayout);

Page({
  data: {
    canvasWidth: 400,
    canvasHeight: 610,
  },

  onLoad() {
    this.ctx = my.createCanvasContext('canvas');
    this.drawF6();
  },

  drawF6() {
    const { canvasWidth, canvasHeight } = this.data;
    const data = {
      nodes: [
        {
          id: '0',
          label: '0',
        },
        {
          id: '1',
          label: '1',
        },
        {
          id: '2',
          label: '2',
        },
        {
          id: '3',
          label: '3',
        },
        {
          id: '4',
          label: '4',
        },
        {
          id: '5',
          label: '5',
        },
        {
          id: '6',
          label: '6',
        },
      ],
      edges: [
        {
          source: '0',
          target: '1',
        },
        {
          source: '0',
          target: '2',
        },
        {
          source: '0',
          target: '3',
        },
        {
          source: '0',
          target: '4',
        },
        {
          source: '0',
          target: '5',
        },
        {
          source: '2',
          target: '3',
        },
        {
          source: '4',
          target: '5',
        },
        {
          source: '4',
          target: '6',
        },
        {
          source: '5',
          target: '6',
        },
      ],
    };

    // console.log('hello', F6.Layout)
    const graph = new F6.Graph({
      container: null,
      context: this.ctx,
      renderer: 'mini',
      fitView: true,
      width: canvasWidth,
      height: canvasHeight,
      defaultNode: {
        shape: 'circle',
        size: [20],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3,
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 10,
          },
        },
      },
      layout: {
        type: 'circular',
        // begin: [20, 20],
        // width: 800,
        // height: 1200,
      },
    });

    // graph.on('beforelayout', evt => {
    //   console.log('beforelayout------haha',  evt)
    // })
    // graph.on('afterlayout', evt => {
    //   console.log('afterlayout------haha',  evt)
    // })
    // graph.on('beginlayout', evt => {
    //   console.log('beginlayout------haha',  evt)
    // })
    graph.data(data);
    graph.render();
  },
});
```

```html
<view class="page-map-relation">
  <canvas id="canvas" class="canvas" onTouchStart="log" onTouchMove="log" onTouchEnd="log" />
</view>
```

```css
.page-map-relation {
  width: 100vw;
  height: 100vh;

  .canvas {
    width: 100vw;
    height: 100vh;
  }
}
```

#### Layout with F6 extends package

```ts
import F6 from '@antv/f6';
import CircularLayout from '@antv/f6-mobile/dist/extends/layout/circularLayout';

F6.registerLayout('circle', CircularLayout);

Page({
  data: {
    canvasWidth: 400,
    canvasHeight: 610,
  },

  onLoad() {
    this.ctx = my.createCanvasContext('canvas');
    this.drawF6();
  },

  drawF6() {
    const { canvasWidth, canvasHeight } = this.data;
    const data = {
      nodes: [
        {
          id: '0',
          label: '0',
        },
        {
          id: '1',
          label: '1',
        },
        {
          id: '2',
          label: '2',
        },
        {
          id: '3',
          label: '3',
        },
        {
          id: '4',
          label: '4',
        },
        {
          id: '5',
          label: '5',
        },
        {
          id: '6',
          label: '6',
        },
      ],
      edges: [
        {
          source: '0',
          target: '1',
        },
        {
          source: '0',
          target: '2',
        },
        {
          source: '0',
          target: '3',
        },
        {
          source: '0',
          target: '4',
        },
        {
          source: '0',
          target: '5',
        },
        {
          source: '2',
          target: '3',
        },
        {
          source: '4',
          target: '5',
        },
        {
          source: '4',
          target: '6',
        },
        {
          source: '5',
          target: '6',
        },
      ],
    };

    // console.log('hello', F6.Layout)
    const graph = new F6.Graph({
      container: null,
      context: this.ctx,
      renderer: 'mini',
      fitView: true,
      width: canvasWidth,
      height: canvasHeight,
      defaultNode: {
        shape: 'circle',
        size: [20],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3,
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 10,
          },
        },
      },
      layout: {
        type: 'circular',
        // begin: [20, 20],
        // width: 800,
        // height: 1200,
      },
    });

    // graph.on('beforelayout', evt => {
    //   console.log('beforelayout------haha',  evt)
    // })
    // graph.on('afterlayout', evt => {
    //   console.log('afterlayout------haha',  evt)
    // })
    // graph.on('beginlayout', evt => {
    //   console.log('beginlayout------haha',  evt)
    // })
    graph.data(data);
    graph.render();
  },
});
```

```html
<view class="page-map-relation">
  <canvas id="canvas" class="canvas" onTouchStart="log" onTouchMove="log" onTouchEnd="log" />
</view>
```

```css
.page-map-relation {
  width: 100vw;
  height: 100vh;

  .canvas {
    width: 100vw;
    height: 100vh;
  }
}
```
