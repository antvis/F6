import React, { useEffect, useState } from 'react';
import F6 from '../../../src';
import dagreLayout from '../../../src/extends/layout/dagreLayout';
import data from './data';

F6.registerLayout('dagre', dagreLayout);
export default () => {
  const ref = React.useRef(null);
  const [description, setDescription] = useState('');
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;

  useEffect(() => {
    if (!graph) {
      // 创建F6实例
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        pixelRatio: 2,
        fitView: true,
        fitViewPadding: 30,
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
        layout: {
          type: 'dagre',
          nodeSize: [40, 20],
          nodesep: 1,
          ranksep: 1,
        },
        animate: true,
        defaultNode: {
          size: [40, 20],
          type: 'rect',
          style: {
            lineWidth: 2,
            stroke: '#5B8FF9',
            fill: '#C6E5FF',
          },
        },
        defaultEdge: {
          size: 1,
          color: '#e2e2e2',
          style: {
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#e2e2e2',
            },
          },
        },
      });

      graph.data(data);
      graph.render();
      graph.fitView();

      layoutConfigTranslation();

      function layoutConfigTranslation() {
        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 10, node seperation in same level: 1, layout direction: Top->Bottom, alignment of nodes: DL',
          ),
            graph.updateLayout({
              ranksep: 10,
            });
        }, 1000);

        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: DL',
          );
          graph.updateLayout({
            nodesep: 5,
          });
        }, 2500);

        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UL',
          );
          graph.updateLayout({
            align: 'UL',
          });
        }, 4000);

        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UR',
          );
          graph.updateLayout({
            align: 'UR',
          });
        }, 5500);

        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL',
          );
          graph.updateLayout({
            rankdir: 'LR',
            align: 'DL',
          });
        }, 7000);

        setTimeout(() => {
          setDescription(
            'Dagre layout, rank seperation: 30, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL',
          );
          graph.updateLayout({
            ranksep: 30,
          });
        }, 8500);
      }
    }
  }, []);

  return (
    <div>
      <div>{description}</div>
      <div ref={ref}></div>
    </div>
  );
};
