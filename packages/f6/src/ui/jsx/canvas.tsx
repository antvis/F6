import { Canvas as FCanvas, CanvasRenderer } from '@antv/f-engine';

export class Canvas extends FCanvas {
  constructor(props) {
    const { width, height, context, container, renderer, pixelRatio } = props;

    const cfg = {
      width,
      height,
      pixelRatio,
      context: null,
      renderer: null,
      container,
    };

    // 传入context，默认使用canvasRenderer
    if (context) {
      cfg.context = context;
      cfg.renderer = renderer || new CanvasRenderer();
    }

    super({
      ...props,
      ...cfg,
    });
  }
}
