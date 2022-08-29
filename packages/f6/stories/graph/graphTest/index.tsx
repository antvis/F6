import React, { useEffect, useState } from 'react';
import { Canvas, ForceLayout, DagreLayout, Graph, registerLayout, Util } from '../../../src';
import graphData from './data';
import dargeData from '../../data/dagreData';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  const [data, setData] = useState({});

  registerLayout('force', ForceLayout);
  registerLayout('dagre', DagreLayout);
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <Graph
          data={graphData}
          fitView={false}
          modes={{
            default: ['drag-node', 'drag-combo', 'click-select'],
          }}
          linkCenter={true}
        ></Graph>
      </Canvas>
    );

    const graph = new Canvas(props);
    graph.render().then(() => {
      setTimeout(() => {
        const { props } = (
          <Canvas width={width} height={height} pixelRatio={2} context={context}>
            <Graph
              data={dargeData}
              fitView={true}
              modes={{
                default: ['drag-node', 'drag-combo', 'click-select'],
              }}
            ></Graph>
          </Canvas>
        );
        graph.update(props);
      }, 1000);
    });
  }, []);

  return <div ref={ref}></div>;
};
