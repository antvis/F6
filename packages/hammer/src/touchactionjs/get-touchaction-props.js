export default function getTouchActionProps() {
  let touchMap = {};
  ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(
    (val) => {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      return (touchMap[val] = true);
    },
  );
  return touchMap;
}
