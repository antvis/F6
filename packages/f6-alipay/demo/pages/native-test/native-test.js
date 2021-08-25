import F6 from '../../../../f6';

const data = {
  nodes: [
    { id: 'node0', size: 50 },
    { id: 'node1', size: 30 },
    { id: 'node2', size: 30 },
    { id: 'node3', size: 30 },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node1', target: 'node3' },
    { source: 'node2', target: 'node3' },
  ],
};

Page({
  data: {
    width: 300,
    height: 400,
    pixelRatio: 1,
  },
  onLoad() {
    const { pixelRatio } = my.getSystemInfoSync();
    this.setData({
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
      defaultNode: {
        color: '#5B8FF9',
      },
      modes: {
        default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
      },
      extra: {
        createImage: canvas && canvas.createImage
      }
    });
    const { nodes } = data;
    this.graph.data({
      nodes,
      edges: data.edges.map((edge, i) => {
        edge.id = `edge${i}`;
        return Object.assign({}, edge);
      }),
    });

    //水印的设置
    const waterConfig = {
      image: {
        x: -15,
        y: 35,
        width: 156 / 2,
        height: 34 / 2,
        rotate: 30,
      },
    }
    const waterURL = 'https://gw.alipayobjects.com/zos/bmw-prod/8088a9d7-e5b0-42f2-b6b2-27c823043993.svg'
    this.graph.render();
    const waterCanvas = my.createOffscreenCanvas()
    this.graph.setImageWaterMarker(waterURL, waterConfig, waterCanvas)

  },
  onTouch(e) {
    this.graph.emitEvent(e);
  },
});

