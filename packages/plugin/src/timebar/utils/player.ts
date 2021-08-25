export function createPlayer(fn, time = 20) {
  let isStop = true;
  let timer = null;
  let maxTime = 800;
  let minTime = 300;

  let maxLevel = 10;
  let minLevel = 1;

  const loop = function () {
    if (isStop) {
      clearTimeout(timer);
      return;
    }
    fn?.();
    timer = setTimeout(() => {
      loop();
    }, time);
  };
  return {
    play() {
      isStop = false;
      loop();
    },
    stop() {
      isStop = true;
    },
    setSpeed(speed) {
      if (speed > maxLevel) speed = maxLevel;
      if (speed < minLevel) speed = minLevel;
      time = maxTime - ((maxTime - minTime) * speed) / (maxLevel - minLevel);
    },
  };
}
