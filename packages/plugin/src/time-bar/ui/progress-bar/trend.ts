import { createSegmentNode } from '@antv/f6-ui';
import bindDragEvents from '../slider/slider-logic';
import createSimpleSlider from '../slider/simple-slider';
import createTrendSlider from '../slider/trend-slider';
import createTiker from '../slider/slide-ticker';
import { subscribe } from '../../dispatcher';
import {
  CONTROL_NEXT,
  CONTROL_PREV,
  SLIDER_END,
  SLIDER_PAUSE,
  SLIDER_PLAY,
  SLIDER_START,
  SPEED_CHANGE,
} from '../../utils/const';

export function createSimpleProgressBar({ data = [], width, slider, sliderTick }) {
  // 创建slider
  const nodes = createSimpleSlider(slider);

  // 创建progressBar
  const progressBar = createProgressBar(
    {
      data,
      width,
      start: slider.start,
      end: slider.end,
      sliderTick,
    },
    nodes,
  );
  return progressBar;
}

export function createTrendProgressBar({ data, width, slider, sliderTick, trend }) {
  // 创建slider
  const nodes = createTrendSlider({ slider, trend });
  // 创建progressBar
  const progressBar = createProgressBar(
    {
      data,
      width,
      start: slider.start,
      end: slider.end,
      sliderTick,
    },
    nodes,
  );
  return progressBar;
}

function createProgressBar(
  { data = [], width, start = SLIDER_START, end = SLIDER_END, sliderTick },
  sliderNodes,
) {
  const { width: sliderTickWidth = 0 } = sliderTick;
  // 每个刻度宽度
  const tickWidth = sliderTickWidth / data.length;

  const progressBar = createProgressBarNode(width);
  const { slideContainer, leftControl, rightControl, slideInner } = sliderNodes;
  const tiker = createTiker(data, tickWidth, sliderTick);
  progressBar.appendChild(slideContainer, tiker);

  const logic = bindDragEvents({
    data,
    slideContainer,
    leftControl,
    rightControl,
    slideInner,
    tickWidth,
    delegateNode: progressBar,
  });

  // 节点挂载之后初始化
  slideContainer.didMount = () => {
    logic.goLeftPercent(start);
    logic.goRightPercent(end);
  };
  subscribe(SLIDER_PLAY, logic.player.play);
  subscribe(SLIDER_PAUSE, logic.player.stop);
  subscribe(SPEED_CHANGE, logic.player.setSpeed);

  subscribe(CONTROL_NEXT, logic.goNext);
  subscribe(CONTROL_PREV, logic.goPrev);

  return progressBar;
}

function createProgressBarNode(width) {
  const html = `
    <div id='slider'></div>
  `;
  const css = `
    #slider {
      width: ${width};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  return createSegmentNode(html, css);
}
