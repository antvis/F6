import React, { useEffect } from 'react';
import F6 from '../../src';
import { MiniMap } from "@antv/f6-plugin/src"
import data from './data';

const miniMap = new MiniMap();

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;
  useEffect(() => {
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          align: 'DL',
          nodesepFunc: () => 1,
          ranksepFunc: () => 1,
        },
        defaultNode: {
          size: [80, 40],
          type: 'rect',
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          style: {
            stroke: '#b5b5b5',
            lineAppendWidth: 3,
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
        plugins: [miniMap],
      });
      graph.data(data);
      graph.render();
    }

    const handleZoom = (e) => {
      console.log(e);
    };

    ref.current.addEventListener('wheel', handleZoom);

    return () => {
      ref.current.removeEventListener('wheel', handleZoom)
    };
  }, []);

  return <div ref={ref} ></div>;
}
