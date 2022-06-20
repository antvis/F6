import { Canvas, Graph, jsx, RadialLayout, registerLayout, Util } from '@antv/f6/src';
import React, { useEffect } from 'react';
import data from '../../data/graphData';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  registerLayout('RadialLayout', RadialLayout);

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          data={data}
          layout={{
            type: 'RadialLayout',
            unitRadius: 50,
            preventOverlap: true,
            maxPreventOverlapIteration: 100,
          }}
          modes={{
            default: ['drag-node', 'drag-combo', 'click-select'],
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};