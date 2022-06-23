import React, { useEffect } from 'react';
import { Canvas, TreeGraph, Util } from '../../../src';
import data from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  useEffect(() => {
    const context = Util.createContext(ref.current, width, height);

    const { props } = (
      <Canvas width={width} height={height} pixelRatio={2} context={context}>
        <TreeGraph
          data={data}
          layout={{
            type: 'compactBox',
            direction: 'LR',
            defalutPosition: [],
            getId: function getId(d) {
              return d.id;
            },
            getHeight: function getHeight() {
              return 16;
            },
            getWidth: function getWidth() {
              return 16;
            },
            getVGap: function getVGap() {
              return 10;
            },
            getHGap: function getHGap() {
              return 50;
            },
          }}
          fitView={true}
          modes={{
            default: ['collapse-expand', 'drag-node'],
          }}
          // onGraphReady={(graph) => {
          //   graph.changeData(data);
          // }}
          defaultEdge={{
            type: 'quadratic',
          }}
        ></TreeGraph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
  }, []);
  // }

  return <div ref={ref}></div>;
};
