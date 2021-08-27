export default {
  nodes: [
    {
      id: 'a',
      x: 200,
      y: 100,
      style: { fill: '#5B8FF9', stroke: null },
    },
    {
      id: 'b',
      x: 100,
      y: 200,
      style: { fill: '#5AD8A6', stroke: null },
    },
    {
      id: 'c',
      x: 300,
      y: 200,
      style: { fill: '#5D7092', stroke: null },
    },
  ],
  edges: [
    {
      id: 'a2b',
      source: 'a',
      target: 'b',
    },
    {
      id: 'a2c',
      source: 'a',
      target: 'c',
    },
  ],
};
