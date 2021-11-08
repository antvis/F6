export default {
  id: 'root',
  label: 'root',
  children: [
    {
      id: 'c1',
      label: 'c1',
      children: [
        {
          id: 'c1-1',
          label: 'c1-1',
        },
        {
          id: 'c1-2',
          label: 'c1-2',
          children: [
            {
              id: 'c1-2-1',
              label: 'c1-2-1',
            },
            {
              id: 'c1-2-2',
              label: 'c1-2-2',
            },
          ],
        },
      ],
    },
    {
      id: 'c2',
      label: 'c2',
    },
    {
      id: 'c3',
      label: 'c3',
      children: [
        {
          id: 'c3-1',
          label: 'c3-1',
        },
        {
          id: 'c3-2',
          label: 'c3-2',
          children: [
            {
              id: 'c3-2-1',
              label: 'c3-2-1',
            },
            {
              id: 'c3-2-2',
              label: 'c3-2-2',
            },
            {
              id: 'c3-2-3',
              label: 'c3-2-3',
            },
          ],
        },
        {
          id: 'c3-3',
          label: 'c3-3',
        },
      ],
    },
  ],
};
