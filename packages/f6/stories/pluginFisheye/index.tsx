import React, { useEffect } from 'react';
import F6, {ShapeStyle} from '../../src';
import data from './data';
import { Fisheye } from '@antv/f6-plugin'


export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;
  useEffect(() => {
    if (!graph) {
      let fisheye = new Fisheye({
        r: 200,
        showLabel: true,
        trigger: 'tap',
        scaleRBy: 'drag'
      });
      const colors = [
        '#8FE9FF',
        '#87EAEF',
        '#FFC9E3',
        '#A7C2FF',
        '#FFA1E3',
        '#FFE269',
        '#BFCFEE',
        '#FFA0C5',
        '#D5FF86',
      ];

      data.nodes.forEach((node: ShapeStyle) => {
        node.label = node.id;
        node.size = Math.random() * 30 + 10;
        node.style = {
          fill: colors[Math.floor(Math.random() * 9)],
          lineWidth: 0,
        };
      });
      
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        fitView: true,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        plugins: [fisheye],
       
      });
      graph.data(data);
      graph.render();
    }
  }, []);

  return <div ref={ref}></div>;
}
