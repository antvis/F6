export default {
  nodes: [
    {
      id: '4',
      x: 150,
      y: 100,
    },
    {
      id: '5',
      x: 350,
      y: 250,
    },
  ],
  edges: [
    {
      source: '4',
      target: '5',
      // assign the control points to control the bending positions
      controlPoints: [
        {
          x: 260,
          y: 80,
        },
        {
          x: 320,
          y: 50,
        },
        {
          x: 390,
          y: 110,
        },
        {
          x: 420,
          y: 110,
        },
        {
          x: 420,
          y: 140,
        },
      ],
    },
  ],
};
