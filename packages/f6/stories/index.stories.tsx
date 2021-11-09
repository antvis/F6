import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import FruchtermanDemo from './fruchterman';
import CollapseSlibingDemo from './interactive/collapseSlibing';
import DagreConfigurationTranslateDemo from './generalGraph/dagreConfigurationTranslate';
import MindMapDemo from './sceneCase/mindMap';
import UITest from './uiTest';
import SnapLineDemo from './snapLine';
import PluginTooltipDemo from './pluginTooltip';
import PluginLegendDemo from './pluginLegend';
import PluginZoomSliderDemo from './pluginZoomSlider';
import PluginEdgeFilterDemo from './pluginEdgeFilter';
import PluginFisheyeDemo from './pluginFisheye';
import PluginMniMapDemo from './pluginMiniMap';
import PluginBundlingDemo from './pluginBundling';
import MenuDemo from './pluginMenu';
import NodeDemo from './nodeDemo';


export default {
  title: 'Example',
} as Meta;

export const CollapseSlibing = ((args) => <CollapseSlibingDemo {...args} />).bind({});
export const MindMap = ((args) => <MindMapDemo {...args} />).bind({});
export const DagreConfigurationTranslate = ((args) => (
  <DagreConfigurationTranslateDemo {...args} />
)).bind({});
export const fruchterman = (args) => <FruchtermanDemo {...args} />;

export const uiTest = (args) => <UITest {...args} />;
export const SnapLine = (args) => <SnapLineDemo {...args} />;

export const PluginTooltip = (args) => <PluginTooltipDemo {...args} />;
export const PluginLegend = (args) => <PluginLegendDemo {...args} />;
export const PluginZoomSlider = (args) => <PluginZoomSliderDemo {...args} />;
export const PluginEdgeFilter = (args) => <PluginEdgeFilterDemo {...args} />;

export const PluginFisheye = (args) => <PluginFisheyeDemo {...args} />;

// mini map
export const PluginMniMap = (args) => <PluginMniMapDemo { ...args }/>

export const PluginBundling = (args) => <PluginBundlingDemo { ...args }/>

export const PluginMenu = (args) => <MenuDemo { ...args }/>

export const nodeDemo = (args) => <NodeDemo { ...args }/>

