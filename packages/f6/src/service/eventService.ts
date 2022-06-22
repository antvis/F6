import EE from 'eventemitter3';

import { Gesture } from '@antv/f-engine';
import { IShape, Matrix } from '../types';
import { isViewportChanged } from '../utils/base';

const OriginEventType = {
  click: 'click',
  dbclick: 'dbclick',
  touchstart: 'touchstart',
  touchmove: 'touchmove',
  touchend: 'touchend',
  touchendoutside: 'touchendoutside',
  dragenter: 'dragenter',
  dragleave: 'dragleave',
  dragover: 'dragover',
  drop: 'drop',
  dragstart: 'dragstart',
  drag: 'drag',
  dragend: 'dragend',
  panstart: 'panstart',
  pan: 'pan',
  panend: 'panend',
  pressstart: 'pressstart',
  press: 'press',
  pressend: 'pressend',
  swipe: 'swipe',
  pinchstart: 'pinchstart',
  pinch: 'pinch',
  pinchend: 'pinchend',
};

export default class EventService extends EE {
  graph = null;
  canvas = null;
  root = null;
  gesture = null;

  protected dragging: boolean = false;

  protected draggingItem = null;

  protected preItem = null;

  public destroyed: boolean;

  constructor(graph) {
    super();
    this.graph = graph;
  }

  eventHandlers: Record<string, Array<(e) => void>> = {};

  pushEventHandlers(type, callback) {
    this.eventHandlers[type] = [...(this.eventHandlers[type] || []), callback];
    return callback;
  }

  // 初始化 G6 中的事件
  protected initEvents(root, canvas) {
    this.gesture = new Gesture(canvas);

    const tapStart = this.pushEventHandlers(OriginEventType.touchstart, (evt) => {
      evt.target.tap = {
        startTime: Date.now(),
        startX: evt.clientX,
        startY: evt.clientY,
        endX: evt.clientX,
        endY: evt.clientX,
      };
    });

    const tapMove = this.pushEventHandlers(OriginEventType.touchmove, (evt) => {
      const tap = evt.target;
      tap.endX = evt.clientX;
      tap.endY = evt.clientY;
    });

    const tapEnd = this.pushEventHandlers(OriginEventType.touchend, (evt) => {
      if (!evt.target.tap) return;
      const { startTime, startX, startY, endX, endY } = evt.target.tap;
      if (Date.now() - startTime > 250) {
        return;
      }
      //如果移动距离过大，则不是tap事件。为了大家在电脑上能看到效果，这里设置成了1000，因为在电脑上移动幅度不好控制。如果是在移动端，设置为30就差不多了。
      if (Math.abs(endX - startX) > 1000 || Math.abs(endY - startY) > 1000) {
        return;
      }
      this.onCanvasEvents(this.transformEvent(evt, 'tap'));
    });

    const dbTap = this.pushEventHandlers(OriginEventType.dbclick, (evt) => {
      this.onCanvasEvents(this.transformEvent(evt, 'dbtap'));
    });

    this.gesture.on(OriginEventType.touchstart, tapStart);
    this.gesture.on(OriginEventType.touchmove, tapMove);
    this.gesture.on(OriginEventType.touchend, tapEnd);
    this.gesture.on(OriginEventType.dbclick, dbTap);

    Object.values(OriginEventType).forEach((type) => {
      const fn = this.pushEventHandlers(type, (evt) =>
        this.onCanvasEvents(this.transformEvent(evt, type)),
      );
      this.gesture.on(type, fn);
    });

    this.canvas = canvas;
    this.root = root;
  }

  protected clearEvents() {
    Object.entries(this.eventHandlers).forEach(([eventType, events]) => {
      events.forEach((fn) => {
        this.gesture.off(eventType, fn);
      });
    });
    this.eventHandlers = {};
  }

  // 获取 shape 的 item 对象
  private static getItemRoot<T extends IShape>(shape: any): T {
    while (shape && !shape.item) {
      shape = shape.getParent?.();
    }
    return shape;
  }

