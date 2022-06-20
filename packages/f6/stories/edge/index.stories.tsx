import { Meta } from '@storybook/react/types-6-0';
import PolyLine from './polyline';

export default {
  title: 'Example/Edge',
} as Meta;

export const PolyLineDemo = (args) => <PolyLine {...args} />;
