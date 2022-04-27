const data = {
  nodes: [
    {
      id: '0',
      label: '0',
    },
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
    {
      id: '3',
      label: '3',
    },
    {
      id: '4',
      label: '4',
      comboId: 'A',
    },
    {
      id: '5',
      label: '5',
      comboId: 'B',
    },
    {
      id: '6',
      label: '6',
      comboId: 'A',
    },
    {
      id: '7',
      label: '7',
      comboId: 'C',
    },
    {
      id: '8',
      label: '8',
      comboId: 'C',
    },
    {
      id: '9',
      label: '9',
      comboId: 'A',
    },
    {
      id: '10',
      label: '10',
      comboId: 'B',
    },
    {
      id: '11',
      label: '11',
      comboId: 'B',
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
    },
    {
      source: '0',
      target: '2',
    },
    {
      source: '1',
      target: '4',
    },
    {
      source: '0',
      target: '3',
    },
    {
      source: '3',
      target: '4',
    },
    {
      source: '2',
      target: '5',
    },
    {
      source: '1',
      target: '6',
    },
    {
      source: '1',
      target: '7',
    },
    {
      source: '3',
      target: '8',
    },
    {
      source: '3',
      target: '9',
    },
    {
      source: '5',
      target: '10',
    },
    {
      source: '5',
      target: '11',
    },
  ],
  combos: [
    {
      id: 'A',
      label: 'combo A',
      style: {
        fill: '#C4E3B2',
        stroke: '#C4E3B2',
      },
    },
    {
      id: 'B',
      label: 'combo B',
      style: {
        stroke: '#99C0ED',
        fill: '#99C0ED',
      },
    },
    {
      id: 'C',
      label: 'combo C',
      style: {
        stroke: '#eee',
        fill: '#eee',
      },
    },
  ],
};

data.nodes.forEach((node) => {
  switch (node.ComboId) {
    case 'A':
      node.style = {
        fill: '#C4E3B2',
        stroke: '#aaa',
      };
      break;
    case 'B':
      node.style = {
        fill: '#99C0ED',
        stroke: '#aaa',
      };
      break;
    case 'C':
      node.style = {
        fill: '#eee',
        stroke: '#aaa',
      };
      break;
    default:
      node.style = {
        fill: '#FDE1CE',
        stroke: '#aaa',
      };
      break;
  }
});

export default data;
