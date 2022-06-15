export interface Point {
  x: any;
  y: any;
}

export interface IPoint {
  x: number;
  y: number;
  // 获取连接点时使用
  anchorIndex?: number;
}

export type IPointTuple = [number, number];

export type Matrix = number[];

export type Padding = number | string | number[];

export interface IRect extends IPoint {
  width: number;
  height: number;
}

export interface ICircle extends IPoint {
  r: number;
}

export interface IEllipse extends IPoint {
  rx: number;
  ry: number;
}
