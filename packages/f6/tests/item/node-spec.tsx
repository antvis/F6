import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';

describe('node api', () => {
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
        modes={{
          default: ['drag-node', 'drag-combo', 'click-select'],
        }}
      ></Graph>
    </Canvas>
  );
  const canvas = new Canvas(props);
  const canvasPromise = canvas.render();

  it('properties', async () => {
    await canvasPromise;
    const node = graph.findById('0');
    expect(node.model).toBe(node.getModel());
    expect(node.type).toBe('node');
    expect(node.getType()).toBe(node.type);

    expect(node.graph).not.toBe(null);
    expect(node.id).toBe('0');
  });

  it('setPosition', async () => {
    await canvasPromise;
    const node = graph.findById('0');

    node.setPosition({ x: 100, y: 100 });
    expect(node.model.x).toBe(100);
    expect(node.model.y).toBe(100);
    await delay(300);
    expect(context).toMatchImageSnapshot();
  });

  it('getParent', async () => {
    await canvasPromise;
    const node = graph.findById('0');
    node.updateItem({ parent: '1' });
    const parentNode = graph.findById('1');
    expect(node.getParent()).toBe(parentNode);
  });

  it('getEdges', async () => {
    await canvasPromise;
    const node = graph.findById('4');

    expect(node.getEdges().length).toBe(3);
  });

  it('getInEdges', async () => {
    await canvasPromise;
    const node = graph.findById('4');

    expect(node.getInEdges().length).toBe(2);
  });

  it('getOutEdges', async () => {
    await canvasPromise;
    const node = graph.findById('4');

    expect(node.getOutEdges().length).toBe(1);
  });

  it('getNeighbors', async () => {
    await canvasPromise;
    const node = graph.findById('4');

    expect(node.getNeighbors().length).toBe(3);
  });

  it('setState & hasState & clearState', async () => {
    await canvasPromise;
    const node = graph.findById('0');
    node.setState('selected', true);
    expect(node.hasState('selected')).toBe(true);
    node.setState('test', 'active');
    expect(node.hasState('test:active', true));

    await delay(300);
    expect(context).toMatchImageSnapshot();

    node.clearStates(['selected']);
    expect(node.hasState('selected', false));
    await delay(300);
    expect(context).toMatchImageSnapshot();

    node.clearStates();
    expect(node.hasState('test:active', false));
  });

  it('hide & show', async () => {
    await canvasPromise;
    const node = graph.findById('0');

    node.hideItem();
    await delay(300);
    expect(node.model.visible).toBe(false);
    expect(context).toMatchImageSnapshot();

    node.showItem();
    await delay(300);
    expect(node.model.visible).toBe(true);
    expect(context).toMatchImageSnapshot();
  });
});
