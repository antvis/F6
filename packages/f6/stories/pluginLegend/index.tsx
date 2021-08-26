import React, { useEffect } from 'react';
import F6 from '../../src';
import data from './data';
import { Legend } from '@antv/f6-plugin'

const typeConfigs = {
  'type1': {
    type: 'circle',
    size: 5,
    style: {
      fill: '#5B8FF9'
    }
  },
  'type2': {
    type: 'circle',
    size: 20,
    style: {
      fill: '#5AD8A6'
    }
  },
  'type3': {
    type: 'rect',
    size: [10, 10],
    style: {
      fill: '#5D7092'
    }
  },
  'eType1': {
    type: 'line',
    style: {
      width: 20,
      stroke: '#F6BD16',
    }
  },
  'eType2': {
    type: 'cubic',
  },
  'eType3': {
    type: 'quadratic',
    style: {
      width: 25,
      stroke: '#6F5EF9'
    }
  }
}

data.nodes.forEach(node => {
  if (!node.legendType) return;
  node = Object.assign(node, {...typeConfigs[node.legendType]});
})
data.edges.forEach(edge => {
  if (!edge.legendType) return;
  const config = typeConfigs[edge.legendType];
  edge = Object.assign(edge, {...config});
})
const legendData = {
  nodes: [{
    id: 'type1',
    label: 'node-type1',
    order: 4,
    ...typeConfigs['type1']
  }, {
    id: 'type2',
    label: 'node-type2',
    order: 0,
    ...typeConfigs['type2']
  }, {
    id: 'type3',
    label: 'node-type3',
    order: 2,
    ...typeConfigs['type3']
  }],
  edges: [{
    id: 'eType1',
    label: 'edge-type1',
    order: 2,
    ...typeConfigs['eType1']
  }, {
    id: 'eType2',
    label: 'edge-type2',
    ...typeConfigs['eType2']
  }, {
    id: 'eType3',
    label: 'edge-type3',
    ...typeConfigs['eType3']
  }]
}
const legend = new Legend({
  width: 300,
  height: 200,
  data: legendData,
  align: 'center',
  layout: 'vertical', // vertical
  position: 'bottom-right',
  offsetY: 0,
  padding: 10,
  containerStyle: {
    fill: '#ccc',
    lineWidth: 1
  },
  title: 'Legend',
  titleConfig: {
    position: 'center',
    offsetX: 0,
    offsetY: 0,
  },
  itemConfig: {
  }, 
  filter: {
    enable: true,
    multiple: true,
    trigger: 'click',
    graphActiveState: 'activeByLegend',
    graphInactiveState: 'inactiveByLegend',
    filterFunctions: {
      'type1': (d) => {
        if (d.legendType === 'type1') return true;
        return false
      },
      'type2': (d) => {
        if (d.legendType === 'type2') return true;
        return false
      },
      'type3': (d) => {
        if (d.legendType === 'type3') return true;
        return false
      },
      'eType1': (d) => {
        if (d.legendType === 'eType1') return true;
        return false
      },
      'eType2': (d) => {
        if (d.legendType === 'eType2') return true;
        return false
      },
      'eType3': (d) => {
        if (d.legendType === 'eType3') return true;
        return false
      },
    }
  }
});

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
          size: [80, 40],
          type: 'rect',
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        plugins: [legend],
        nodeStateStyles: {
          activeByLegend: {
            lineWidth: 10,
            strokeOpacity: 0.5
          },
          inactiveByLegend: {
            opacity: 0.5
          }
        },
        edgeStateStyles: {
          activeByLegend: {
            lineWidth: 3
          },
          inactiveByLegend: {
            opacity: 0.5
          }
        },
      });
      graph.data(data);
      graph.render();
    }
  }, []);

  return <div ref={ref}></div>;
}
