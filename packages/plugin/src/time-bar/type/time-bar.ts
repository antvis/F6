import { IGroup } from '@antv/g-base';
import { ControllerCfg } from './control-bar';
import { SliderOption, SliderTick, TrendConfig } from './slider';
import { TimeBarTickOption } from './tick';

export interface TimeBarData {
  date: number;
  value: number;
}

export type TimeBarType = 'trend' | 'simple';

export interface TrendTimeBarOption {
  group: IGroup;
  width?: number;
  padding?: number;
  data?: TimeBarData[];
  slider?: SliderOption;
  controllerCfg?: ControllerCfg;
  trend: TrendConfig;
  sliderTick?: SliderTick;
}

export interface SimpleTimeBarOption {
  group: IGroup;
  width?: number;
  padding?: number;
  data?: TimeBarData[];
  slider?: SliderOption;
  controllerCfg?: ControllerCfg;
  sliderTick?: SliderTick;
}

export interface TickTimeBarOption {
  group: IGroup;
  width?: number;
  padding?: number;
  data?: TimeBarData[];
  controllerCfg?: ControllerCfg;
  tick: TimeBarTickOption;
}
