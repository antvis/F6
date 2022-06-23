import { CanvasRenderer } from '@antv/f-engine';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';

import React, { useEffect } from 'react';
import { Canvas, ForceLayout, Graph, registerLayout, Util } from '../../../src';
import data from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  registerLayout('force', ForceLayout);
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const canvasRenderer = new CanvasRenderer();
    canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());
    const { props } = (
      <Canvas
        width={width}
        height={height}
        pixelRatio={2}
        context={context}
        renderer={canvasRenderer}
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
          defaultNode={{
            style: {
              fill: '#1890FF',
              stroke: '#F04864',
            },
          }}
          defaultCombo={{
            style: {
              fill: '#1890FF',
              stroke: '#F04864',
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
