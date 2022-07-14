export default {
  isRoot: true,
  id: 'Root',
  cluster: 'c0',
  type: 'circle',
  children: [
    {
      type: 'circle',
      id: 'SubTreeNode1',
      cluster: 'c0',
      raw: {},
      // collapsed: true,

      children: [
        {
          type: 'circle',
          id: 'SubTreeNode1.1',
          cluster: 'c1',
        },
        {
          type: 'circle',
          id: 'SubTreeNode1.2',
          cluster: 'c1',
          children: [
            {
              type: 'circle',
              id: 'SubTreeNode1.2.1',
              cluster: 'c0',
            },
            {
              type: 'circle',
              id: 'SubTreeNode1.2.2',
              cluster: 'c0',
            },
            {
              type: 'circle',
              id: 'SubTreeNode1.2.3',
              cluster: 'c1',
            },
          ],
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode2',
      cluster: 'c0',

      children: [
        {
          type: 'circle',
          id: 'SubTreeNode2.1',
          cluster: 'c2',
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode3',
      cluster: 'c0',
      children: [
        {
          type: 'circle',
          id: 'SubTreeNode3.1',
          cluster: 'c2',
        },
        {
          type: 'circle',
          id: 'SubTreeNode3.2',
          cluster: 'c2',
        },
        {
          type: 'circle',
          id: 'SubTreeNode3.3',
          cluster: 'c2',
        },
      ],
    },
    {
      type: 'circle',
      id: 'SubTreeNode4',
      cluster: 'c1',
    },
    {
      type: 'circle',
      id: 'SubTreeNode5',
      cluster: 'c1',
    },
    {
      type: 'circle',
      id: 'SubTreeNode6',
      cluster: 'c1',
    },
  ],
};
