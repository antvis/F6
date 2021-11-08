const colorArr = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#6F5EF9',
  '#6DC8EC',
  '#D3EEF9',
  '#DECFEA',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED',
  '#CDDDFD',
  '#CDF3E4',
  '#CED4DE',
  '#FCEBB9',
  '#D3CEFD',
  '#945FB9',
  '#FF9845',
];

const rawData = [
  {
    label: 'A',
    id: 'A',
    to: [
      {
        target: 'C',
        value: 200,
      },
    ],
  },
  {
    label: 'B',
    id: 'B',
    to: [
      {
        target: 'C',
        value: 400,
      },
    ],
  },
  {
    label: 'C',
    id: 'C',
    to: [
      {
        target: 'D',
        value: 300,
      },
      {
        target: 'E',
        value: 300,
      },
    ],
  },
  {
    label: 'D',
    id: 'D',
    to: [
      {
        target: 'F',
        value: 100,
      },
      {
        target: 'G',
        value: 200,
      },
    ],
  },
  {
    label: 'E',
    id: 'E',
    to: [
      {
        target: 'F',
        value: 200,
      },
      {
        target: 'G',
        value: 100,
      },
    ],
  },
  {
    label: 'F',
    id: 'F',
  },
  {
    label: 'G',
    id: 'G',
  },
];

const dataTransform = (data) => {
  const nodes = [];
  const edges = [];
  const nodeRecvMap = {};

  data.forEach((node, i) => {
    const { id, label, color = colorArr[i % colorArr.length], to = [] } = node;

    let index = 0;
    to.forEach((rel) => {
      edges.push({
        source: id,
        target: rel.target,
        value: rel.value,
        color,
        sourceIndex: index,
        targetIndex: nodeRecvMap[rel.target] || 0,
      });
      index += rel.value || 0;
      if (rel.value) {
        nodeRecvMap[rel.target] = (nodeRecvMap[rel.target] || 0) + rel.value;
      }
    });
    nodes.push({
      id,
      label,
      color,
      outSize: index,
    });
  });

  nodes.forEach((node) => {
    node.inSize = nodeRecvMap[node.id] || 0;
    node.size = [4, Math.max(4, node.inSize, node.outSize)];
  });

  return {
    nodes,
    edges,
  };
};
const result = dataTransform(rawData);
export default result;
