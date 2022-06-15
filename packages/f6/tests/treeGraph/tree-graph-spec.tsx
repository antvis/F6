import { Canvas, jsx, TreeGraph, Util } from '../../src';
import { createContainer } from '../util';
import data from './data';

describe('F6 TreeGraph', () => {
  it('export', () => {
    const container = createContainer('TreeGraph');
    const context = Util.createContext(container, 500, 500);

    const { props } = (
      <Canvas context={context} pixelRatio={1} width={300} height={500}>
        <TreeGraph
          data={data}
          layout={{
            type: 'compactBox',
            direction: 'LR',
            defalutPosition: [],
            getId: function getId(d) {
              return d.id;
            },
            getHeight: function getHeight() {
              return 16;
            },
            getWidth: function getWidth() {
              return 16;
            },
            getVGap: function getVGap() {
              return 10;
            },
            getHGap: function getHGap() {
              return 50;
            },
          }}
          modes={{
            default: ['collapse-expand', 'drag-node'],
          }}
        ></TreeGraph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  });
});
