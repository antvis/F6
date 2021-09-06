import React, { useEffect } from 'react';
import F6 from '../../src';
import data from './data';
import plugins from '../../../plugin/src'

const EdgeFilterLens = plugins.EdgeFilterLens

data.edges.forEach((edge) => {
  edge.color = '#aaa';
  edge.size = 2;
  edge.style = {
    opacity: 0.7,
  };
  edge.label = 'a';
});
const filterConfigs = {
  trigger: 'drag',
  showLabel: 'edge',
  r: 60,
};
let filterLens = new EdgeFilterLens(filterConfigs);

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
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        plugins: [filterLens],
        defaultEdge: {
          labelCfg: {
            autoRotate: true,
            style: {
              stroke: '#fff',
              lineWidth: 2,
            },
          },
        },
        defaultNode: {
          size: 15,
          color: '#5B8FF9',
          style: {
            lineWidth: 2,
            fill: '#C6E5FF',
          },
        },
      });
      graph.data(data);
      graph.render();
      graph.getEdges().forEach((edge) => {
        edge
          .getContainer()
          .getChildren()
          .forEach((shape) => {
            if (shape.get('type') === 'text') shape.set('visible', false);
          });
      });
    }
  }, []);

  return <div ref={ref}></div>;
}
