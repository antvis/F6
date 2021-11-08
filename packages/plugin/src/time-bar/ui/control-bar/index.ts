import { createSegmentNode } from '@antv/f6-ui';
import { dispatch } from '../../dispatcher';
import { ControllerCfg } from '../../type/control-bar';
import {
  CONTROL_NEXT,
  CONTROL_PREV,
  DEFAULT_CONTROLLER_CONFIG,
  SPEED_CHANGE,
} from '../../utils/const';
import createControlBtn from './control-btn';
import createPlayBtn from './play-btn';
import { deepMix } from '@antv/util';

function createControlbar(option: ControllerCfg) {
  const mixOption: ControllerCfg = deepMix({}, DEFAULT_CONTROLLER_CONFIG, option);
  const {
    wrapperWidth,
    contentWidth,
    height,
    fill,
    stroke,
    nextBtnStyle,
    preBtnStyle,
    playBtnStyle,
    speed,
  } = mixOption;

  const html = `
    <div class='wrapper'>
      <div class='content'> 

      </div>
    </div>
  `;
  const css = `
    .wrapper {
      display: flex;
      width: ${wrapperWidth};
      height: ${height};
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: ${fill};
      ${stroke ? `border: 1 solid ${stroke};` : ''}
    }
    .content{
      display: flex;
      width: ${contentWidth};
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-opacity: 0;
    }
`;
  const uiTree = createSegmentNode(html, css);
  const nextBtn = createControlBtn('next', nextBtnStyle);
  const prevBtn = createControlBtn('prev', preBtnStyle);
  const playBtn = createPlayBtn(playBtnStyle);

  dispatch(SPEED_CHANGE, speed);

  nextBtn.on('tap', () => {
    dispatch(CONTROL_NEXT);
  });
  prevBtn.on('tap', () => {
    dispatch(CONTROL_PREV);
  });
  uiTree.query('.content').appendChild(prevBtn, playBtn, nextBtn);

  return uiTree;
}

export default createControlbar;
