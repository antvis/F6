export default {
  nodes: [
    {
      id: '0',
      x: 150,
      y: 50,
    },
    {
      id: '1',
      x: 350,
      y: 250,
    },
  ],
  edges: [
    // Built-in arc edges
    {
      id: 'edge0',
      source: '0',
      target: '1',
      label: 'curveOffset = 20',
      curveOffset: 20,
    },
    {
      id: 'edge1',
      source: '0',
      target: '1',
      label: 'curveOffset = 50', // the bending degree
      curveOffset: 50,
    },
    {
      id: 'edge2',
      source: '0',
      target: '1',
      label: 'curveOffset = -50', // the bending degree
      curveOffset: -50,
    },
  ],
};
