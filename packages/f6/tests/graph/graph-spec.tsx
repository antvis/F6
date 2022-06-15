import { Canvas, Graph, jsx, Util } from '../../src';
import { createContainer } from '../util';
import data from './data';

describe('F6 Graph', () => {
  it('export', () => {
    const container = createContainer('Graph');
    const context = Util.createContext(container, 500, 500);
    const { props } = (
      <Canvas context={context} devicePixelRatio={1} width={300} height={500}>
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
