import React, { useEffect, useState } from 'react';
import { Canvas, ForceLayout, Graph, registerLayout, Util } from '../../../src';
import graphData from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  const [data, setData] = useState({});

  registerLayout('force', ForceLayout);
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
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
          linkCenter={true}
          defaultNode={{
            style: {
              opacity: 0.5,
            },
          }}
          onGraphReady={(graphInstance) => {
            setTimeout(() => {
              graphInstance.changeData(graphData);
            });

            // setTimeout(() => {
            //   graphInstance.changeData(graphData);
            // }, 5000);
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
