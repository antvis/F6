import React, { useEffect } from 'react';
import { ZoomSlider } from '@antv/f6-plugin';
import F6 from '../../src';
import data from './data';

const zoomSlider = new ZoomSlider();

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
        defaultNode: {
          size: 30,
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        plugins: [zoomSlider],
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
