import React, { useEffect } from 'react';
import { Canvas, Graph, registerLayout, Util } from '../../src';
import ForceLayout from '../../src/layout/forceLayout';
import data from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  // const data = {
  //   nodes: [],
  //   edges: [],
  // };

  // for (let i = 0; i < 50; i++) {
  //   const id = `node-${i}`;
  //   data.nodes.push({
  //     id,
  //     date: Number(`2020${i}`),
  //     value: Math.round(Math.random() * 300),
  //   });

  //   data.edges.push({
  //     source: `node-${Math.round(Math.random() * 90)}`,
  //     target: `node-${Math.round(Math.random() * 90)}`,
  //   });
  // }

  const timeBarData = [];

  for (let i = 0; i < 50; i++) {
    timeBarData.push({
      date: Number(`2020${i}`),
      value: Math.round(Math.random() * 300),
    });
  }
  // let count = 0;
  // const timebar = new TimeBar({
  //   x: 0,
  //   y: 0,
  //   width,
  //   padding: 0,
  //   type: 'simple',
  //   data: timeBarData,
  // });

  // let graph = null;
  // useEffect(() => {
  //   if (!graph) {
  //     graph = new F6.Graph({
  //       container: ref.current,
  //       width,
  //       height,
  //       pixelRatio: 2,
  //       fitView: true,
  //       localRefresh: false,
  //       modes: {
  //         default: ['drag-canvas', 'drag-node'],
  //       },
  //       animate: false,
  //       defaultNode: {
  //         size: 30,
  //       },
  //       plugins: [timebar],
  //     } as any);

  //     graph.get('canvas').set('localRefresh', false);
  //     graph.data(data);
  //     graph.render();
  //     graph.fitView();
  //   }
  // }, []);
  registerLayout('force', ForceLayout);
  // registerLayout('dagre', ForceLayout);
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
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
