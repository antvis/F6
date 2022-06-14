import { Canvas, Graph, jsx } from '../../src';
import { createContainer } from '../util';
import data from './data';

describe('F6 Graph', () => {
  it('export', () => {
    const container = createContainer('Graph');
    const { props } = (
      <Canvas container={container} devicePixelRatio={1} width={300} height={500}>
        <Graph
          data={data}
          layout={{
            type: 'force',
            // preventOverlap: true,
            // alphaDecay: 0,
          }}
          modes={{
            default: ['drag-node', 'drag-combo', 'click-select'],
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  });
});