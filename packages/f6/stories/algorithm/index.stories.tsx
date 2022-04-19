import React, { useEffect } from 'react';
import DFSDemo from './dfs';
import ShortestPathDemo from './shortestPath';

export default {
  title: 'Example/Algorithm',
};

export const DFS = (args) => <DFSDemo {...args} />;
export const ShortestPath = (args) => <ShortestPathDemo {...args} />;
