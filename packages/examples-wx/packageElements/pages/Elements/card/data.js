export default {
  nodes: [
    {
      name: 'cardNodeApp',
      ip: '127.0.0.1',
      nodeError: true,
      dataType: 'root',
      keyInfo: 'this is a card node info',
      x: 100,
      y: 50,
    },
    {
      name: 'cardNodeApp',
      ip: '127.0.0.1',
      nodeError: false,
      dataType: 'subRoot',
      keyInfo: 'this is sub root',
      x: 100,
      y: 150,
    },
    {
      name: 'cardNodeApp',
      ip: '127.0.0.1',
      nodeError: false,
      dataType: 'subRoot',
      keyInfo: 'this is sub root',
      x: 100,
      y: 250,
      children: [
        {
          name: 'sub',
        },
      ],
    },
  ],
  edges: [],
};
