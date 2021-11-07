import { dispatch } from '../../dispatcher';
import { createPlayer } from '../../utils/player';

export default function createLogicer(option) {
  const {
    delegateNode,
    leftControl,
    rightControl,
    slideInner,
    data,
    tickWidth,
    slideContainer,
    speed = 100,
  } = option;

  let start = 0;
  let end = 1;
  let cur = 0;

  function goLeftPercent(percent) {
    if (percent < 0 || percent > 1) return;
    const containerWidth = slideContainer.width;
    updateLeft(percent * containerWidth);
  }

  function goRightPercent(percent) {
    if (percent < 0 || percent > 1) return;
    const containerWidth = slideContainer.width;
    updateRight(percent * containerWidth);
  }

  function goNext() {
    const controlWidth = rightControl.width;
    const containerWidth = slideContainer.width;
    if (cur > containerWidth - controlWidth) return;
    cur += tickWidth;
    updateRight(cur);
  }

  function goPrev() {
    if (cur < 0) return;
    cur -= tickWidth;
    updateRight(cur);
  }

  const player = createPlayer(goNext, speed);

  function getSlideInnerWidth() {
    return rightControl.left - leftControl.left + leftControl.width;
  }

  function getDataItem(value) {
    const containerWidth = slideContainer.width;
    const index = (value / containerWidth) * data.length;
    return data[Math.floor(index)];
  }

  function updateLeft(value, isChangeSliderWidth = true) {
    const controlWidth = leftControl.width;
    const containerWidth = slideContainer.width;
    if (value < 0) value = 0;
    if (value > containerWidth - controlWidth) value = containerWidth - controlWidth;
    leftControl.onLeftChange?.(value);
    leftControl.setStyle('left', value);
    isChangeSliderWidth && slideInner.setStyle('width', getSlideInnerWidth());
    slideInner.setStyle('left', value < 0 ? 0 : value);
    const data = getDataItem(value);
    if (data) {
      leftControl.setText(data.date);
      start = value / containerWidth;
      dispatch('RANGE_CHANGE', { value: [start, end] });
    }
  }

  function updateRight(value, isChangeSliderWidth = true) {
    const controlWidth = rightControl.width;
    const containerWidth = slideContainer.width;
    if (value < 0) value = 0;
    if (value >= containerWidth - controlWidth) value = containerWidth - controlWidth;
    rightControl.onLeftChange?.(value);
    rightControl.setStyle('left', value);
    isChangeSliderWidth && slideInner.setStyle('width', getSlideInnerWidth());
    const data = getDataItem(value + controlWidth);
    if (data) {
      cur = value;
      rightControl.setText(data.date);
      end = (value + controlWidth) / containerWidth;
      dispatch('RANGE_CHANGE', { value: [start, end] });
    }
  }

  function updateSlideInner(value) {
    const controlWidth = rightControl.width;
    const slideWidth = slideInner.width;
    const containerWidth = slideContainer.width;
    if (value < 0) value = 0;
    if (value > containerWidth - slideWidth) value = containerWidth - slideWidth;
    updateLeft(value, false);
    updateRight(value + slideWidth - controlWidth, false);
  }

  const map: any = new Map();
  map.set(leftControl, {
    getStart: () => leftControl.left,
    handler: updateLeft,
  });
  map.set(rightControl, {
    getStart: () => rightControl.left,
    handler: updateRight,
  });
  map.set(slideInner, {
    getStart: () => slideInner.left,
    handler: updateSlideInner,
  });

  let startX = 0;
  let startLeft = 0;
  let dragingNode;

  delegateNode.on('panstart', (e) => {
    if (!e.uiNode) return;
    dragingNode = undefined;
    const drager = map.get(e.uiNode);
    if (drager) {
      dragingNode = e.uiNode;
      startX = e.clientX;
      startLeft = drager.getStart();
    }
  });

  delegateNode.on('panmove', (e) => {
    if (!dragingNode) return;
    const drager = map.get(dragingNode);
    const delta = e.clientX - startX;
    drager.handler(startLeft + delta);
  });

  return {
    goLeftPercent,
    goRightPercent,
    goNext,
    goPrev,
    player,
  };
}
