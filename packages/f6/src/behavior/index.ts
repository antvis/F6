// @ts-nocheck
import { BehaviorService } from './behaviorService';
import { ClickSelect } from './click-select';
import { CollapseExpand } from './collapse-expand';
import { DragCanvas } from './drag-canvas';
import { DragCombo } from './drag-combo';
import { DragNode } from './drag-node';
import { ZoomCanvas } from './zoom-canvas';

BehaviorService.registerBehavior('drag-canvas', DragCanvas);
BehaviorService.registerBehavior('drag-node', DragNode);
BehaviorService.registerBehavior('drag-combo', DragCombo);
BehaviorService.registerBehavior('collapse-expand', CollapseExpand);
BehaviorService.registerBehavior('click-select', ClickSelect);
BehaviorService.registerBehavior('zoom-canvas', ZoomCanvas);

export * from './base';
export * from './behaviorService';
