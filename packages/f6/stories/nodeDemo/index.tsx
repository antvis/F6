import React, { useEffect } from 'react';
import F6 from '../../src';
import TreeGraph from '../../src/extends/graph/treeGraph';
import data from './data';
import equityCompanyNode from './node';
import equityCompanyNodeF6UI from './uiNode';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;
  useEffect(() => {
    if (!graph) {
      // debugger
      F6.registerNode('EQUITY_GRAPH_NODE_TYPE_COMPANY', equityCompanyNode, 'rect');
      F6.registerNode('EQUITY_GRAPH_NODE_TYPE_COMPANY_F6UI', equityCompanyNodeF6UI, 'rect');
      F6.registerGraph('TreeGraph', TreeGraph);
      graph = new F6.TreeGraph({
        container: ref.current,
        width,
        height,
        fitView: true,
        linkCenter: true,
        defaultNode: {
          type: 'rect',
          maxTextCount: 20,
          size: [242, 106],
          style: {
            radius: 0,
            fill: '#FFFFFF',
            stroke: '#91D5FF',
          },
          labelCfg: {
            style: {
              fill: '#333333',
              fontSize: 20,
              textAlign: 'center',
            },
          },
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        modes: {
          default: [
            'drag-node',
            'zoom-canvas',
          ],
        },
        layout:  {
          type: 'compactBox',
          direction: 'V',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 106;
          },
          getWidth: function getWidth() {
            return 242;
          },
          getVGap: function getVGap() {
            return 154 / 2;
          },
          getHGap: function getHGap() {
            return 24 / 2;
          },
          getSide: function getSide(node) {
            switch (node.data.side) {
              case 'up':
                return 'left';
              case 'down':
                return 'right';
              default:
                return 'left';
            }
          },
        },
        defaultEdge: {
          color: '#999',
          style: {
            stroke: '#C5C5C5',
          },
          labelCfg: {
            style: {
              fill: '#000',
              fontSize: 20,
              textAlign: 'left',
              fontStyle: 'Italic',
            },
          },
        },
      });
      graph.data(data);
      graph.render();
    }

  }, []);

  return <div ref={ref} ></div>;
}
