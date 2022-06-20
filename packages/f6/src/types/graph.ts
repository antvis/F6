import { Node } from '../item/node/node';
import { Padding } from './base';
import { ComboConfig, EdgeConfig, Item, NodeConfig, StateStyles } from './item';
import { ShapeStyle } from './shape';

export interface LooseObject {
  [key: string]: any;
}

export type ID = string | number;

export interface LayoutConfig {
  type?: string;
  gpuEnabled?: boolean;
  workerEnabled?: boolean;
  // 只有当 workerEnabled 为 true 时才生效
  workerScriptURL?: string;
  onLayoutEnd?: () => void;
}

export interface GraphOptions {
  /**
   * 图的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象
   */
  container: string | HTMLElement;
  /**
   * 指定画布宽度，单位为 'px'，可选，默认为容器宽度
   */
  width?: number;
  /**
   * 指定画布高度，单位为 'px'，可选，默认为容器宽度
   */
  height?: number;
  /**
   * renderer canvas or svg
   */
  renderer?: string;

  fitView?: boolean;

  fitCenter?: boolean;

  layout?: LayoutConfig;

  /**
   * 图适应画布时，指定四周的留白。
   * 可以是一个值, 例如：fitViewPadding: 20
   * 也可以是一个数组，例如：fitViewPadding: [20, 40, 50,20]
   * 当指定一个值时，四边的边距都相等，当指定数组时，数组内数值依次对应 上，右，下，左四边的边距。
   */
  fitViewPadding?: Padding;
  /**
   * 各种元素是否在一个分组内，决定节点和边的层级问题，默认情况下所有的节点在一个分组中，所有的边在一个分组中，当这个参数为 false 时，节点和边的层级根据生成的顺序确定。
   * 默认值：true
   */
  groupByTypes?: boolean;

  // 是否有向图
  directed?: boolean;

  groupStyle?: {
    style?: {
      [key: string]: ShapeStyle;
    };
  };

  /**
   * 当图中元素更新，或视口变换时，是否自动重绘。建议在批量操作节点时关闭，以提高性能，完成批量操作后再打开，参见后面的 setAutoPaint() 方法。
   * 默认值：true
   */
  autoPaint?: boolean;

  /**
   * 设置画布的模式。详情可见G6中的Mode文档。
   */
  modes?: Modes;

  /**
   * 默认状态下节点的配置，比如 type, size, color。会被写入的 data 覆盖。
   */
  defaultNode?: Partial<{
    type: string;
    size: number | number[];
    color: string;
  }> &
    ModelStyle;

  /**
   * 默认状态下边的配置，比如 type, size, color。会被写入的 data 覆盖。
   */
  defaultEdge?: Partial<{
    type: string;
    size: number | number[];
    color: string;
  }> &
    ModelStyle;

  /**
   * Combo 默认配置
   */
  defaultCombo?: Partial<{
    type: string;
    size: number | number[];
    color: string;
  }> &
    ModelStyle;

  nodeStateStyles?: StateStyles;

  edgeStateStyles?: StateStyles;

  // Combo 状态样式
  comboStateStyles?: StateStyles;

  /**
   * 向 graph 注册插件。插件机制请见：plugin
   */
  plugins?: any[];
  /**
   * 是否启用全局动画。
   */
  animate?: boolean;

  /**
   * 动画配置项，仅在animate为true时有效。
   */
  // animateCfg?: GraphAnimateConfig;
  /**
   * 最小缩放比例
   * 默认值 0.2
   */
  minZoom?: number;
  /**
   * 最大缩放比例
   * 默认值 10
   */
  maxZoom?: number;

  groupType?: string;

  /**
   * Edge 是否连接到节点中间
   */
  linkCenter?: boolean;

  /**
   * 是否启用 stack，即是否开启 redo & undo 功能
   */
  enabledStack?: boolean;

  /**
   * redo & undo 最大步数, 只有当 enabledStack 为 true 时才起作用
   */
  maxStep?: number;

  /**
   * 存储图上的 tooltip dom，方便销毁
   */
  tooltips?: [];

  pixelRatio?: number;
}

export type Easeing =
  | 'easeLinear'
  | 'easePolyIn'
  | 'easePolyOut'
  | 'easePolyInOut'
  | 'easeQuad'
  | 'easeQuadIn'
  | 'easeQuadOut'
  | 'easeQuadInOut'
  | string;

export interface LayoutConfig {
  type?: string;
  gpuEnabled?: boolean;
  workerEnabled?: boolean;
  // 只有当 workerEnabled 为 true 时才生效
  workerScriptURL?: string;
  onLayoutEnd?: () => void;
  [key: string]: unknown;
}

export interface ModeOption {
  type: string;
  delegate?: boolean;
  delegateStyle?: object;
  updateEdge?: boolean;
  trigger?: string;
  enableDelegate?: boolean;
  maxZoom?: number;
  minZoom?: number;
  enableOptimize?: boolean;
  enableDebounce?: boolean;
  allowDragOnItem?: boolean;
  optimizeZoom?: number;
  multiple?: boolean;
  activeState?: string;
  inactiveState?: string;
  comboActiveState?: string;
  selectedState?: string;
  onlyChangeComboSize?: boolean;
  includeEdges?: boolean;
  direction?: 'x' | 'y';
  scalableRange?: number;
  offset?: number;
  sensitivity?: number;
  fixSelectedItems?: Partial<{
    fixAll: boolean;
    fixLineWidth: boolean;
    fixLabel: boolean;
    fixState: string;
  }>;
  key?: string | undefined;
  edgeConfig?: EdgeConfig;
  functionName?: string;
  functionParams?: any[];
  relayout?: boolean;
  brushStyle?: object;
  zoomKey?: 'shift' | 'ctrl' | 'alt' | 'control';
  shouldUpdate?: (e) => boolean;
  shouldBegin?: (e) => boolean;
  shouldEnd?: (e) => boolean;
  onChange?: (item?: Item, judge?: boolean) => unknown;
  onSelect?: (selectedNodes?: Item[], selectedEdges?: Item[]) => unknown;
  onDeselect?: (selectedNodes?: Item[], selectedEdges?: Item[]) => unknown;
  formatText?: (data: { [key: string]: unknown }) => string;
}

export type ModeType = string | ModeOption;

export interface Modes {
  default?: ModeType[];
  [key: string]: ModeType[] | undefined;
}

// model types (node edge group)
export type ModelStyle = Partial<{
  [key: string]: unknown;
  style: ShapeStyle;
  stateStyles: StateStyles;
}>;

export interface IAlgorithmCallbacks {
  enter?: (param: { current: Node; previous: Node }) => void;
  leave?: (param: { current: Node; previous?: Node }) => void;
  allowTraversal?: (param: { previous?: Node; current?: Node; next: Node }) => boolean;
}

export interface GraphData {
  nodes?: NodeConfig[];
  edges?: EdgeConfig[];
  combos?: ComboConfig[];
  [key: string]: any;
}