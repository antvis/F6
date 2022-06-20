import { FederatedEvent } from '@antv/g';
import { Item } from './item';

export enum F6EventType {
  CLICK = 'click',
  DBLCLICK = 'dblclick',
  TAP = 'tap',
  DBLTAP = 'dbltap',
  DRAGSTART = 'dragstart',
  DRAGEND = 'dragend',
  DRAG = 'drag',
  DRAGENTER = 'dragenter',
  DRAGLEAVE = 'dragleave',
  DRAGOVER = 'dragover',
  DRAGOUT = 'dragout',
  DDROP = 'drop',
  PINCHSTART = 'pinchstart',
  PINCHMOVE = 'pinchmove',
  PANSTART = 'panstart',
  PANMOVE = 'panmove',
  PANEND = 'panend',
  PRESS = 'press',
  ACTION_END = 'actionend',
  TOUCHSTART = 'touchstart',
  TOUCHMOVE = 'touchmove',
  TOUCHEND = 'touchend',
  CANVAS_TOUCHSTART = 'canvas:touchstart',
  CANVAS_TOUCHMOVE = 'canvas:touchmove',
  CANVAS_TOUCHEND = 'canvas:touchend',
  NODE_TOUCHSTART = 'node:touchstart',
  NODE_TOUCHMOVE = 'node:touchmove',
  NODE_TOUCHEND = 'node:touchend',
  COMBO_TOUCHSTART = 'combo:touchstart',
  COMBO_TOUCHMOVE = 'combo:touchmove',
  COMBO_TOUCHEND = 'combo:touchend',
  EDGE_TOUCHSTART = 'edge:touchstart',
  EDGE_TOUCHMOVE = 'edge:touchmove',
  EDGE_TOUCHEND = 'edge:touchend',
  NODE_CLICK = 'node:click',
  NODE_DBLCLICK = 'node:dblclick',
  NODE_DROP = 'node:drop',
  NODE_DRAGOVER = 'node:dragover',
  NODE_DRAGENTER = 'node:dragenter',
  NODE_DRAGLEAVE = 'node:dragleave',
  NODE_DRAGSTART = 'node:dragstart',
  NODE_DRAG = 'node:drag',
  NODE_DRAGEND = 'node:dragend',
  NODE_TAP = 'node:tap',
  NODE_DBLTAP = 'node:dbltap',
  NODE_PANSTART = 'node:panstart',
  NODE_PANMOVE = 'node:panmove',
  NODE_PANEND = 'node:panend',
  NODE_PRESS = 'node:press',
  COMBO_CLICK = 'combo:click',
  COMBO_DBLCLICK = 'combo:dblclick',
  COMBO_DROP = 'combo:drop',
  COMBO_DRAGOVER = 'combo:dragover',
  COMBO_DRAGENTER = 'combo:dragenter',
  COMBO_DRAGLEAVE = 'combo:dragleave',
  COMBO_DRAGSTART = 'combo:dragstart',
  COMBO_DRAG = 'combo:drag',
  COMBO_DRAGEND = 'combo:dragend',
  COMBO_TAP = 'combo:tap',
  COMBO_DBLTAP = 'combo:dbltap',
  COMBO_PANSTART = 'combo:panstart',
  COMBO_PANMOVE = 'combo:panmove',
  COMBO_PANEND = 'combo:panend',
  COMBO_PRESS = 'combo:press',
  EDGE_CLICK = 'edge:click',
  EDGE_DBLCLICK = 'edge:dblclick',
  EDGE_DROP = 'edge:drop',
  EDGE_DRAGOVER = 'edge:dragover',
  EDGE_DRAGENTER = 'edge:dragenter',
  EDGE_DRAGLEAVE = 'edge:dragleave',
  EDGE_TAP = 'edge:tap',
  EDGE_DBLTAP = 'edge:dbltap',
  EDGE_PRESS = 'edge:press',
  CANVAS_CLICK = 'canvas:click',
  CANVAS_DBLCLICK = 'canvas:dblclick',
  CANVAS_DROP = 'canvas:drop',
  CANVAS_DRAGENTER = 'canvas:dragenter',
  CANVAS_DRAGLEAVE = 'canvas:dragleave',
  CANVAS_DRAGSTART = 'canvas:dragstart',
  CANVAS_DRAG = 'canvas:drag',
  CANVAS_DRAGEND = 'canvas:dragend',
  CANVAS_TAP = 'canvas:tap',
  CANVAS_DBLTAP = 'canvas:dbltap',
  CANVAS_PANSTART = 'canvas:panstart',
  CANVAS_PANMOVE = 'canvas:panmove',
  CANVAS_PANEND = 'canvas:panend',
  CANVAS_PRESS = 'canvas:press',
  // BEFORERENDER = 'beforerender',
  // AFTERRENDER = 'afterrender',
  // BEFOREADDITEM = 'beforeadditem',
  // AFTERADDITEM = 'afteradditem',
  // BEFOREREMOVEITEM = 'beforeremoveitem',
  // AFTERREMOVEITEM = 'afterremoveitem',
  // BEFOREUPDATEITEM = 'beforeupdateitem',
  // AFTERUPDATEITEM = 'afterupdateitem',
  // BEFOREITEMVISIBILITYCHANGE = 'beforeitemvisibilitychange',
  // AFTERITEMVISIBILITYCHANGE = 'afteritemvisibilitychange',
  // BEFOREITEMSTATECHANGE = 'beforeitemstatechange',
  // AFTERITEMSTATECHANGE = 'afteritemstatechange',
  // BEFOREITEMREFRESH = 'beforeitemrefresh',
  // AFTERITEMREFRESH = 'afteritemrefresh',
  // BEFOREITEMSTATESCLEAR = 'beforeitemstatesclear',
  // AFTERITEMSTATESCLEAR = 'afteritemstatesclear',
  // BEFOREMODECHANGE = 'beforemodechange',
  // AFTERMODECHANGE = 'aftermodechange',
  // BEFORELAYOUT = 'beforelayout',
  // AFTERLAYOUT = 'afterlayout',
  // BEFORECREATEEDGE = 'beforecreateedge',
  // AFTERCREATEEDGE = 'aftercreateedge',
  // BEFOREGRAPHREFRESHPOSITION = 'beforegraphrefreshposition',
  // AFTERGRAPHREFRESHPOSITION = 'aftergraphrefreshposition',
  // BEFOREGRAPHREFRESH = 'beforegraphrefresh',
  // AFTERGRAPHREFRESH = 'aftergraphrefresh',
  // BEFOREANIMATE = 'beforeanimate',
  // AFTERANIMATE = 'afteranimate',
  // BEFOREPAINT = 'beforepaint',
  // AFTERPAINT = 'afterpaint',
  // BEFORECOLLAPSEEXPANDCOMBO = 'beforecollapseexpandcombo',
  // AFTERCOLLAPSEEXPANDCOMBO = 'aftercollapseexpandcombo',
  // GRAPHSTATECHANGE = 'graphstatechange',
  // AFTERACTIVATERELATIONS = 'afteractivaterelations',
  // NODESELECTCHANGE = 'nodeselectchange',
  // TOOLTIPCHANGE = 'tooltipchange',
  // WHEELZOOM = 'wheelzoom',
  // VIEWPORTCHANGE = 'viewportchange',
  // DRAGNODEEND = 'dragnodeend',
  // STACKCHANGE = 'stackchange',
}

export interface F6GraphEvent extends FederatedEvent {
  item: Item | null;
}