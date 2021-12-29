import { IAbstractGraph as IGraph } from '@antv/f6-core';
import Base, { IPluginBaseConfig } from '../base';
import { createUI } from '@antv/f6-ui';

interface ZoomSliderConfig extends IPluginBaseConfig {
  minZoom: number;
  maxZoom: number;
  // 滑块（竿）占屏幕宽度的比例
  sliderWidthPercent: number;
  // 滑块拖拽的时间戳
  dragTimestamp: number;
  sliderPosition: 'bottom' | 'top';
  customizedStyle: string;
}

/**
 * 滑块缩放工具
 */
export default class ZoomSlider extends Base {
  constructor(props?: ZoomSliderConfig) {
    super(props);
  }

  public getDefaultCfgs() {
    return {
      minZoom: 0.5,
      maxZoom: 3,
      sliderWidthPercent: 0.3,
      dragTimestamp: +new Date(),
      sliderPosition: 'bottom',
      customizedStyle: '',
      getContent: () => {
        return `
          <root class="f6-zoom-slider">
            <div class="rail"></div>
            <div class="track"></div>
            <div class="handle">
              <div class="text">1 times</div>
              <div class="circle"></div>
            </div>
          </root>
        `;
      },
      getCss: () => {
        const graph: IGraph = this.get('graph');
        const graphWidth = graph.get('width');
        const graphHeight = graph.get('height');
        const minZoom = this.get('minZoom');
        const maxZoom = this.get('maxZoom');
        const sliderWidthPercent = this.get('sliderWidthPercent');
        const containerWidth = Math.floor(graphWidth * sliderWidthPercent);
        const resultX = containerWidth * ((1 - minZoom) / (maxZoom - minZoom));
        const sliderPosition = this.get('sliderPosition');
        const sliderToTop = (sliderPosition === 'top') ? 30 : (graphHeight - 60);
        const customizedStyle = this.get('customizedStyle');
        return `
          .f6-zoom-slider {
            width: ${containerWidth};
            height: 30;
            margin-left: ${Math.floor((graphWidth * (1 - sliderWidthPercent)) / 2)};
            padding: 13 0;
            top: ${sliderToTop};
            position: relative;
            opacity: 0;
          }

          .rail {
            width: ${containerWidth};
            height: 4;
            background-color: #bcbcbc;
            border-radius: 2;
            opacity: 1;
          }

          .track {
            width: ${resultX + 2};
            height: 4;
            background-color: #91d5ff;
            position: absolute;
            top: 13;
            border-radius: 2;
            opacity: 1;
          }

          .handle {
            height: 30;
            width: 40;
            position: absolute;
            top: 0;
            left: ${resultX - 9};
            padding: 9;
            opacity: 0;
          }

          .circle {
            height: 13;
            width: 13;
            border-radius: 6.5;
            border: 2px solid #1890ff;
            background-color: #fff;
            opacity: 1;
          }

          .text  {
            position: absolute;
            top: -9;
            margin-left: -12;
            color: #666;
            width: 45;
          }
        ` + customizedStyle;
      },
    };
  }

  public getEvents() {
    return {
      dragstart: 'onDragStart',
      dragend: 'onDragEnd',
      pinchmove: 'onDragStart',
      pinchend: 'onDragEnd'
    };
  }

  public init() {
    setTimeout(() => {
      this.initSlider();
    });
  }

  /**
   * 初始化滑块视图
   */
  initSlider() {
    console.log('initSlider', this);
    const graph: IGraph = this.get('graph');
    const uiGroup = graph.get('uiGroup');
    const html = this.get('getContent')();
    const css = this.get('getCss')();
    const zoomSliderUI = createUI(html, css, uiGroup);
    const handleUI = zoomSliderUI.query('.handle');

    let startX = 0;
    handleUI.on('panstart', (e) => {
      startX = e.clientX;
    });

    handleUI.on('panmove', (e) => {
      const distance = e.clientX - startX;
      startX = e.clientX;
      this.set('dragTimestamp', +new Date());
      this.updateHandlePosition(distance);
    });

    zoomSliderUI.setStyle('display', 'none');
    this.set('zoomSlider', zoomSliderUI);
  }

  /**
   * 开始拖动画布
   */
  onDragStart() {
    // 同步画布缩放比例到滑块工具
    const graph: IGraph = this.get('graph');
    const scale = graph.getZoom();
    const graphWidth = graph.get('width');
    const zoomSliderUI = this.get('zoomSlider');
    const minZoom = this.get('minZoom');
    const maxZoom = this.get('maxZoom');
    const sliderWidthPercent = this.get('sliderWidthPercent');
    const trackUI = zoomSliderUI.query('.track');
    const containerWidth = Math.floor(graphWidth * sliderWidthPercent);
    const distance =
      containerWidth * ((scale - minZoom) / (maxZoom - minZoom)) - trackUI.getStyle('width');
    this.updateHandlePosition(distance);
    // 显示滑块工具
    clearInterval(this.get('clearHandle'));
    zoomSliderUI.setStyle('display', 'block');
  }

  /**
   * 停止拖动画布
   */
  async onDragEnd() {
    const zoomSliderUI = this.get('zoomSlider');
    clearInterval(this.get('clearHandle'));
    const clearHandle = setInterval(() => {
      const dragBefore = +new Date() - this.get('dragTimestamp');
      if (dragBefore > 3000) {
        clearInterval(this.get('clearHandle'));
        zoomSliderUI.setStyle('display', 'none');
      }
    }, 3000);
    this.set('clearHandle', clearHandle);
  }

  /**
   * 更新滑块拖动的位置
   */
  updateHandlePosition(distance) {
    const graph: IGraph = this.get('graph');
    const zoomSliderUI = this.get('zoomSlider');
    const sliderWidthPercent = this.get('sliderWidthPercent');
    const minZoom = this.get('minZoom');
    const maxZoom = this.get('maxZoom');
    const trackUI = zoomSliderUI.query('.track');
    const handleUI = zoomSliderUI.query('.handle');
    const clientX = trackUI.getStyle('width');
    const containerWidth = graph.get('width') * sliderWidthPercent;
    let resultX = clientX + distance;
    if (resultX < 0) {
      resultX = 0;
    }
    if (resultX > containerWidth) {
      resultX = containerWidth;
    }
    const scaleRatio = (maxZoom - minZoom) * (resultX / containerWidth) + minZoom;
    trackUI.setStyle('width', resultX);
    handleUI.setStyle('left', resultX - 9); // 9: handle 的 padding left
    handleUI.setText(`${Math.round(scaleRatio * 10) / 10} times`);
    this.updateScale(scaleRatio);
  }

  /**
   * 更新画布缩放
   */
  updateScale(scaleRatio) {
    const graph: IGraph = this.get('graph');
    graph.zoom(scaleRatio / graph.getZoom());
  }
}
