import { Layout, Layouts } from '@antv/layout/lib/layout/layout';
import { RandomLayout } from '@antv/layout/lib/layout/random';
import { registerLayout, unRegisterLayout } from '@antv/layout/lib/registy';

// 默认提供 random 布局
registerLayout('random', RandomLayout);

export { Layout, Layouts, registerLayout, unRegisterLayout };
