import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import FruchtermanDemo from './fruchterman';
import CollapseSlibingDemo from './interactive/collapseSlibing';
import DagreConfigurationTranslateDemo from './generalGraph/dagreConfigurationTranslate';
import MindMapDemo from './sceneCase/mindMap';
import UITest from './uiTest';

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
