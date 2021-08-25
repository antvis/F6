import { createSegmentNode } from '@antv/f6-ui';
import { SliderOption, TrendConfig } from '../../type/slider';
import {
  BACKGROUND_STYLE,
  FOREGROUND_STYLE,
  TREND_HANDLER_STYLE,
  TEXT_STYLE,
  TREND_SLIDER_HEIHGT,
} from '../../utils/const';
import { dataToPath } from '../../utils/path';

export const TREND_LINE_STYLE = {
  stroke: '#C5C5C5',
  strokeOpacity: 0.85,
};

export const AREA_STYLE = {
  fill: '#CACED4',
  opacity: 0.85,
};

export default function createTrendSlider({
  slider = {},
  trend = {},
}: {
  slider: SliderOption;
  trend: TrendConfig;
}) {
  const { width, height = TREND_SLIDER_HEIHGT } = slider;
  const { data: trendData = [], lineStyle, smooth = true } = trend;

  const handlerStyle = Object.assign({}, TREND_HANDLER_STYLE, slider.handlerStyle);
  const backgroundStyle = Object.assign({}, BACKGROUND_STYLE, slider.backgroundStyle);
  const foregroundStyle = Object.assign({}, FOREGROUND_STYLE, slider.foregroundStyle);
  const textStyle = Object.assign({}, TEXT_STYLE, slider.textStyle);

  const trendLineStyle = Object.assign({}, TREND_LINE_STYLE, lineStyle);

  const mainRectWidth = handlerStyle.width;
  const circleR = mainRectWidth * 2;
  const controlWidth = circleR * 2 + 10;

  const html = `
    <div class='slider-bg'>
      <shape class='trend-bg' type='path' path='[]' />
      <div class= 'slider-inner' />
      <div class='control left-control'>
        <div class='handler'> 
          <div class='text'>1</div>
          <shape class='rect' type='rect' width='${handlerStyle.width}'/>
          <shape class='circle top-circle' type='circle' r='${circleR}' />
          <shape class='circle bottom-circle' type='circle' r='${circleR}' />
        </div>
      </div>
      <div class='control right-control'>
        <div class='handler'> 
          <div class='text'>1</div>
          <shape class='rect' type='rect' width='${handlerStyle.width}'/>
          <shape class='circle top-circle' type='circle' r='${circleR}' />
          <shape class='circle bottom-circle' type='circle' r='${circleR}' />
        </div>
      </div>
    </div>
  `;
  const css = `
    .slider-bg {
      width: ${width};
      height: ${height};
      background: ${backgroundStyle.fill};
      opacity: ${backgroundStyle.opacity};
      z-index: 10;
    }

    .trend-bg{
      position: absolute;
      width: ${width};
      height: ${height};
      border: 1 solid ${trendLineStyle.stroke};
      opacity: ${trendLineStyle.strokeOpacity};
    }
    
    .slider-inner{
      position: absolute;
      width: ${width};
      height: ${height};
      background: ${foregroundStyle.fill};
      opacity: ${foregroundStyle.opacity};
    }

    .control {
      position: absolute;
      width: ${controlWidth};
      height: ${height};
      font-size: 10;
      background-opacity: 0;
    }

    .handler{
      position: absolute;
      height: ${handlerStyle.height};
      width: ${mainRectWidth};
    }
    
    .rect {
      position: absolute;
      width: ${mainRectWidth};
      height: ${handlerStyle.height};
      background: ${handlerStyle.fill};
    }

    .circle {
      background: ${handlerStyle.fill};
      position: absolute;
      left: ${mainRectWidth / 2}
    }

    .top-circle{
      top: 0
    }

    .bottom-circle{
      bottom: 0
    }

    .right-control .handler{
      right: 0
    }

    .control .text{
      position: absolute;
      top: ${height / 2 - 5};
    }
    
    .text{
      color: ${textStyle.fill};
      width: 40;
      text-align: center;
    }

    .text text{
      opacity:${textStyle.opacity}
    }

    .left-control .text{
      margin-left: 0;
    }

    .right-control .text{
      
    }
    
    .left-control {
      left: 0;
    }

    .right-control{
      left: ${width - controlWidth};
    }
  `;

  const slideContainer = createSegmentNode(html, css);
  const path = dataToPath(trendData, width, height, smooth);
  const slideTrendBg = slideContainer.query('.trend-bg');
  slideTrendBg.setAttribute('path', path);

  const leftControl = slideContainer.query('.left-control');
  const rightControl = slideContainer.query('.right-control');

  const leftControlText = leftControl.query('.text');
  const rightControlText = rightControl.query('.text');

  leftControl.onLeftChange = (value) => {
    if (value < leftControlText.width) {
      leftControlText.setStyle('marginLeft', 0);
    } else {
      leftControlText.setStyle('marginLeft', -leftControlText.width);
    }
  };

  rightControl.onLeftChange = (value) => {
    if (value > slideContainer.width - rightControl.width - rightControlText.width) {
      rightControlText.setStyle('marginLeft', -rightControlText.width);
    } else {
      rightControlText.setStyle('marginLeft', 0);
    }
  };

  return {
    slideContainer: slideContainer,
    leftControl: slideContainer.query('.left-control'),
    rightControl: slideContainer.query('.right-control'),
    slideInner: slideContainer.query('.slider-inner'),
  };
}
