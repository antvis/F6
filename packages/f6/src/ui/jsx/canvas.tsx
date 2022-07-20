import { Canvas as FCanvas, CanvasRenderer } from '@antv/f-engine';

export class Canvas extends FCanvas {
  constructor(props) {
    const { width, height, context, container, renderer, pixelRatio } = props;

    const cfg = {
      width,
      height,
      pixelRatio,
      context: context,
      renderer:
        renderer ||
        new CanvasRenderer({
          dragstartDistanceThreshold: 5,
          dragstartTimeThreshold: 30,
        }),
      container,
    };

    super({
      ...props,
      ...cfg,
    });
    const { width: canvasWidth, height: canvasHeight } = this.getCanvasConfig();

    this.setContext({
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio,
    });
  }
}
