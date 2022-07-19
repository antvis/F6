import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';
import dargeData from '../data/dagreData';
import { Canvas as FCanvas } from '@antv/f-engine';

describe('graph api', () => {
  const container = createContainer('Graph');
  const context = Util.createContext(container, 500, 500);
  registerLayout('dagre', DagreLayout);
  let graph;
  let { props } = (
    <Canvas context={context} pixelRatio={2}>
      <Graph
        data={data}
        onGraphReady={(instance) => {
          graph = instance;
        }}
        fitView={false}
        fitCenter={false}
      ></Graph>
    </Canvas>
  );
  const canvas = new Canvas(props);
  const canvasPromise = canvas.render();

  it('初始化', async () => {
    await canvasPromise;

    expect(graph.canvasJSXroot).toBeInstanceOf(FCanvas);
    expect(graph.canvas).not.toBe(null);
    expect(graph.nodeManager.models.length).toBe(34);
    expect(graph.edgeManager.models.length).toBe(60);
    expect(graph.comboManager.models.length).toBe(3);
    expect(graph.hullManager.models.length).toBe(1);
    expect(graph.isFitView).toBe(false);
    expect(graph.isFitView).toBe(false);
    expect(context).toMatchImageSnapshot();
  });

  it('layout', async () => {
    await canvasPromise;

    graph.setFitView(true);
    graph.layout();

    await delay(1000);
    expect(context).toMatchImageSnapshot();

    graph.updateLayout({
      type: 'dagre',
    });

    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });

  it('crud', async () => {
    await canvasPromise;

    const node = graph.addItem('node', {
      id: 'test-node',
    });

    const edge = graph.addItem('edge', {
      id: 'test-edge',
    });
    const combo = graph.addItem('combo', {
      id: 'test-combo',
    });

    expect(graph.findById('test-node')).toBe(node);
    expect(graph.findById('test-edge')).toBe(edge);
    expect(graph.findById('test-combo')).toBe(combo);

    expect(
      graph.findAll('node', (item, index) => {
        return item.id === 'test-node';
      }).length,
    ).toBe(1);

    const node1 = graph.addItem('node', {
      id: 'test-node-another',
    });
    graph.removeItem(node1);
    expect(graph.findById('test-node-another')).toBe(undefined);

    const node2 = graph.addItem('node', {
      id: 'test-node-update',
    });
    graph.updateItem(node2, {
      fill: 'red',
    });
    expect(graph.findById('test-node-update').model.fill).toBe('red');
  });

  it('visible', async () => {
    await canvasPromise;

    graph.hideItem('0');
    expect(graph.findById('0').model.visible).toBe(false);

    graph.showItem('0');
    expect(graph.findById('0').model.visible).toBe(true);
  });

  it('transform', async () => {
    await canvasPromise;

    graph.translateTo(10, 10);
    graph.translate(-10, -10);
    let bbox = graph.getMatrix();
    expect(bbox[6]).toBe(0);
    expect(bbox[7]).toBe(0);

    graph.zoomTo(1);
    graph.zoom(2);
    bbox = graph.getMatrix();
    expect(bbox[0]).toBe(2);
    expect(bbox[4]).toBe(2);

    graph.viewService.fitView();
  });

  it('state', async () => {
    await canvasPromise;

    graph.setItemState('1', 'selected', true);
    expect(graph.findAllByState('node', 'selected').length).toBe(1);
    graph.clearItemStates('1', ['selected']);
    expect(graph.findAllByState('node', 'selected').length).toBe(0);
  });
});
