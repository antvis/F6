import { Canvas, Graph, jsx, Util, DagreLayout, registerLayout } from '../../src';
import { createContainer, delay } from '../util';
import data from './data';
import dargeData from '../data/dagreData';

describe('graph', () => {
  const container = createContainer('Graph');
  const context = Util.createContext(container, 500, 500);
  let { props } = (
    <Canvas context={context} pixelRatio={2}>
      <Graph data={data} fitView={false}></Graph>
    </Canvas>
  );
  const canvas = new Canvas(props);

  it('base render', async () => {
    console.log('run 01');
    await canvas.render();
    await delay(300);
    expect(context).toMatchImageSnapshot();
  });

  it('切换 data + 不居中', async () => {
    console.log('run 02');

    registerLayout('dagre', DagreLayout);
    // 切换data
    ({ props } = (
      <Canvas context={context} pixelRatio={2}>
        <Graph data={dargeData} fitView={false} fitCenter={false}></Graph>
      </Canvas>
    ));
    await canvas.update(props);
    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });

  it('切换 layout + 居中', async () => {
    registerLayout('dagre', DagreLayout);

    // 切换 fitCenter
    ({ props } = (
      <Canvas context={context} pixelRatio={2}>
        <Graph
          data={dargeData}
          fitView
          layout={{
            type: 'dagre',
          }}
        ></Graph>
      </Canvas>
    ));
    await canvas.update(props);
    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });

  it('change width height', async () => {
    // 切换 fitCenter
    ({ props } = (
      <Canvas context={context} pixelRatio={2} width={300} height={300}>
        <Graph data={dargeData}></Graph>
      </Canvas>
    ));
    await canvas.update(props);
    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });

  it('change modes', async () => {
    // 切换 fitCenter
    ({ props } = (
      <Canvas context={context} pixelRatio={2}>
        <Graph
          data={dargeData}
          modes={{
            default: ['drag-canvas'],
          }}
        ></Graph>
      </Canvas>
    ));
    await canvas.update(props);
    await delay(1000);
    expect(context).toMatchImageSnapshot();
  });
});
