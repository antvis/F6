import { Canvas, ForceLayout, Graph, jsx, registerLayout, Util } from '@antv/f6/src';
import React, { useEffect } from 'react';
import data from './data';
// import data from '../../data/largeData100';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  console.log('节点', data.nodes.length, '边', data.edges.length);
  registerLayout('force', ForceLayout);

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas pixelRatio={2} context={context}>
        <Graph
          data={data}
          layout={{
            type: 'force',
            preventOverlap: true,
            // alphaDecay: 0,
          }}
          modes={{
            default: ['drag-node', 'click-select'],
          }}
          defaultEdge={{
            type: 'cubic',
            style: {
              startArrow: true,
              endArrow: true,
            },
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
