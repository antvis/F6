const data = {
  nodes: [
    {
      id: 'node1',
      x: 50,
      y: 350,
      label: 'A',
    },
    {
      id: 'node2',
      x: 250,
      y: 150,
      label: 'B',
    },
    {
      id: 'node3',
      x: 450,
      y: 350,
      label: 'C',
    },
  ],
  edges: [],
};

for (let i = 0; i < 10; i++) {
  data.edges.push({
    source: 'node1',
    target: 'node2',
    label: `${i}th edge of A-B`,
  });
}
for (let i = 0; i < 5; i++) {
  data.edges.push({
    source: 'node2',
    target: 'node3',
    label: `${i}th edge of B-C`,
  });
}

export default data;
