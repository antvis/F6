import { createSegmentNode } from '@antv/f6-ui';
import { SliderOption } from '../../type/slider';
import {
  SIMPLE_BACKGROUND_STYLE,
  SIMPLE_HANDLE_STYLE,
  FOREGROUND_STYLE,
  TEXT_STYLE,
} from '../../utils/const';

export default function createSimpleSlider(option: SliderOption) {
  const { width, height = 4 } = option;
  const handlerStyle = Object.assign({}, SIMPLE_HANDLE_STYLE, option.handlerStyle);
  const backgroundStyle = Object.assign({}, SIMPLE_BACKGROUND_STYLE, option.backgroundStyle);
  const foregroundStyle = Object.assign({}, FOREGROUND_STYLE, option.foregroundStyle);
  const textStyle = Object.assign({}, TEXT_STYLE, option.textStyle);

  const html = `
    <div class='slider-bg'>
      <div class="slider-inner"></div>
      <div class='control left-control'>
        <div class='text'>0</div>
      </div>
      <div class='control right-control'>
        <div class='text'>0</div>
      </div>
    </div>
  `;
  const css = `
    .slider-bg {
      width: ${width};
      height: ${height};
      background: ${backgroundStyle.fill};
      opacity: ${backgroundStyle.opacity};
      border-radius: ${backgroundStyle.radius};
      z-index: 10;
      margin-top: 30;
    }
    
    .slider-inner{
      position: absolute;
      width: ${width};
      height: ${height};
      border-radius: ${height / 2};
      background: ${foregroundStyle.fill};
      background-opacity: ${foregroundStyle.opacity}
      z-index: 1;
    }

    .control {
      position: absolute;
      top: ${-handlerStyle.radius / 2 + height / 2};
      width: ${handlerStyle.radius};
      height: ${handlerStyle.radius};
      border-radius: ${handlerStyle.radius / 2};
      background: ${handlerStyle.fill};
      border: ${handlerStyle.lineWidth} solid ${handlerStyle.stroke};
      z-index: 2;
    }

    .text{
      position: absolute;
      left: ${handlerStyle.radius / 2};
      top: -${handlerStyle.radius / 2 + textStyle.fontSize / 2};
      width: 0;
      color: ${textStyle.fill};
      font-size: ${textStyle.fontSize};
      text-align: center;
    }

    text{
      opacity: ${textStyle.opacity};
      white-space: nowrap;
    }
    
    .left-control {
      left: 0;
    }

    .right-control{
      left: ${width - handlerStyle.radius};
    }
  `;

  const node = createSegmentNode(html, css);

  return {
    slideContainer: node,
    leftControl: node.query('.left-control'),
    rightControl: node.query('.right-control'),
    slideInner: node.query('.slider-inner'),
  };
}
