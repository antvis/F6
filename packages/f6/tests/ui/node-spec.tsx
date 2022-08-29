import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';

describe('graph properties', () => {
  const container = createContainer('Graph');
  const context = Util.createContext(container, 500, 500);
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

  it('properties ', async () => {
    await canvasPromise;
    await delay(300);

    const f6Context = canvas.context.f6Context;
    expect(f6Context.graph).not.toBe(null);
  });
});
