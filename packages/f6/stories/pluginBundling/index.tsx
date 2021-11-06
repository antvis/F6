import React, { useEffect } from 'react';
import F6 from '../../src';
import data from './data';
import { Bundling } from '@antv/f6-plugin'
import CircularLayout from '@antv/f6/dist/extends/layout/circularLayout'

F6.registerLayout('circular', CircularLayout);

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  const edgeBundling = new Bundling({
    bundleThreshold: 0.1,
  });
  
  let graph = null;
  useEffect(() => {
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        layout: {
          type: 'circular',
          center: [width / 2, height / 2],
          radius: height / 2.5,
          ordering: null,
        },
        plugins: [edgeBundling],
        defaultNode: {
          size: [20, 20],
          color: 'steelblue',
        },
        defaultEdge: {
          size: 1,
          color: '#999',
        },
      });
      graph.data(data);
      graph.render();
    }

    setTimeout(() => {
      edgeBundling.bundling(data);
    }, 1000);
    
  }, []);

  return <div ref={ref} ></div>;
}
