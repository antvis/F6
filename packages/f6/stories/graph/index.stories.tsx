import { Meta } from '@storybook/react/types-6-0';

import GraphDemo from './graphTest';
import TreeDemo from './treeTest';

export default {
  title: 'Example',
} as Meta;

export const graphDemo = (args) => <GraphDemo {...args} />;
export const treeGraphDemo = (args) => <TreeDemo {...args} />;
