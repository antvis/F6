import { Point } from '../types';
import { applyMatrix, invertMatrix } from '../utils/math';

import { ext } from '@antv/matrix-util';
import { formatPadding } from '../utils/base';

const { transform } = ext;

export class ViewService {
  graph = null;
  width = 0;
  height = 0;
  devicePixelRatio = 1;
  fitViewPadding = 0;
  graphRoot = null;

  constructor(graph) {
    this.graph = graph;
  }

  init(data) {
    const { width, height, devicePixelRatio, fitViewPadding = 0 } = data;
    this.width = width;
    this.height = height;
    this.devicePixelRatio = devicePixelRatio;
    this.fitViewPadding = fitViewPadding;
  }

  setGraphRoot(graphRoot) {
    this.graphRoot = graphRoot;
  }

  fitView() {
    const padding = formatPadding(this.fitViewPadding);
    const width: number = this.width;
    const height: number = this.height;
    const bbox = this.graph.getCanvasBBox();

    if (bbox.width === 0 || bbox.height === 0) return;
    const viewCenter = this.getViewCenter();

    const groupCenter: Point = {
      x: bbox.x + bbox.width / 2,
      y: bbox.y + bbox.height / 2,
    };
    this.translate(viewCenter.x - groupCenter.x, viewCenter.y - groupCenter.y);
    const w = (width - padding[1] - padding[3]) / bbox.width;
    const h = (height - padding[0] - padding[2]) / bbox.height;
    let ratio = w;
    if (w > h) {
      ratio = h;
    }
    this.zoom(ratio, viewCenter);
  }

  getViewCenter() {
    const padding = formatPadding(this.fitViewPadding);
    const width: number = this.width;
    const height: number = this.height;
    return {
      x: (width - padding[1] - padding[3]) / 2 + padding[3],
      y: (height - padding[0] - padding[2]) / 2 + padding[0],
    };
  }

  fitCenter() {
    const bbox = this.graph.getCanvasBBox();

    if (bbox.width === 0 || bbox.height === 0) return;
    const viewCenter = this.getViewCenter();

    const groupCenter: Point = {
      x: bbox.x + bbox.width / 2,
      y: bbox.y + bbox.height / 2,
    };

    this.translate(viewCenter.x - groupCenter.x, viewCenter.y - groupCenter.y);
  }

  /**
   * 将视口坐标转成 Canvas 坐标
   * @param x 视口 x 坐标
   * @param y 视口 y 坐标
   */
  getCanvasByPoint = (x: number, y: number): Point => {
    let viewportMatrix = this.graph.getMatrix();
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
  getPointByClient = (clientX: number, clientY: number): Point => {
    const canvas = this.graph.canvas;
    const canvasPoint: Point = canvas.getPointByClient(clientX, clientY);
    return this.getPointByCanvas(canvasPoint.x, canvasPoint.y);
  };

  // /**
  //  * 将视口坐标转成页面坐标
  //  * @param x 视口 x 坐标
  //  * @param y 视口 y 坐标
  //  */
  getClientByPoint = (x: number, y: number): Point => {
    const canvas = this.graph.canvas;
    const canvasPoint = this.getCanvasByPoint(x, y);
    const point = canvas.getClientByPoint(canvasPoint.x, canvasPoint.y);
    return { x: point.x, y: point.y };
  };

  /**
   * 将 Canvas 坐标转成视口坐标
   * @param canvasX canvas x 坐标
   * @param canvasY canvas y 坐标
   */
  getPointByCanvas = (canvasX: number, canvasY: number): Point => {
    let viewportMatrix = this.graph.getMatrix();
    if (!viewportMatrix) {
      viewportMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    }
    const point = invertMatrix({ x: canvasX, y: canvasY }, viewportMatrix);
    return point;
  };

  changeSize(width, height) {
    this.width = width;
    this.height = height;
    this.graph.canvas.changeSize(width, height);
  }

  setFitViewPadding(fitViewPadding) {
    this.fitViewPadding = fitViewPadding;
  }

  translate(x = 0, y = 0) {
    let matrix = this.graphRoot.getMatrix();
    matrix = transform(matrix, [['t', x, y]]);
    this.graphRoot.setMatrix(matrix);
  }

  translateTo(tox, toy) {
    const matrix = this.graphRoot.getMatrix();
    const curX = matrix[6];
    const cury = matrix[7];

    this.translate(tox - curX, toy - cury);
  }

  zoom(ratio, center) {
    let matrix = this.graphRoot.getMatrix();
    if (center) {
      matrix = transform(matrix, [
        ['t', -center.x, -center.y],
        ['s', ratio, ratio],
        ['t', center.x, center.y],
      ]);
    } else {
      matrix = transform(matrix, [['s', ratio, ratio]]);
    }
    this.graphRoot.setMatrix(matrix);
  }

  zoomTo(toRatio, center) {
    const matrix = this.graphRoot.getMatrix();
    const ratio = toRatio / matrix[0];
    this.zoom(ratio, center);
  }
}