  transformEvent(event, type) {
    return {
      points: event.points,
      originalEvent: event.originalEvent,
      type,
      name: type,
      x: event.x,
      y: event.y,
      clientX: event.clientX,
      clientY: event.clientY,
      canvasX: event.canvasX,
      canvasY: event.canvasY,
      tiltX: event.tiltX,
      tiltY: event.tiltY,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
      pageX: event.pageX,
      pageY: event.pageY,
      screenX: event.screenX,
      screenY: event.screenY,
      target: event.target,
      currentTarget: event.currentTarget,
      propagationPath: event.propagationPath,
      stopPropagation: (is) => event.stopPropagation(is),
      preventDefault: () => event.preventDefault(),
      stopImmediatePropagation: () => event.stopImmediatePropagation(),
    };
  }

  /**
   * 处理 canvas 事件
   * @param evt 事件句柄
   */
  protected onCanvasEvents(evt) {
    const canvas = this.canvas;
    const { target } = evt;
    const eventType = evt.type;
    /**
     * (clientX, clientY): 相对于页面的坐标；
     * (canvasX, canvasY): 相对于 <canvas> 左上角的坐标；
     * (x, y): 相对于整个画布的坐标, 与 model 的 x, y 是同一维度的。
     */
    evt.canvasX = evt.x;
    evt.canvasY = evt.y;
    let point = { x: evt.canvasX, y: evt.canvasY };

    // const group: IGroup = graph.get('group');
    let matrix: Matrix = this.graph.getMatrix();

    if (!matrix) {
      matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    }

    if (isViewportChanged(matrix)) {
      point = this.graph.viewService.getPointByCanvas(evt.x, evt.y);
    }

    evt.x = point.x;
    evt.y = point.y;

    // evt.currentTarget = graph;

    // if (eventType === 'dragend') console.log('dragend: ', evt.target);
    // if (eventType === 'drag') console.log('drag: ', evt.target);
    // if (eventType === 'dragstart') console.log('dragstart: ', evt.target);
    // if (eventType === 'drop') console.log('drop: ', evt.target);

    if (target === canvas.document) {
      evt.target = canvas;
      evt.item = null;

      this.emit(eventType, evt);
      this.emit(`canvas:${eventType}`, evt);
      return;
    }

    const itemShape: IShape = EventService.getItemRoot(target);
    if (!itemShape) {
      this.emit(eventType, evt);
      return;
    }

    const item = itemShape.item;
    if (item.destroyed) {
      return;
    }

    const type = item.type;

    // 事件target是触发事件的Shape实例，item是触发事件的item实例
    evt.target = target;
    evt.item = item;
    if (evt.canvasX === evt.x && evt.canvasY === evt.y) {
      const canvasPoint = this.graph.viewService.getCanvasByPoint(evt.x, evt.y);
      evt.canvasX = canvasPoint.x;
      evt.canvasY = canvasPoint.y;
    }

    this.emit(eventType, evt);
    if (evt.name && !evt.name.includes(':')) {
      this.emit(`${type}:${eventType}`, evt);
    } else {
      this.emit(evt.name, evt);
    }

    if (eventType === 'dragstart') {
      this.dragging = true;
    }
    if (eventType === 'dragend') {
      this.dragging = false;
    }
    // if (eventType === 'panmove') {
    //   this.handleTouchMove(evt, type);
    // }
  }

  /**
   * 处理扩展事件
   * @param evt 事件句柄
   */
  // protected onExtendEvents(evt) {
  //   this.graph.emit(evt.type, evt);
  // }

  // /**
  //  * 在 graph 上面 emit 事件
  //  * @param itemType item 类型
  //  * @param eventType 事件类型
  //  * @param evt 事件句柄
  //  */
  // private emitCustomEvent(itemType: string, eventType: string, evt) {
  //   evt.type = eventType;
  //   this.graph.emit(`${itemType}:${eventType}`, evt);
  // }

  public destroy() {
    // const { graph, canvasHandler, extendEvents } = this;
    // const canvas: ICanvas = graph.get('canvas');

    // each(EVENTS, event => {
    //   canvas.off(event, canvasHandler);
    // });

    // canvas.off('*', canvasHandler);

    // each(extendEvents, (event) => {
    //   event.remove();
    // });

    this.dragging = false;
    this.preItem = null;
    // this.extendEvents.length = 0;
    // (this.canvasHandler as Fun | null) = null;
    this.destroyed = true;
    this.clearEvents();
  }
}
