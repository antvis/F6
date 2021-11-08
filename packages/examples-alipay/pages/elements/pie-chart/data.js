export default {
  nodes: [
    {
      id: 'pie1',
      size: 80,
      inDegree: 80,
      degree: 360,
      x: 150,
      y: 150,
    },
    {
      id: 'pie2',
      size: 80,
      inDegree: 280,
      degree: 360,
      x: 350,
      y: 150,
    },
  ],
  edges: [
    {
      source: 'pie1',
      target: 'pie2',
    },
  ],
};
