import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FruchtermanDemo } from './fruchterman';

export default {
  title: 'Example',
} as Meta;

const Template: Story = (args) => <FruchtermanDemo {...args} />;

export const fruchterman = Template.bind({});
export const Default = Template.bind({});
