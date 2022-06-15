import { EdgeConfig, EdgeData, IPoint, ModelConfig } from '../../../../types';
import { getLoopCfgs } from '../../../../utils/graphic';
import { Cubic } from './cubic';

export class Loop extends Cubic {
  getPathPoints(cfg: ModelConfig): EdgeData {
    return getLoopCfgs(cfg as EdgeData);
  }
  getControlPoints(cfg: EdgeConfig): IPoint[] | undefined {
    return cfg.controlPoints;
  }
  afterDraw(cfg: EdgeConfig) {
    cfg.controlPoints = undefined;
  }
  afterUpdate(cfg: EdgeConfig) {
    cfg.controlPoints = undefined;
  }
}
