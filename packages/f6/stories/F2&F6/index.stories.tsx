import { Meta } from '@storybook/react/types-6-0';

import F2InF6Demo from './F2InF6';
import F2ToF6Demo from './F2ToF6';

export default {
  title: 'Example/F2&F6',
} as Meta;

export const F2InF6 = (args) => <F2InF6Demo {...args} />;
export const F2ToF6 = (args) => <F2ToF6Demo {...args} />;
