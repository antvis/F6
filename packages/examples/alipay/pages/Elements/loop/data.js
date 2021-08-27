export default {
  nodes: [
    {
      id: '0',
      x: 150,
      y: 150,
    },
    {
      id: '1',
      x: 350,
      y: 150,
    },
  ],
  edges: [
    // 内置 loop
    {
      source: '0',
      target: '0',
    },
    {
      source: '1',
      target: '1',
    },
  ],
};
