export default {
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 100,
      label: 'node1',
    },
    {
      id: 'node2',
      x: 300,
      y: 100,
      label: 'node2',
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      // The left and right labels
      label: ['hello', 'world'],
    },
  ],
};
