export default {
  nodes: [
    {
      id: 'node1',
      x: 150,
      y: 50,
      label: 'node1',
    },
    {
      id: 'node2',
      x: 250,
      y: 200,
      label: 'node2',
    },
    {
      id: 'node3',
      x: 100,
      y: 350,
      label: 'node3',
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      label: 'edge 1',
    },
    {
      source: 'node2',
      target: 'node3',
      label: 'edge 2',
    },
    {
      source: 'node3',
      target: 'node1',
      label: 'edge 3',
    },
  ],
};
