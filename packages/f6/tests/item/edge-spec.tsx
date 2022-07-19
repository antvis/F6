import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';

describe('item edge api', () => {
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
    const edge = graph.findById('edge0');
    expect(edge.model).toBe(edge.getModel());
    expect(edge.type).toBe('edge');
    expect(edge.getType()).toBe(edge.type);

    expect(edge.graph).not.toBe(null);
    expect(edge.id).toBe('edge0');
  });

  it('getSource & getTarget', async () => {
    await canvasPromise;
    const edge = graph.findById('edge0');

    const sourceNode = graph.findById(edge.model.source);
    expect(edge.getSource()).toBe(sourceNode);

    const targetNode = graph.findById(edge.model.target);
    expect(edge.getTarget()).toBe(targetNode);
  });

  it('setState & hasState & clearState', async () => {
    await canvasPromise;
    const edge = graph.findById('edge0');
    edge.setState('selected', true);
    expect(edge.hasState('selected')).toBe(true);
    edge.setState('test', 'active');
    expect(edge.hasState('test:active', true));

    await delay(300);
    expect(context).toMatchImageSnapshot();

    edge.clearStates(['selected']);
    expect(edge.hasState('selected', false));
    await delay(300);
    expect(context).toMatchImageSnapshot();

    edge.clearStates();
    expect(edge.hasState('test:active', false));
  });

  it('hide & show', async () => {
    await canvasPromise;
    const edge = graph.findById('edge0');

    edge.hideItem();
    await delay(300);
    expect(edge.model.visible).toBe(false);
    expect(context).toMatchImageSnapshot();

    // edge.showItem();
    // await delay(300);
    // expect(edge.model.visible).toBe(true);
    // expect(context).toMatchImageSnapshot();
  });
});
