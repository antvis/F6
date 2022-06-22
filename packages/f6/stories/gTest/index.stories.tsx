import { Meta } from '@storybook/react/types-6-0';

import GTest from './graphTest';

export default {
  title: 'Example/GTest',
} as Meta;

export const GTestDemo = (args) => <GTest {...args} />;
