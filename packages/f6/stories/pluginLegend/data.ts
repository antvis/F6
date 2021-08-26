const data = {
  nodes: [
    {
      id: '1',
      label: '1:type1',
      legendType: 'type1',
    },
    {
      id: '2',
      label: '2:type2',
      legendType: 'type2',
    },
    {
      id: '3',
      label: '3:type1',
      legendType: 'type1',
    },
    {
      id: '4',
      label: '4:type3',
      legendType: 'type3',
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
      legendType: 'eType1',
      label: '1->2:edge-type1',
    },
    {
      source: '1',
      target: '4',
      legendType: 'eType3',
      label: '1->4:edge-type3',
    },
    {
      source: '3',
      target: '4',
    },
    {
      source: '2',
      target: '4',
      legendType: 'eType1',
      label: '2->4:edge-type1',
    },
  ],
};

export default data;
