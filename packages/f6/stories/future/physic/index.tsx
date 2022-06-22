import { CanvasRenderer } from '@antv/f-engine';
import { Plugin as PluginMatterjs } from '@antv/g-plugin-matterjs';
import React, { useEffect } from 'react';
import { Canvas, DagreLayout, Graph, jsx, registerLayout, Util } from '../../../src';
import data from './data';
export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);
    const renderer = new CanvasRenderer();
    const plugin = new PluginMatterjs({
      debug: true, // 开启 debug 模式，将物理引擎世界也渲染出来
      debugContainer: document.getElementById('container'),
      debugCanvasWidth: 600,
      debugCanvasHeight: 500,
    });
    renderer.registerPlugin(plugin);
    registerLayout('dagre', DagreLayout);

    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context} renderer={renderer}>
        <Graph
          data={data}
          layout={{
            type: 'dagre',
            ranksep: 10,
            nodesep: 10,
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
  // }

  return <div ref={ref}></div>;
};
