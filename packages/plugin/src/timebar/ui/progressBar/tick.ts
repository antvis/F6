import { createSegmentNode } from '@antv/f6-ui';
import { dispatch, subscribe } from '../../dispatcher';
import {
  CONTROL_NEXT,
  CONTROL_PREV,
  RANGE_CHANGE,
  SLIDER_PAUSE,
  SLIDER_PLAY,
  PROGRESS_TICK_SELECTED_STYLE,
  PROGRESS_TICK,
  PROGRESS_TICK_LINE_STYLE,
  PROGRESS_TICK_TEXT_STYLE,
  PROGRESS_TICK_UNSELECTED_STYLE,
  SLIDER_START,
  SLIDER_END,
  SPEED_CHANGE,
} from '../../utils/const';
import { throttle } from '@antv/util';
import { createPlayer } from '../../utils/player';
import { TimeBarTickContext } from '../../type/tick';

const createTickProgressBar = function (option) {
  const { data } = option;
  const { start = SLIDER_START, end = SLIDER_END, width, padding } = option.tick;
  console.log(option);
  const selectedTickStyle = Object.assign(
    {},
    PROGRESS_TICK_SELECTED_STYLE,
    option?.tick?.selectedTickStyle,
  );

  const unselectedTickStyle = Object.assign(
    {},
    PROGRESS_TICK_UNSELECTED_STYLE,
    option?.tick?.unSelectedTickStyle,
  );
  const context: TimeBarTickContext = {} as TimeBarTickContext;

  // 数据
  context.data = data;
  // 整个bar的宽度
  context.width = width;

  context.padding = padding || '10 0';
  // 高亮
  context.selectedFill = selectedTickStyle.fill;
  // 默认
  context.unSelectFill = unselectedTickStyle.fill;
  // 每个刻度的间隔
  context.gap = PROGRESS_TICK.gap;
  // 每个刻度的高度
  context.tickBoxHeight = option?.tick?.tickBoxHeight || PROGRESS_TICK.tickBoxHeight;
  // 刻度下面的线的样式
  context.lineStyle = Object.assign({}, PROGRESS_TICK_LINE_STYLE, option?.tick?.tickLineStyle);
  // 刻度下面文本样式
  context.textStyle = Object.assign({}, PROGRESS_TICK_TEXT_STYLE, option?.tick?.tickLabelStyle);
  // 每个刻度的宽度
  context.tickWidth = width / data.length;
  // 每个文本宽度相当于多少个刻度，用来布局文本
  context.count = Math.floor(context.textStyle.width / context.tickWidth);
  context.start = start;
  context.end = end;
  context.selects = [];
  const node = createTickProgressBarNode(context);
  context.tickBoxs = node.queryAll('.tick-box');

  initPlayer(context);

  bindEvents(node, context);

  return node;
};

// 创建节点
function createTickProgressBarNode(context) {
  const {
    data,
    tickWidth,
    count,
    width,
    gap,
    tickBoxHeight,
    textStyle,
    lineStyle,
    start,
    end,
    unSelectFill,
  } = context;
  const html = `
  <div id='slider'>
    ${data.reduce((prev, cur, index) => {
      return (prev += `
        <div class='ticker'> 
          <div class='tick-box' disFromStart='${index * tickWidth}'></div>
          ${
            index % count == 0
              ? `
              <div class='tick-desc' > 
                <shape class='line' type='rect'/>
                <div class='text'>${cur.date}</div>
              </div>`
              : ''
          }
        </div>`);
    }, '')}
  </div>
`;
  const css = `
  #slider {
    width: ${width};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${context.padding};
  }

  .ticker {
    width: ${tickWidth - gap};
    display: flex;
    background-opacity: 0;
    align-items: center;
  }

  .tick-box {
    width: ${tickWidth - gap};
    height: ${tickBoxHeight};
    background:  ${unSelectFill};
  }

  .tick-desc {
    display: flex;
    align-items: center;
  }

  .text{
    width: 0;
    height: ${textStyle.fontSize};
    text-align:center;
    color: ${textStyle.fill};
    font-size: ${textStyle.fontSize};
  }

  .text text{
    white-space: nowrap;
  }

  .line {
    width: ${lineStyle.width};
    height: ${lineStyle.height};
    background: ${lineStyle.fill};
    margin: 2 0;
  }
`;
  const node = createSegmentNode(html, css);

  node.didMount = function () {
    context.start = start * width;
    context.end = end * width;
    select(context.start, context.end, context);
  };
  return node;
}

// 绑定事件
function bindEvents(node, context) {
  let startX = 0;
  let isStart = false;
  let startLeft = 0;

  const selectThrottle = throttle(select, 30, {
    trailing: true,
    leading: true,
  });

  node.on('panstart', (e) => {
    isStart = false;
    if (!e.uiNode) return;
    if (e.uiNode.getAttribute('class') === 'tick-box') {
      isStart = true;
      startX = e.clientX;
      startLeft = e.uiNode.getAttribute('disFromStart');
      clearAllSelect(context);
    }
  });

  node.on('panmove', (e) => {
    if (!isStart) return;
    const delta = e.clientX - startX;
    selectThrottle(startLeft, startLeft + delta, context);
  });

  node.on('tap', (e) => {
    if (e.uiNode && e.uiNode.getAttribute('class') === 'tick-box') {
      selectSingle(e.uiNode, context);
    }
  });
}

// 初始化播放器
function initPlayer(context) {
  const goNext = () => {
    context.end += context.tickWidth;
    select(context.start, context.end, context);
  };

  const goPrev = () => {
    context.end -= context.tickWidth;
    select(context.start, context.end, context);
  };

  const player = createPlayer(goNext, 1000);
  subscribe(CONTROL_NEXT, goNext);
  subscribe(CONTROL_PREV, goPrev);
  subscribe(SLIDER_PLAY, player.play);
  subscribe(SLIDER_PAUSE, player.stop);
  subscribe(SPEED_CHANGE, player.setSpeed);
}

// 选中刻度函数
function select(start, end, context) {
  let max = Math.max(start, end);
  let min = Math.min(start, end);
  context.start = min;
  context.end = max;
  clearAllSelect(context);
  context.tickBoxs.forEach((tickBox) => {
    if (context.selects.includes(tickBox)) return;
    if (
      tickBox.getAttribute('disFromStart') >= min &&
      tickBox.getAttribute('disFromStart') <= max
    ) {
      tickBox.setStyle('backgroundColor', context.selectedFill);
      context.selects.push(tickBox);
    }
  });

  if (context.selects.length > 0) {
    dispatch(RANGE_CHANGE, {
      value: [
        context.selects[0].getAttribute('disFromStart') / context.width,
        context.selects[context.selects.length - 1].getAttribute('disFromStart') / context.width,
      ],
    });
  }
}

// 清除选中
function clearAllSelect(context) {
  context.selects.forEach((box) => {
    box.setStyle('backgroundColor', context.unSelectFill);
  });
  context.selects = [];
}

// 选中单个box
function selectSingle(tickBox, context) {
  clearAllSelect(context);
  context.selects.push(tickBox);
  context.start = context.end = tickBox.getAttribute('disFromStart');
  dispatch(RANGE_CHANGE, {
    value: [
      tickBox.getAttribute('disFromStart') / context.width,
      tickBox.getAttribute('disFromStart') / context.width,
    ],
  });
  tickBox.setStyle('backgroundColor', context.selectedFill);
}

export default createTickProgressBar;
