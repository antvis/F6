import { ext, mat3 } from '@antv/matrix-util';
import * as BaseUtil from './base';
import * as ColorUtil from './color';
import * as GraphicUtil from './graphic';
import * as LayoutUtil from './layout';
import * as MathUtil from './math';
import * as PathUtil from './path';
import * as PlatformUtil from './platform';

const transform = ext.transform;

const Util = {
  ...BaseUtil,
  ...GraphicUtil,
  ...PathUtil,
  ...MathUtil,
  ...ColorUtil,
  ...LayoutUtil,
  ...PlatformUtil,
  transform,
  mat3,
};
export default Util;
