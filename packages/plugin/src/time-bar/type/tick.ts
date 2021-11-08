import { ShapeStyle } from '@antv/f6-core';
import { TimeBarData } from './time-bar';

export interface TimeBarTickOption {
  // position size
  readonly width?: number;
  readonly padding?: number | string;
  readonly tickBoxHeight?: number;

  // styles
  readonly selectedTickStyle?: ShapeStyle;
  readonly unSelectedTickStyle?: ShapeStyle;
  readonly tooltipBackgroundColor?: string; // todo

  readonly tickLabelStyle?: ShapeStyle;
  readonly tickLineStyle?: ShapeStyle;

  readonly start?: number;
  readonly end?: number;

  // 自定义标签格式化函数
  readonly tickLabelFormatter?: (d: any) => string | boolean;
  // 自定义 tooltip 内容格式化函数
  readonly tooltipFomatter?: (d: any) => string;
}

export interface TimeBarTickContext {
  data: TimeBarData[];
  width: number;
  padding: string | number;
  selectedFill: string;
  unSelectFill: string;
  gap: number;
  tickBoxHeight: number;
  lineStyle: ShapeStyle;
  textStyle: ShapeStyle;
  tickWidth: number;
  count: number;
  start: number;
  end: number;
  selects: any[];
  tickBoxs: any;
}
