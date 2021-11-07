import { createUI } from '@antv/f6-ui';
import createControlbar from './control-bar';
import {
  createSimpleProgressBar,
  createTickProgressBar,
  createTrendProgressBar,
} from './progress-bar';
import { SimpleTimeBarOption, TickTimeBarOption, TrendTimeBarOption } from '../type/time-bar';

/**
 * 创建简单模式的时间轴
 */
export function createSimpleTimeBarUI({
  width = 0,
  padding = 0,
  group,
  data = [],
  slider = {},
  controllerCfg = {},
  sliderTick = {},
}: SimpleTimeBarOption) {
  const timeBar = createSimpleProgressBar({
    data,
    width,
    slider: {
      width: slider.width || width - padding * 2, // 实际padding
      paddingTop: 0,
      ...slider,
    },
    sliderTick: {
      width: width - padding * 2,
      ...sliderTick,
    },
  });
  return createTimeBarUI(
    { width, group, control: { wrapperWidth: width, ...controllerCfg } },
    timeBar,
  );
}

/**
 * 创建刻度模式时间轴
 */
export function createTickUI({
  group,
  data = [],
  width,
  padding,
  controllerCfg = {},
  tick = {},
}: TickTimeBarOption) {
  // 创建刻度progressBar
  const tickBar = createTickProgressBar({
    data,
    tick: {
      width: width - padding,
      ...tick,
    },
  });

  return createTimeBarUI(
    { width, group, control: { wrapperWidth: width, ...controllerCfg } },
    tickBar,
  );
}

/**
 * 创建趋势时间轴
 */
export function createTrendUI({
  width = 0,
  padding = 0,
  group,
  data = [],
  slider = {},
  controllerCfg = {},
  trend = {},
  sliderTick = {},
}: TrendTimeBarOption) {
  // 创建progressBar
  const progressBar = createTrendProgressBar({
    data,
    width,
    slider: {
      width: slider.width || width - padding * 2, // 实际padding
      paddingTop: 0,
      ...(slider || {}),
    },
    sliderTick: {
      width: width - padding * 2,
      ...(sliderTick || {}),
    },
    trend: { data: data?.map((item) => item.value), ...(trend || {}) },
  });
  // 创建TimeBar
  const timeBar = createTimeBarUI(
    { width, group, control: { wrapperWidth: width, ...controllerCfg } },
    progressBar,
  );
  return timeBar;
}

/**
 * 时间轴创建函数
 * @param param
 * @param progressBar // 进度条部分
 * @returns
 */
function createTimeBarUI({ width, group, control }, progressBar) {
  const html = `<root></root>`;
  const css = `
  root {
    /** 盒模型 **/
    width: ${width};
    /** flex **/
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
`;
  const uiTree = createUI(html, css, group);
  const controlBar = createControlbar(control);
  uiTree.appendChild(progressBar, controlBar);
  return uiTree;
}
