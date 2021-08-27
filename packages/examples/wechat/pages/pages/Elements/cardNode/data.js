export default {
  nodes: [
    {
      title: 'node1',
      error: true,
      nodeType: 'a',
      id: 'node1',
      nodeLevel: 2,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      x: 100,
      y: 100,
    },
    {
      title: 'node2',
      error: false,
      nodeType: 'b',
      id: 'node2',
      nodeLevel: 0,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      x: 100,
      y: 200,
    },
    {
      title: 'node3',
      error: false,
      nodeType: 'a',
      id: 'node3',
      nodeLevel: 3,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      collapse: true,
      x: 100,
      y: 300,
    },
  ],
};
