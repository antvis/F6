import { BaseBehavior } from './base';

interface ZoomCanvasCfg {
  originScale: number;
  sensitivity: number;
  minZoom: number;
  maxZoom: number;
  enableOptimize: boolean;
  optimizeZoom: number;
  fixSelectedItems: {
    fixAll: boolean;
    fixLineWidth: boolean;
    fixLabel: boolean;
    fixState: string;
  };
}

export class ZoomCanvas extends BaseBehavior<ZoomCanvasCfg> {
  firstScale = null;
  currentScale = null;
  getDefaultCfg(): ZoomCanvasCfg {
    return {
      originScale: 1,
      sensitivity: 2,
      minZoom: undefined,
      maxZoom: undefined,
      enableOptimize: false,
      optimizeZoom: 0.1,
      fixSelectedItems: {
        fixAll: false,
        fixLineWidth: false,
        fixLabel: false,
        fixState: 'selected',
      },
    };
  }
  getEvents() {
    const { fixSelectedItems } = this.cfg;

    if (!fixSelectedItems.fixState) fixSelectedItems.fixState = 'selected';
    if (fixSelectedItems.fixAll) {
      fixSelectedItems.fixLineWidth = true;
      fixSelectedItems.fixLabel = true;
    }

    return {
      pinchstart: 'onPinch',
      pinch: 'onPinch',
    };
  }
  onPinch(evt) {
    console.log('pinch!!!');
    if (evt.preventDefault) evt.preventDefault();
    // if (evt.originalEvent.preventDefault) evt.originalEvent.preventDefault();

    const { minZoom, maxZoom } = this.cfg;
    const pointers = evt.points;
    if (pointers.length < 2) return;

    if (evt.type === 'pinchstart') {
      this.firstScale = this.graph.getZoom();
    }

    const scale = evt.zoom;

    // 应用到画布上的缩放比例
    const zoom = this.firstScale * scale;
    const center = evt.center;

    // 缓存当前的缩放比例
    this.currentScale = zoom;

    if (zoom > maxZoom || zoom < minZoom) {
      return;
    }
    const canvas = this.graph.canvas;

    // const posA = { x: pointers[0].x, y: pointers[0].y };
    // const posB = { x: pointers[1].x, y: pointers[1].y };
    // 缩放点放中间
    // const point = canvas.getPointByClient((posA.x + posB.x) / 2, (posA.y + posB.y) / 2);
    this.graph.zoomTo(zoom, center);
  }
}
