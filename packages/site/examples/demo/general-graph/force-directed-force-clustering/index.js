import F6 from '@antv/f6';
import getData from './data';
import force from '@antv/f6/dist/extends/layout/forceLayout';
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout('force', force);
const data = getData();
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: 'force',
    clustering: true,
    clusterNodeStrength: -5,
    clusterEdgeDistance: 200,
    clusterNodeSize: 20,
    clusterFociStrength: 1.2,
    nodeSpacing: 5,
    preventOverlap: true
  },
  defaultNode: {
    size: 15
  },
  modes: {
    default: ['zoom-canvas', 'drag-canvas', 'drag-node']
  }
});
const colorMap = {
  2012: '#BDD2FD',
  2013: '#BDEFDB',
  2014: '#F6C3B7',
  2015: '#FFD8B8',
  2016: '#D3C6EA'
};
graph.data(data);
data.nodes.forEach(i => {
  i.cluster = i.year;
  i.style = Object.assign(i.style || {}, {
    fill: colorMap[i.year]
  });
});
graph.render();
graph.fitView();