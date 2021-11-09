export default {
  nodes: [
    {
      id: 'node5',
      x: 150,
      y: 200,
      label: '5',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'node6',
      x: 300,
      y: 150,
      label: '6',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'node7',
      x: 300,
      y: 250,
      label: '7',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
  ],
  edges: [
    {
      source: 'node5',
      target: 'node6',
      type: 'cubic-horizontal',
    },
    {
      source: 'node5',
      target: 'node7',
      type: 'cubic-horizontal',
    },
  ],
};
