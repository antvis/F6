import { Meta } from '@storybook/react/types-6-0';
import Card from './card';
import Cicle from './circle';

export default {
  title: 'Example/Node',
} as Meta;

export const CicleDemo = (args) => <Cicle {...args} />;
export const CardDemo = (args) => <Card {...args} />;
