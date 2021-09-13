import { createUI }  from '@antv/f6-ui/dist/f6GUI'
import F6 from '../../../../f6';
import forceLayout from '../../../../f6/dist/extends/layout/forceLayout';

F6.registerLayout('force', forceLayout);


function test(group) {
  const html = `
    <div id="lll">
      <div class="test">
        <shape type="rect" r="10" path="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" >ttt</shape>
      </div>
      <div class="real">       
       <image src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ"></image>
      </div>
      <div class="real">testtesetsets</div>
      <div class="test">testtesetsets</div>
      <div class="real">testtesetsets</div>
    </div>
  `;
  const css = `
    #lll {
      width: 600;
      height: 200;
      display: flex;
      flexDirection: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;

      background: blue;
      color: black;
      border: 20 solid rgba(0,0,0,0.5);
      border-radius: 10;

      font-size: 24;
    }
    div {
      background: red;
    }
    .test {
      background: yellow;
      padding-left: 0;
    }

    #lll div{
      margin-left: 10;
      text-align: left;
      width: 100;
      height: 100;
    }
    
    #lll div.real{
      text-align: left;
    }
    shape {
      background: #ff00ff;
      top: 0;
      left: 0;
      width: 50;
      height: 50;
      text-align: center;
    }
    image {
      width: 50;
      height: 50;
    }
  `;
  // 样式解析计算，简写样式展开。
  console.log(createUI)
  const ui  = createUI (html, css, group);
  console.log('query', ui.query('#lll div.real'))
  
  console.log(ui)
}

function refreshDragedNodePosition(e) {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}

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
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node1', target: 'node6' },
    { source: 'node1', target: 'node7' },
    { source: 'node2', target: 'node8' },
    { source: 'node2', target: 'node9' },
    { source: 'node2', target: 'node10' },
    { source: 'node2', target: 'node11' },
    { source: 'node2', target: 'node12' },
    { source: 'node2', target: 'node13' },
    { source: 'node3', target: 'node14' },
    { source: 'node3', target: 'node15' },
    { source: 'node3', target: 'node16' },
  ],
};

Page({
  data: {
    width: 500,
    height: 500,
  },
  onLoad() {
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();
    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },
  onCanvasInit(ctx, rect, canvas, renderer) {
    console.log(ctx, rect, canvas);
    this.graph = new F6.Graph({
      context: ctx,
      renderer,
      width: this.data.width,
      height: this.data.height,
      fitView: true,
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
        onTick: () => {
          const nodeItems = this.graph.getNodes();
          const height = this.graph.get('height');
          const width = this.graph.get('width');
          const padding = 10;
          nodeItems.forEach((item) => {
            const model = item.getModel();
            if (model.x > width - padding) model.x = width - padding;
            else if (model.x < padding) model.x = padding;

            if (model.y > height - padding) model.y = height - padding;
            else if (model.y < padding) model.y = padding;
          });
        },
      },
      defaultNode: {
        color: '#5B8FF9',
      },
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
    });
    const { nodes } = data;
    this.graph.data({
      nodes,
      edges: data.edges.map((edge, i) => {
        edge.id = `edge${i}`;
        return Object.assign({}, edge);
      }),
    });
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
    test(this.graph.get('uiGroup'))
  },
  onTouch(e) {
    this.graph.emitEvent(e);
  },
});
