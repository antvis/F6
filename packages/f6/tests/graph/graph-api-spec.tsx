import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';
import dargeData from '../data/dagreData';

describe('graph properties', async () => {
  const container = createContainer('Graph');
  const context = Util.createContext(container, 500, 500);
  let promise = Promise.resolve().then();
  let graph;
  let { props } = (
    <Canvas context={context} pixelRatio={2}>
      <Graph
        data={data}
        onGraphReady={(instance) => {
          graph = instance;
        }}
      ></Graph>
    </Canvas>
  );
  const canvas = new Canvas(props);
  await canvas.render();
  await delay(1000);

  it('初始数据', async () => {
    expect(context).toMatchImageSnapshot();
  });
});
