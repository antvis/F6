import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FruchtermanDemo } from './fruchterman';
import CollapseSlibingDemo from './interactive/collapseSlibing';

export default {
  title: 'Example',
} as Meta;

export const CollapseSlibing = ((args) => <CollapseSlibingDemo {...args} />).bind({});
export const fruchterman = (args) => <FruchtermanDemo {...args} />;
