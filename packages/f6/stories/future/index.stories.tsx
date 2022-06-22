import { Meta } from '@storybook/react/types-6-0';
import Physic from './physic';
import ThreeD from './three';

export default {
  title: 'Example/Fulture',
} as Meta;

export const Demo3D = (args) => <ThreeD {...args} />;
export const PhysicDemo = (args) => <Physic {...args} />;
