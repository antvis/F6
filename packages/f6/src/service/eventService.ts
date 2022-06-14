//@ts-nocheck
import { ICanvas, IShape } from '@antv/g-base';
import { each } from '@antv/util';
import EE from 'eventemitter3';
import { getCanvasByPoint, getPointByCanvas } from './viewService';

import { isViewportChanged } from '../utils';

const Event = {
  click: 'click',
  dbclick: 'dbclick',
  touchstart: 'touchstart',
  touchmove: 'touchmove',
  touchend: 'touchend',
  touchendoutside: 'touchendoutside',
  panstart: 'panstart',
  pan: 'pan',
  panend: 'panend',
  press: 'press',
  swipe: 'swipe',
  dragstart: 'dragstart',
  drag: 'drag',
  dragend: 'dragend',
  dragenter: 'dragenter',
  dragover: 'dragover',
  dragleave: 'dragleave',
  drop: 'drop',
};

type Fun = () => void;
export default class EventService extends EE {
  graph = null;
  canvasHandler!: Fun;
  canvas = null;

  root = null;

  protected dragging: boolean = false;

  protected draggingItem = null;

  protected preItem = null;

  public destroyed: boolean;

  constructor(graph) {
    super();
    this.graph = graph;
  }

  // 初始化 G6 中的事件
  protected initEvents(root, canvas) {
    root.on(Event.touchstart, (evt) => {
      console.log('touchstart');
      evt.target.tap = {
        startTime: Date.now(),
        startX: evt.clientX,
        startY: evt.clientY,
        endX: evt.clientX,
        endY: evt.clientX,
      };
    });

    root.on(Event.touchMove, (evt) => {
      const tap = evt.target;
      tap.endX = evt.clientX;
      tap.endY = evt.clientY;
    });

    root.on(Event.touchend, (evt) => {
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

    Object.values(Event).forEach((type) => {
      root.on(type, (evt) => this.onCanvasEvents(this.transformEvent(evt, type)));
    });

    root.on(Event.dbclick, (evt) => {
      this.onCanvasEvents(this.transformEvent(evt, 'dbtap'));
    });
    this.canvas = canvas;
    // canvas.off('*').on('*', this.canvasHandler);
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
  protected onCanvasEvents = (evt) => {
    const canvas = this.canvas;
    const { target } = evt;
    const eventType = evt.type;
    // if (eventType === 'drop' || eventType === 'dragend') console.log(eventType);
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
      point = getPointByCanvas(matrix, evt.x, evt.y);
    }

    evt.x = point.x;
    evt.y = point.y;

    // evt.currentTarget = graph;

    if (target === canvas.document) {
      // if (eventType === 'panmove') {
      //   this.handleTouchMove(evt, 'canvas');
      // }
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
      const canvasPoint = getCanvasByPoint(matrix, evt.x, evt.y);
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
  };

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
    const { graph, canvasHandler, extendEvents } = this;
    const canvas: ICanvas = graph.get('canvas');

    // each(EVENTS, event => {
    //   canvas.off(event, canvasHandler);
    // });

    canvas.off('*', canvasHandler);

    each(extendEvents, (event) => {
      event.remove();
    });

    this.dragging = false;
    this.preItem = null;
    // this.extendEvents.length = 0;
    (this.canvasHandler as Fun | null) = null;
    this.destroyed = true;
  }

  /**
   * 处理移动事件
   * @param evt 事件句柄
   * @param type item 类型
   */
  // private handleTouchMove(evt, type: string) {
  //   const { preItem } = this;
  //   const canvas: ICanvas = this.canvas;
  //   const item = (evt.target as any) === canvas ? null : evt.item;

  //   // evt = cloneEvent(evt) as IG6GraphEvent;

  //   // 从前一个item直接移动到当前item，触发前一个item的leave事件
  //   // if (preItem && preItem !== item && !preItem.destroyed) {
  //   //   evt.item = preItem;
  //   //   this.emit(preItem.type, 'touchleave', evt);
  //   //   if (this.dragging) {
  //   //     this.emit(preItem.type, 'dragleave', evt);
  //   //   }
  //   // }

  //   // // 从一个item或canvas移动到当前item，触发当前item的enter事件
  //   // if (item && preItem !== item) {
  //   //   evt.item = item;
  //   //   this.emit(type, 'touchenter', evt);
  //   //   if (this.dragging) {
  //   //     this.emit(type, 'dragenter', evt);
  //   //   }
  //   // }

  //   this.preItem = item;
  // }
}