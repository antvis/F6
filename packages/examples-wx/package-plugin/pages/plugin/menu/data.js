const data = {
  nodes: [
    {
      id: 'node1',
      label: 'node1',
      x: 200,
      y: 100,
      type: 'rect',
    },
    {
      id: 'node2',
      label: 'node2',
      x: 250,
      y: 250,
      type: 'rect',
    },
    {
      id: 'node3',
      label: 'node3',
      x: 350,
      y: 100,
      type: 'rect',
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      label: 'Test Label',
    },
    {
      source: 'node1',
      target: 'node3',
      label: 'Test Label 2',
    },
  ],
};

export default data;
