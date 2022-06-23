import CircularLayoutDemo from './circularLayout';
import ConcentricLayoutDemo from './concentricLayout';
import DargeDemo from './darge';
import ForceDemo from './force';
import FruchtermanLayoutDemo from './fruchtermanLayout';
import GridLayoutDemo from './gridLayout';
import LayoutChangeDemo from './layoutChange';
import MdsLayoutDemo from './mdsLayout';
import RadialLayoutDemo from './radialLayout';

export default {
  title: 'Example/Layout',
};

export const Force = (args) => <ForceDemo {...args} />;
export const Darge = (args) => <DargeDemo {...args} />;
export const CircularLayout = (args) => <CircularLayoutDemo {...args} />;
export const ConcentricLayout = (args) => <ConcentricLayoutDemo {...args} />;
export const FruchtermanLayout = (args) => <FruchtermanLayoutDemo {...args} />;
export const GridLayout = (args) => <GridLayoutDemo {...args} />;
export const MdsLayout = (args) => <MdsLayoutDemo {...args} />;
export const RadialLayout = (args) => <RadialLayoutDemo {...args} />;
export const LayoutChange = (args) => <LayoutChangeDemo {...args} />;
