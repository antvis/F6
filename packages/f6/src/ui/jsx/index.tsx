import { registerTag } from '@antv/f-engine';
import { Marker } from '../adapter/marker';
import { ArrowPath, ArrowLine } from '../adapter/path';

registerTag('marker', Marker);
registerTag('arrowPath', ArrowPath);
registerTag('arrowLine', ArrowLine);

export * from './canvas';
export { BaseCombo } from './components/combos';
export { BaseEdge } from './components/edges';
export { BaseNode } from './components/nodes';
export * from './graph';
export * from './treeGraph';
export * from './factory';
