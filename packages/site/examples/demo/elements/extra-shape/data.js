export default {
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 100,
    },
    {
      id: 'node2',
      x: 300,
      y: 100,
    },
    {
      id: 'node3',
      x: 300,
      y: 200,
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      midPointColor: '#f00',
      quatileColor: '#f00',
    },
    {
      source: 'node1',
      target: 'node3',
      midPointColor: '#0f0',
      quatileColor: '#0f0',
    },
  ],
};
