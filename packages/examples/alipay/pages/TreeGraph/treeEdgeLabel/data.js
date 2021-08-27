export default {
  isRoot: true,
  id: 'Root',
  style: {
    fill: 'red',
  },
  children: [
    {
      id: 'SubTreeNode1',
      raw: {},
      children: [
        {
          id: 'SubTreeNode1.1',
        },
        {
          id: 'SubTreeNode1.2',
          children: [
            {
              id: 'SubTreeNode1.2.1',
            },
            {
              id: 'SubTreeNode1.2.2',
            },
            {
              id: 'SubTreeNode1.2.3',
            },
          ],
        },
      ],
    },
    {
      id: 'SubTreeNode2',
      children: [
        {
          id: 'SubTreeNode2.1',
        },
      ],
    },
    {
      id: 'SubTreeNode3',
      children: [
        {
          id: 'SubTreeNode3.1',
        },
        {
          id: 'SubTreeNode3.2',
        },
        {
          id: 'SubTreeNode3.3',
        },
      ],
    },
    {
      id: 'SubTreeNode4',
    },
    {
      id: 'SubTreeNode5',
    },
    {
      id: 'SubTreeNode6',
    },
    {
      id: 'SubTreeNode7',
    },
    {
      id: 'SubTreeNode8',
    },
    {
      id: 'SubTreeNode9',
    },
    {
      id: 'SubTreeNode10',
    },
    {
      id: 'SubTreeNode11',
    },
  ],
};
