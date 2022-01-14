import F6 from '@antv/f6';
import data from './data';
const width = 375;
const height = 600;
const pixelRatio = 2;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  defaultNode: {
    type: 'circle',
    labelCfg: {
      position: 'bottom'
    }
  },
  defaultEdge: {
    labelCfg: {
      autoRotate: true,
      style: {
        fill: '#1890ff',
        fontSize: 14,
        background: {
          fill: '#ffffff',
          stroke: '#9EC9FF',
          padding: [2, 2, 2, 2],
          radius: 2
        }
      }
    }
  },
  modes: {
    default: ['drag-canvas', 'drag-node']
  },
  nodeStateStyles: {
    hover: {
      fillOpacity: 0.8
    },
    selected: {
      lineWidth: 5
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();