export default {
  nodes: [
    {
      id: 'node0',
      x: 200,
      y: 10,
      size: 20,
    },
    {
      id: 'node1',
      x: 200,
      y: 50,
      label: '1222',
      type: 'my-rect',
    },
    {
      id: 'node2',
      x: 150,
      y: 150,
      type: 'my-rect',
    },
    {
      id: 'node3',
      x: 250,
      y: 150,
      type: 'my-rect',
    },
    {
      id: 'node4',
      x: 200,
      y: 250,
      type: 'my-rect',
    },
  ],
  edges: [
    {
      source: 'node0',
      target: 'node1',
    },
    {
      source: 'node1',
      target: 'node2',
    },
    {
      source: 'node1',
      target: 'node3',
    },
    {
      source: 'node2',
      target: 'node4',
    },
    {
      source: 'node3',
      target: 'node4',
    },
  ],
};
