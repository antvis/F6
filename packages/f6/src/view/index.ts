import { action, makeObservable, observable } from 'mobx';
import { Point } from '../types';
import { formatPadding } from '../utils/base';

export class View {
  graph = null;
  width = 0;
  height = 0;
  devicePixelRatio = 1;
  fitViewPadding = 0;

  constructor(graph) {
    this.graph = graph;
    makeObservable(this, {
      width: observable,
      height: observable,
      devicePixelRatio: observable,
      init: action,
    });
  }

  init(data) {
    const { width, height, devicePixelRatio, fitViewPadding = 0 } = data;
    this.width = width;
    this.height = height;
    this.devicePixelRatio = devicePixelRatio;
    this.fitViewPadding = fitViewPadding;
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

    this.graph.translate({ x: viewCenter.x - groupCenter.x, y: viewCenter.y - groupCenter.y });
    const w = (width - padding[1] - padding[3]) / bbox.width;
    const h = (height - padding[0] - padding[2]) / bbox.height;
    let ratio = w;
    if (w > h) {
      ratio = h;
    }
    this.graph.zoomTo({ ratio, center: viewCenter });
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

    this.graph.translate({ x: viewCenter.x - groupCenter.x, y: viewCenter.y - groupCenter.y });
  }
}
