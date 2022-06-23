import { Meta } from '@storybook/react/types-6-0';

import RoughDemo from './rough';
import SvgDemo from './svg';
import GraphDemo from './webgl';

export default {
  title: 'Example/Renderer',
} as Meta;

export const webglDemo = (args) => <GraphDemo {...args} />;
export const svgDemo = (args) => <SvgDemo {...args} />;
export const roughDemo = (args) => <RoughDemo {...args} />;
