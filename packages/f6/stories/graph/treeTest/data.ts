export default {
  isRoot: true,
  id: 'Root',
  cluster: 'c0',
  children: [
    // {
    //   id: 'SubTreeNode1',
    //   cluster: 'c0',
    //   raw: {},
    //   // collapsed: true,

    //   children: [
    //     // {
    //     //   id: 'SubTreeNode1.1',
    //     //   cluster: 'c1',
    //     // },
    //     // {
    //     //   id: 'SubTreeNode1.2',
    //     //   cluster: 'c1',
    //       // children: [
    //       //   {
    //       //     id: 'SubTreeNode1.2.1',
    //       //     cluster: 'c0',
    //       //   },
    //       //   {
    //       //     id: 'SubTreeNode1.2.2',
    //       //     cluster: 'c0',
    //       //   },
    //       //   {
    //       //     id: 'SubTreeNode1.2.3',
    //       //     cluster: 'c1',
    //       //   },
    //       // ],
    //     // },
    //   ],
    // },
    {
      id: 'SubTreeNode2',
      cluster: 'c0',

      children: [
        {
          id: 'SubTreeNode2.1',
          cluster: 'c2',
        },
      ],
    },
    {
      id: 'SubTreeNode3',
      cluster: 'c0',
      children: [
        {
          id: 'SubTreeNode3.1',
          cluster: 'c2',
        },
        {
          id: 'SubTreeNode3.2',
          cluster: 'c2',
        },
        // {
        //   id: 'SubTreeNode3.3',
        //   cluster: 'c2',
        // },
      ],
    },
    // {
    //   id: 'SubTreeNode4',
    //   cluster: 'c1',
    // },
    // {
    //   id: 'SubTreeNode5',
    //   cluster: 'c1',
    // },
    // {
    //   id: 'SubTreeNode6',
    //   cluster: 'c1',
    // },
  ],
};
