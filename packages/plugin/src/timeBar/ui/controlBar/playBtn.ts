import { createSegmentNode } from '@antv/f6-ui';
import { ShapeStyle } from '@antv/f6-core';
import { dispatch } from '../../dispatcher';
import { SLIDER_PAUSE, SLIDER_PLAY } from '../../utils/const';

function createPlayBtn(style: ShapeStyle) {
  const { radius = 15, fill } = style || {};
  // 播放按钮中间三角形的高
  const triH = (radius * Math.sqrt(3)) / 2;

  const html = `
  <div id='play_Btn'>
    <shape class="start" type='path' path='[
      ["M", 0 , 0],
      ["L", ${triH} , ${radius / 2}],
      ["L", 0 , ${radius}]
    ]'/>
    <div class="pause">
      <shape class='pause_0' type='rect' />
      <shape class='pause_1' type='rect' />
    </div>
  </div>`;
  const css = `
    #play_Btn {
      width: ${radius * 2};
      height: ${radius * 2};
      background: #fff;
      border: 1 solid ${fill};
      border-radius: ${radius};
    }
    .start{
      position: absolute;
      top: ${radius / 2};
      left: ${radius - triH / 2 + 1} ;
      background: ${fill};
      width: ${radius};
      height: ${radius};
    }
    .pause {
      display: none;
    }
    .pause shape {
      position: absolute;
      background: ${fill};
      width: ${radius / 4};
      height: ${radius};
    }
    .pause_1 {
      left: ${(4 * radius) / 8};
    }
    .pause {
      position: absolute;
      top: ${radius / 2};
      left: ${(5 * radius) / 8};
    }
  `;
  const node = createSegmentNode(html, css);
  const startNode = node.query('.start');
  const pauseNode = node.query('.pause');

  let isPause = true;
  function update() {
    startNode.setStyle('display', isPause ? 'flex' : 'none');
    pauseNode.setStyle('display', isPause ? 'none' : 'flex');
  }

  update();

  node.on('tap', () => {
    dispatch(isPause ? SLIDER_PLAY : SLIDER_PAUSE);
    isPause = !isPause;
    update();
  });
  return node;
}

export default createPlayBtn;
