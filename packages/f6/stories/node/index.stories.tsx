import { Meta } from '@storybook/react/types-6-0';
import Cicle from './circle';

export default {
  title: 'Example/Node',
} as Meta;

export const CicleDemo = (args) => <Cicle {...args} />;
