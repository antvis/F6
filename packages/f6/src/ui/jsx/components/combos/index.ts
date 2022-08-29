import { BaseCombo } from './base';
import { Circle } from './circle';
import { Rect } from './rect';
import { registerCombo } from '../../factory';

export { BaseCombo };

registerCombo('circle', Circle);
registerCombo('rect', Rect);
