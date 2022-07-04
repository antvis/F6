import { Canvas, DagreLayout, Graph, jsx, registerLayout, Util } from '@antv/f6/src';
import React, { useEffect } from 'react';
import data from '../../data/dagreData';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  registerLayout('dagre', DagreLayout);

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          data={data}
          layout={{
            type: 'dagre',
            ranksep: 10,
            nodesep: 10,
          }}
          modes={{
            default: ['zoom-canvas'],
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
