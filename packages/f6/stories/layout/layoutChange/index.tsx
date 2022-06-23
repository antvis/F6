import {
  Canvas,
  CircularLayout,
  ConcentricLayout,
  DagreLayout,
  ForceLayout,
  FruchtermanLayout,
  Graph,
  GridLayout,
  jsx,
  RadialLayout,
  registerLayout,
  Util,
} from '@antv/f6/src';
import React, { useEffect } from 'react';
import data from '../../data/graphData';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  registerLayout('RadialLayout', RadialLayout);
  registerLayout('CircularLayout', CircularLayout);
  registerLayout('ConcentricLayout', ConcentricLayout);
  registerLayout('DagreLayout', DagreLayout);
  registerLayout('force', ForceLayout);
  registerLayout('FruchtermanLayout', FruchtermanLayout);
  registerLayout('GridLayout', GridLayout);

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
          onGraphReady={(graph) => {
            const layoutArr = [
              // 'RadialLayout',
              // 'CircularLayout',
              // 'ConcentricLayout',
              // 'DagreLayout',
              'force',
              // 'FruchtermanLayout',
              'GridLayout',
            ];
            let index = 0;
            // const loop = () => {
            //   setTimeout(() => {
            //     console.log('layout');
            //     graph.updateLayout({
            //       type: layoutArr[index],
            //     });
            //     graph.fitCenter();
            //     index++;
            //     if (index === layoutArr.length) {
            //       index = 0;
            //     }
            //     loop();
            //   }, 2000);
            // };

            setTimeout(() => {
              console.log('layout');
              graph.updateLayout({
                type: layoutArr[0],
              });
              // graph.fitCenter();
            }, 100);

            setTimeout(() => {
              console.log('layout');
              graph.updateLayout({
                type: layoutArr[1],
              });
              // graph.fitCenter();
            }, 2000);

            // loop();
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};
