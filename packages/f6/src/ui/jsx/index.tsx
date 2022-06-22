import { registerTag } from '@antv/f-engine';
import { Marker } from '../adapter/marker';
import { ArrowPath } from '../adapter/path';

registerTag('marker', Marker);
registerTag('arrowPath', ArrowPath);

export * from './canvas';
export { BaseCombo, registerCombo } from './components/combos';
export { BaseEdge, registerEdge } from './components/edges';
export { BaseNode, registerNode } from './components/nodes';
export * from './graph';
export * from './treeGraph';
