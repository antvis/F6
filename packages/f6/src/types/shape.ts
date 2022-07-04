import { DisplayObject } from '@antv/g';
import { Item } from './item';

export interface ArrowConfig {
  d?: number;
  path?: string;
  stroke?: string;
  fill?: string;
}
// Shape types
export type ShapeStyle = Partial<{
  x: number;
  y: number;
  r: number;
  radius: number;
  width: number;
  height: number;
  offset: number | number[];
  stroke: string | null;
  strokeOpacity: number;
  fill: string | null;
  fillOpacity: number;
  lineWidth: number;
  lineAppendWidth: number;
  lineDash: number[];
  path: string | object[];
  points: object[];
  matrix: number[];
  opacity: number;
  size: number | number[];
  endArrow: boolean | ArrowConfig;
  startArrow: boolean | ArrowConfig;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  cursor: string;
  position: string;
  fontSize: number;

  keepVisualSize: boolean;
  // support more properties
  [key: string]: any;
}>;

export interface BBox {
  x: number;
  y: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
  centerX?: number;
  centerY?: number;
}

export interface IBBox extends BBox {
  centerX?: number;
  centerY?: number;
}

export interface SimpleBBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IShape extends DisplayObject {
  item?: Item;
}

export interface IGroup extends DisplayObject {}
