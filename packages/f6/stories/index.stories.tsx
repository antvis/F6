import { Meta } from '@storybook/react/types-6-0';

import NodeDemo from './graphTest';
import TreeDemo from './treeTest';

export default {
  title: 'Example',
} as Meta;

export const nodeDemo = (args) => <NodeDemo {...args} />;
export const treeDemo = (args) => <TreeDemo {...args} />;
