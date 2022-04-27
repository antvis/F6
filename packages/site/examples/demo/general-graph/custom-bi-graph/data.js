export default {
  nodes: [
    {
      id: '0',
      label: 'A',
      cluster: 'part1',
    },
    {
      id: '1',
      label: 'B',
      cluster: 'part1',
    },
    {
      id: '2',
      label: 'C',
      cluster: 'part1',
    },
    {
      id: '3',
      label: 'D',
      cluster: 'part1',
    },
    {
      id: '4',
      label: 'E',
      cluster: 'part1',
    },
    {
      id: '5',
      label: 'F',
      cluster: 'part1',
    },
    {
      id: '6',
      label: 'a',
      cluster: 'part2',
    },
    {
      id: '7',
      label: 'b',
      cluster: 'part2',
    },
    {
      id: '8',
      label: 'c',
      cluster: 'part2',
    },
    {
      id: '9',
      label: 'd',
      cluster: 'part2',
    },
  ],
  edges: [
    {
      source: '0',
      target: '6',
    },
    {
      source: '0',
      target: '7',
    },
    {
      source: '0',
      target: '9',
    },
    {
      source: '1',
      target: '6',
    },
    {
      source: '1',
      target: '9',
    },
    {
      source: '1',
      target: '7',
    },
    {
      source: '2',
      target: '8',
    },
    {
      source: '2',
      target: '9',
    },
    {
      source: '2',
      target: '6',
    },
    {
      source: '3',
      target: '8',
    },
    {
      source: '4',
      target: '6',
    },
    {
      source: '4',
      target: '7',
    },
    {
      source: '5',
      target: '9',
    },
  ],
};
