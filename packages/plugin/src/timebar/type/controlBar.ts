import { ShapeStyle } from '@antv/f6-core';

export type ControllerCfg = Partial<{
  readonly wrapperWidth: number;
  readonly contentWidth: number;
  readonly height: number;
  /** 控制器背景的颜色和描边色 */
  readonly fill?: string;
  readonly stroke?: string;
  /** 整个控制栏的字体样式，优先级低于各个子控制器的 text 内的 fontFamily */
  readonly fontFamily?: string;

  /** 控制栏缩放比例 */
  readonly scale?: number;

  /** 播放速度，1 个 tick 花费时间 */
  readonly speed?: number;
  /** 是否循环播放 */
  // readonly loop?: boolean;
  // readonly hideTimeTypeController: boolean;

  /** ‘上一帧’按钮的样式，同时可以为其配置 scale、offsetX、offsetY 单独控制该控制器的缩放以及平移 */
  readonly preBtnStyle?: ShapeStyle;
  /** ‘下一帧’按钮的样式，同时可以为其配置 scale、offsetX、offsetY 单独控制该控制器的缩放以及平移 */
  readonly nextBtnStyle?: ShapeStyle;
  /** ‘播放’ 与 ‘暂停’ 按钮的样式，同时可以为其配置 scale、offsetX、offsetY 单独控制该控制器的缩放以及平移 */
  readonly playBtnStyle?: ShapeStyle;

  // /** 播放时间类型切换器单一文本时的文本，默认为‘单一时间’ */
  // readonly timePointControllerText?: string;
  // /** 播放时间类型切换器单一文本时的文本，默认为‘时间范围’ */
  // readonly timeRangeControllerText?: string;
}>;
