import { Combo } from '../item/combo/combo';
import { Edge } from '../item/edge/edge';
import { Node } from '../item/node/node';
import { IPoint, Point } from './base';
import { ID } from './graph';
import { ShapeStyle } from './shape';

export type Item = Node | Edge | Combo;

export interface StateStyles {
  [key: string]:
    | ShapeStyle
    | {
        [key: string]: ShapeStyle;
      };
}

export type NodeIdxMap = {
  [key: string]: number;
};

// model types (node edge group)
export interface BaseItemModel {
  id?: ID;
  size?: number | Array<number>;
  visible?: boolean;
  style?: ShapeStyle;
  stateStyles?: StateStyles;
  states?: string[];
}

export interface LabelStyle {
  rotate?: number;
  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right';
  angle?: number;
  x?: number;
  y?: number;
  text?: string;
  stroke?: string | null;
  opacity?: number;
  fontSize?: number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fill?: string | null;
  rotateCenter?: string;
  lineWidth?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  position?: string;
  textBaseline?: 'top' | 'middle' | 'bottom' | 'hanging' | 'alphabetic' | 'ideographic';
  offset?: number;
  background?: {
    fill?: string;
    stroke?: string;
    lineWidth?: number;
    radius?: number[] | number;
    padding?: number[] | number;
  };
}

export interface ModelConfig extends BaseItemModel {
  // 节点或边的类型
  type?: string;
  label?: string | LabelStyle;
  labelCfg?: ILabelConfig;
  x?: number;
  y?: number;
  size?: number | number[];
  color?: string;
  anchorPoints?: number[][];
  startPoint?: {
    x: number;
    y: number;
  };
  endPoint?: {
    x: number;
    y: number;
  };
}

export interface NodeConfig extends ModelConfig {
  id: string;
  groupId?: string;
  comboId?: string;
  parent?: NodeConfig;
  children?: NodeConfig[];
  description?: string;
  descriptionCfg?: {
    style?: object;
    [key: string]: any;
  };
  img?: string;
  innerR?: number;
  direction?: string;
  preRect?: {
    show?: boolean;
    [key: string]: any;
  };
  logoIcon?: {
    show?: boolean;
    [key: string]: any;
  };
  stateIcon?: {
    show?: boolean;
    [key: string]: any;
  };
  linkPoints?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    size?: number;
    lineWidth?: number;
    fill?: string;
    stroke?: string;
    r?: number;
    [key: string]: any;
  };
  icon?: {
    show?: boolean;
    // icon的地址，字符串类型
    img?: string;
    text?: string;
    width?: number;
    height?: number;
    offset?: number;
  };
  clipCfg?: {
    show?: boolean;
    type?: string;
    // circle
    r?: number;
    // ellipse
    rx?: number;
    ry?: number;
    // rect
    width?: number;
    height?: number;
    // polygon
    points?: number[][];
    // path
    path?: Array<Array<string | number>>;
    // 坐标
    x?: number;
    y?: number;
    // clip 的属性样式
    // style?: ShapeStyle
  };
}

export interface ComboConfig extends ModelConfig {
  id: string;
  parentId?: string;
  depth?: number;
  padding?: number | number[];
  combos?: Array<ComboConfig>;
  nodes?: Array<NodeConfig>;
  children?: Array<ComboConfig | NodeConfig>;
  collapseIcon?: Partial<{
    show: boolean;
    collapseSymbol: any;
    expandSymbol: any;
    r: number;
    lineWidth: number;
    stroke: string;
    offsetX: number;
    offsetY: number;
  }>;
}

export type LoopConfig = Partial<{
  dist: number;
  position: string;
  // 如果逆时针画，交换起点和终点
  clockwise: boolean;
}>;

export interface EdgeConfig extends ModelConfig {
  source?: string;
  target?: string;
  sourceNode?: Node;
  targetNode?: Node;
  startPoint?: Point;
  endPoint?: Point;
  controlPoints?: Point[];
  curveOffset?: number | number[];
  minCurveOffset?: number | number[];
  // loop edge config
  loopCfg?: LoopConfig;
  labelCfg?: ILabelConfig;
  curvePosition?: number | number[];
}

export type ILabelConfig = Partial<{
  position: string;
  offset: number;
  refX: number;
  refY: number;
  autoRotate: boolean;
  style: LabelStyle;
}>;

export interface BubblesetCfg {
  morphBuffer?: number; // DEFAULT_NODE_R0; the amount of space to move the virtual edge when wrapping around obstacles
  pixelGroupSize?: number; // the resolution of the algorithm in square pixels, 4 by default
  maxMarchingIterations?: number; // number of times to refine the boundary, 100 by default
  maxRoutingIterations?: number; // number of times to run the algorithm to refine the path finding in difficult areas
  nodeR0?: number; // the distance from nodes which energy is 1 (full influence)
  nodeR1?: number; // the distance from nodes at which energy is 0 (no influence)
  edgeR0?: number; // the distance from edges at which energy is 1 (full influence)
  edgeR1?: number; // the distance from edges at which energy is 0 (no influence)
  nodeInfluenceFactor?: number; // node influence factor
  negativeNodeInfluenceFactor?: number; // negativeNode influence factor
  edgeInfluenceFactor?: number; // edge influence factor
  memberInfluenceFactor?: number; // member influence factor
  nonMemberInfluenceFactor?: number; // nonMember influence factor
}

export type TimeBarType = 'trend' | 'simple' | 'tick';

export interface HullCfg {
  id: string;
  members?: ID[] | string[]; // 节点实例或节点 Id 数组
  nonMembers?: ID[] | string[];
  type?: string; // 'round-convex'(圆角凸包) /'smooth-convex'(平滑凸包) / 'bubble'(平滑凹包),
  padding?: number; // 轮廓边缘和内部成员间距
  style?: {
    fill?: string;
    stroke?: string;
    opacity?: number;
  };
  bubbleCfg?: BubblesetCfg; // 用于更精细控制bubble的效果（点和边轮廓的松弛程度，轮廓粒度），一般不需要配置
  update?: string;
}

export type EdgeData = EdgeConfig & {
  sourceNode: Node;
  targetNode: Node;
  startPoint: IPoint;
  endPoint: IPoint;
};
