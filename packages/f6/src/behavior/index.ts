// @ts-nocheck
import { BehaviorService } from './behaviorService';
import { DragCanvas } from './drag-canvas';
import { DragCombo } from './drag-combo';
import { DragNode } from './drag-node';
import { CollapseExpand } from './collapse-expand';
import { ClickSelect } from './click-select';

BehaviorService.registerBehavior('drag-canvas', DragCanvas);
BehaviorService.registerBehavior('drag-node', DragNode);
BehaviorService.registerBehavior('drag-combo', DragCombo);
BehaviorService.registerBehavior('collapse-expand', CollapseExpand);
BehaviorService.registerBehavior('click-select', ClickSelect);

export * from './base';
export * from './behaviorService';
