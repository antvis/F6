import { measureText } from './common';
/**
 * 部分小程序context会缺少函数，补上
 */
function wrapContext(ctx) {
  if (!ctx) return;
  if (!ctx.measureText) {
    ctx.measureText = measureText;
  }
  return ctx;
}

export { wrapContext };
