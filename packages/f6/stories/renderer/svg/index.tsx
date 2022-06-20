import { Renderer as SvgRenderer } from '@antv/g-mobile-svg';
import React, { useEffect } from 'react';
import { Canvas, ForceLayout, Graph, registerLayout } from '../../../src';
import data from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  registerLayout('force', ForceLayout);
  useEffect(() => {
    const svgRenderer = new SvgRenderer();
    const { props } = (
      <Canvas
        container={'container'}
        width={width}
        height={height}
        pixelRatio={2}
        renderer={svgRenderer}
      >
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
  }, []);

  return <div id="container" ref={ref}></div>;
};
