// event
export const SLIDER_PLAY = 'SLIDER_PLAY';
export const SLIDER_PAUSE = 'SLIDER_PAUSE';

export const CONTROL_NEXT = 'CONTROL_NEXT';
export const CONTROL_PREV = 'CONTROL_PREV';

export const RANGE_CHANGE = 'RANGE_CHANGE';
export const SPEED_CHANGE = 'SPEED_CHANGE';

// slider
export const BACKGROUND_STYLE = {
  fill: '#416180',
  opacity: 0.05,
};

export const SIMPLE_BACKGROUND_STYLE = {
  fill: '#416180',
  opacity: 0.15,
  radius: 5,
};

export const FOREGROUND_STYLE = {
  fill: '#5B8FF9',
  opacity: 0.3,
  cursor: 'grab',
};

export const TREND_SLIDER_HEIHGT = 24;

export const TREND_HANDLER_STYLE = {
  width: 2,
  height: 26,
  fill: '#1890ff',
  stroke: '#1890ff',
  opacity: 1,
  cursor: 'ew-resize',
  // 高亮的颜色
  highLightFill: '#0050b3',
};

export const SIMPLE_HANDLE_STYLE = {
  fill: '#fff',
  stroke: '#1890ff',
  radius: 15,
  opacity: 1,
  lineWidth: 2,
  cursor: 'ew-resize',
};

// sliderTick
export const TEXT_STYLE = {
  textBaseline: 'middle',
  fill: '#000',
  opacity: 0.45,
  fontSize: 12,
};

export const TICK_LABEL_STYLE = {
  fill: '#607889',
  opacity: 0.35,
  fontSize: 12,
  width: 50,
};

export const TICK_LINE_STYLE = {
  width: 1,
  height: 4,
  fill: '#ccc',
};

export const PROGRESS_TICK = {
  gap: 2,
  tickBoxHeight: 18,
};

export const PROGRESS_TICK_LINE_STYLE = {
  height: 4,
  width: 1,
  fill: '#BFBFBF',
};

export const PROGRESS_TICK_TEXT_STYLE = {
  fill: '#8c8c8c',
  fontSize: 10,
  width: 50,
};

export const PROGRESS_TICK_SELECTED_STYLE = {
  fill: '#5B8FF9',
};

export const PROGRESS_TICK_UNSELECTED_STYLE = {
  fill: '#e6e8e9',
};

export const SLIDER_START = 0.1;
export const SLIDER_END = 0.9;

export const DEFAULT_CONTROLLER_CONFIG = {
  speed: 1,
  contentWidth: 200,
  height: 60,
  fill: '#fff',
  stroke: '#fff',
  hideTimeTypeController: false,
  preBtnStyle: {
    fill: '#aaa',
  },
  nextBtnStyle: {
    fill: '#aaa',
  },
  playBtnStyle: {
    fill: '#aaa',
  },
};
