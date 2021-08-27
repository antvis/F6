const data = {
  nodes: [
    {
      id: 'person A',
      label: 'person A',
      // the attributes for drawing donut
      donutAttrs: {
        income: 10,
        outcome: 20,
        unknown: 25,
      },
    },
    {
      id: 'person B',
      label: 'person B',
      donutAttrs: {
        income: 20,
        outcome: 10,
        unknown: 5,
      },
    },
    {
      id: 'person C',
      label: 'person C',
      donutAttrs: {
        income: 200,
        outcome: 20,
        unknown: 25,
      },
    },
    {
      id: 'person D',
      label: 'person D',
      donutAttrs: {
        income: 50,
        outcome: 10,
        unknown: 15,
      },
    },
    {
      id: 'person E',
      label: 'person E',
      donutAttrs: {
        income: 80,
        outcome: 40,
        unknown: 45,
      },
    },
    {
      id: 'person F',
      label: 'person F',
      donutAttrs: {
        income: 90,
        outcome: 110,
        unknown: 15,
      },
    },
  ],
  edges: [
    { source: 'person C', target: 'person F', size: 10 },
    { source: 'person B', target: 'person A', size: 5 },
    { source: 'person D', target: 'person E', size: 20 },
    { source: 'person D', target: 'person C', size: 5 },
    { source: 'person B', target: 'person C', size: 10 },
    { source: 'person A', target: 'person C', size: 5 },
  ],
};

data.edges.forEach((edge) => {
  edge.label = `Transfer $${edge.size}`;
});

const colors = {
  income: '#61DDAA',
  outcome: '#F08BB4',
  unknown: '#65789B',
};

data.nodes.forEach((node) => {
  node.donutColorMap = colors;
  node.size = 0;
  Object.keys(node.donutAttrs).forEach((key) => {
    node.size += node.donutAttrs[key];
  });
  node.size = Math.sqrt(node.size) * 5;
});

const legendData = {
  nodes: [
    {
      id: 'income',
      label: 'Income',
      order: 0,
      style: {
        fill: '#61DDAA',
      },
    },
    {
      id: 'outcome',
      label: 'Outcome',
      order: 2,
      style: {
        fill: '#F08BB4',
      },
    },
    {
      id: 'unknown',
      label: 'Unknown',
      order: 2,
      style: {
        fill: '#65789B',
      },
    },
  ],
};

export { data, legendData };
