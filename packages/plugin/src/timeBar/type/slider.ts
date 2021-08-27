import { ShapeStyle } from '@antv/f6-core';

export type SliderOption = Partial<{
  readonly width?: number;
  readonly height?: number;
  readonly backgroundStyle?: ShapeStyle;
  readonly foregroundStyle?: ShapeStyle;
  // 滑块样式
  readonly handlerStyle?: ShapeStyle;
  readonly textStyle?: ShapeStyle;
  // 初始位置
  readonly start: number;
  readonly end: number;
}>;

export interface SliderProgressBar {
  slider: SliderOption;
}

export interface Interval {
  data: number[];
  style: ShapeStyle;
}

export interface TrendConfig {
  // 数据
  readonly data?: number[];
  // 样式
  readonly smooth?: boolean;
  // readonly isArea?: boolean;

  readonly lineStyle?: ShapeStyle;
  // readonly areaStyle?: ShapeStyle;
  // readonly interval?: Interval;
}

export interface SliderTick {
  width?: number;
  lineStyle?: ShapeStyle;
  textStyle?: ShapeStyle;
}
