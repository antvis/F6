export default {
  nodes: [
    {
      id: '7',
      x: 150,
      y: 100,
      size: 40,
      anchorPoints: [
        [1, 0.5],
        [1, 0],
      ],
    },
    {
      id: '8',
      x: 300,
      y: 200,
      size: 40,
      anchorPoints: [
        [0, 0.5],
        [0, 1],
      ],
    },
  ],
  edges: [
    {
      source: '7',
      target: '8',
      sourceAnchor: 0,
      targetAnchor: 0,
    },
  ],
};
