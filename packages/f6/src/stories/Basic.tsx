import React, { useEffect } from 'react';
import G6 from '../index';
import GridLayout from '../extends/layout/mdsLayout';
import './basic.css';
import TreeGraph from '../extends/graph/treeGraph';

console.log(G6);
G6.registerLayout('mindmap', GridLayout);
(G6 as any).registerGraph('TreeGraph', TreeGraph);

const data = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        { id: 'Logistic regression' },
        { id: 'Linear discriminant analysis' },
        { id: 'Rules' },
        { id: 'Decision trees' },
        { id: 'Naive Bayes' },
        { id: 'K nearest neighbor' },
        { id: 'Probabilistic neural network' },
        { id: 'Support vector machine' },
      ],
    },
    {
      id: 'Consensus',
      children: [
        {
          id: 'Models diversity',
          children: [
            { id: 'Different initializations' },
            { id: 'Different parameter choices' },
            { id: 'Different architectures' },
            { id: 'Different modeling methods' },
            { id: 'Different training sets' },
            { id: 'Different feature sets' },
          ],
        },
        {
          id: 'Methods',
          children: [{ id: 'Classifier selection' }, { id: 'Classifier fusion' }],
        },
        {
          id: 'Common',
          children: [{ id: 'Bagging' }, { id: 'Boosting' }, { id: 'AdaBoost' }],
        },
      ],
    },
    {
      id: 'Regression',
      children: [
        { id: 'Multiple linear regression' },
        { id: 'Partial least squares' },
        { id: 'Multi-layer feedforward neural network' },
        { id: 'General regression neural network' },
        { id: 'Support vector regression' },
      ],
    },
  ],
};

export interface BasicProps {}

export const BasicDemo = () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new (G6 as any).TreeGraph({
        container: ref.current,
        width,
        height,
        pixelRatio: 2,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                console.log(item);
                const data = item.get('model').data;
                data.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          size: [200, 50],

          shape: 'rect',

          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          shape: 'cubic-horizontal',
          style: {
            stroke: '#A3B1BF',
          },
        },
        layout: {
          type: 'mindmap',
          direction: 'H',
          getHeight: () => {
            return 40;
          },
          getWidth: () => {
            return 160;
          },
          getVGap: () => {
            return 10;
          },
          getHGap: () => {
            return 100;
          },
        },
      });

      let centerX = 0;
      // ????
      graph.node(function (node) {
        // depth ??????
        if (node.depth == 0) {
          console.log(node);
          return {
            size: [100, 60],
            style: {
              fill: 'red',
              // stroke:''
            },
            label: node.id,
          };
        }

        if (node.depth == 1) {
          console.log(node);
          return {
            size: [100, 60],
            style: {
              fill: 'blue',
            },
            label: node.id,
          };
        }
        return {
          label: node.id, // ??????
          labelCfg: {
            offset: 5,
          },
        };
      });
      graph.data(data);
      graph.render();
      graph.fitView();
      graph.on('itemcollapsed', (e) => {
        // 当前被操作的节点 item
        console.log(e.item);
        // 当前操作是收起（`true`）还是展开（`false`）
        console.log(e.collapsed);
      });
    }
  }, []);

  return <div ref={ref}></div>;
};
