import { createSegmentNode } from '@antv/f6-ui';
import { SliderTick } from '../../type/slider';
import { TimeBarData } from '../../type/time-bar';
import { TICK_LABEL_STYLE, TICK_LINE_STYLE } from '../../utils/const';

export default function createTiker(
  data: TimeBarData[],
  tickWidth: number,
  sliderTick: SliderTick,
) {
  const { width = 0 } = sliderTick;
  const tickLabelStyle = Object.assign({}, TICK_LABEL_STYLE, sliderTick.textStyle);
  const tickLineStyle = Object.assign({}, TICK_LINE_STYLE, sliderTick.lineStyle);

  const count = Math.floor(tickLabelStyle.width / tickWidth);
  const html = `
  <div class='tiker'>
    ${data.reduce((prev, cur, index) => {
      return (prev += `
        <div class='single-tick'> 
          ${
            index % count === 0
              ? `
          <shape class='line' type='rect' />
          <div class='text'>${cur.date}</div>`
              : ''
          }
        </div> 
      `);
    }, '')}
  </div>`;

  const css = `
    .tiker {
      width: ${width};
      background-opacity: 0;
      display: flex;
      flex-direction: row;
      z-index: 1;
      color: black;
    }
    .single-tick {
      width: ${tickWidth};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .single-tick shape{
      width: ${tickLineStyle.width};
      height: ${tickLineStyle.height};
      background: ${tickLineStyle.fill};
    }
    .single-tick .text {
      height: ${tickLabelStyle.fontSize};
      text-align: center;
      font-size: ${tickLabelStyle.fontSize};
      width: 0; 
      color: ${tickLabelStyle.fill};
    }
    text {
      opacity: ${tickLabelStyle.opacity};;
      white-space: nowrap;
    }
  `;
  return createSegmentNode(html, css);
}
