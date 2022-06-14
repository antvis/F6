//@ts-nocheck
import { applyMatrix, invertMatrix } from '../utils/math';

/**
 * 将视口坐标转成 Canvas 坐标
 * @param x 视口 x 坐标
 * @param y 视口 y 坐标
 */
export const getCanvasByPoint = (viewportMatrix, x: number, y: number): Point => {
  if (!viewportMatrix) {
    viewportMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  }
  return applyMatrix({ x, y }, viewportMatrix);
};

/**
 * 将页面坐标转成视口坐标
 * @param clientX 页面 x 坐标
 * @param clientY 页面 y 坐标
 */
export const getPointByClient = (
  canvas,
  viewportMatrix,
  clientX: number,
  clientY: number,
): Point => {
  const canvasPoint: Point = canvas.getPointByClient(clientX, clientY);
  return getPointByCanvas(viewportMatrix, canvasPoint.x, canvasPoint.y);
};

/**
 * 将视口坐标转成页面坐标
 * @param x 视口 x 坐标
 * @param y 视口 y 坐标
 */
export const getClientByPoint = (canvas, x: number, y: number): Point => {
  const canvasPoint = getCanvasByPoint(x, y);
  const point = canvas.getClientByPoint(canvasPoint.x, canvasPoint.y);
  return { x: point.x, y: point.y };
};

/**
 * 将 Canvas 坐标转成视口坐标
 * @param canvasX canvas x 坐标
 * @param canvasY canvas y 坐标
 */
export const getPointByCanvas = (viewportMatrix, canvasX: number, canvasY: number): Point => {
  if (!viewportMatrix) {
    viewportMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  }
  const point = invertMatrix({ x: canvasX, y: canvasY }, viewportMatrix);
  return point;
};
