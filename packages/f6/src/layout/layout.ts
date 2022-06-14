import { Layout, Layouts } from '@antv/layout/lib/layout/layout';
import { registerLayout, unRegisterLayout } from '@antv/layout/lib/registy';
import { RandomLayout } from '@antv/layout/lib/layout/random';
import { ForceLayout, DagreLayout } from '@antv/layout/lib/layout';

// 默认提供 random 布局
registerLayout('random', RandomLayout);
registerLayout('force', ForceLayout);

export { Layout, Layouts, registerLayout, unRegisterLayout };
