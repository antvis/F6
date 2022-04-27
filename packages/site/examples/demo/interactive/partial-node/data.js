export default {
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 150,
      label: 'node1',
      size: 100,
      type: 'customNode',
    },
    {
      id: 'node2',
      x: 300,
      y: 150,
      label: 'node2',
      size: 100,
      type: 'customNode',
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};
