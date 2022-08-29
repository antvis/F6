import { registerNode } from '../../factory';
import { BaseNode } from './base';
import { SimpleCircle } from './circle';
import { SimpleRect } from './rect';

export { BaseNode };

registerNode('circle', SimpleCircle);
registerNode('rect', SimpleRect);
