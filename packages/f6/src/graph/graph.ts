import { each, isNil, uniqueId } from '@antv/util';
import { action, makeObservable, observable } from 'mobx';
import { BehaviorService } from '../behavior';
import { Combo } from '../item/combo/combo';
import { ComboManager } from '../item/combo/manager';
import { EdgeManager } from '../item/edge/manager';
import { HullManager } from '../item/hull/hull';
import { NodeManager } from '../item/node/manager';
import EventService from '../service/eventService';
import { LayoutService } from '../service/layoutService';
import ModeService from '../service/modeService';
import { ViewService } from '../service/viewService';

export class Graph {
  nodeManager = null;
  edgeManager = null;
  comboManager = null;
  layoutService = null;
  hullManager = null;
  eventService = null;
  modeService = null;
  behaviorService = null;
  viewService = null;
  enabeAnimate = true;
  isNeedFitView = false;
  isNeedFitCenter = false;
  isLayoutFinished = false;
  isDestroyed = false;

  canvasJSXroot = null;
  canvas = null;
  graphRoot = null;

  constructor(canvasJSXroot, canvas) {
    this.nodeManager = new NodeManager(this);
    this.edgeManager = new EdgeManager(this);
    this.comboManager = new ComboManager(this);
    this.viewService = new ViewService(this);
    this.hullManager = new HullManager(this);

    this.layoutService = new LayoutService();
    this.behaviorService = BehaviorService;
    this.eventService = new EventService(this);
    this.modeService = new ModeService(this);

    this.canvasJSXroot = canvasJSXroot;
    this.canvas = canvas;

    makeObservable(this, {
      enabeAnimate: observable,
      setEnableAnimate: action,
      isLayoutFinished: observable,
      setLayoutFinshed: action,
      isNeedFitCenter: observable,
      isNeedFitView: observable,
      fitView: action,
      fitCenter: action,
    });
  }

  init(cfg) {
    const {
      data,
      width,
      height,
      devicePixelRatio,
      layout,
      modes,
      defaultNode,
      defaultEdge,
      defaultCombo,
      nodeStateStyles,
      edgeStateStyles,
      comboStateStyles,
    } = cfg;
    this.modeService.init(modes);
    this.eventService.initEvents(this.canvasJSXroot, this.canvas);
    this.nodeManager.init(data.nodes, defaultNode, nodeStateStyles);
    this.edgeManager.init(data.edges, defaultEdge, edgeStateStyles);
    this.comboManager.init(data.combos, defaultCombo, comboStateStyles);
    this.hullManager.init(data.hulls);
    this.layoutService.setLayoutConfig(layout, width, height);
    this.viewService.init({ width, height, devicePixelRatio });
    this.layout();
  }

  setGraphRoot(graphRoot) {
    this.graphRoot = graphRoot;
    this.viewService.setGraphRoot(graphRoot);
  }

  layout() {
    const nodes = this.nodeManager.models.map(({ id, x, y, visible }) => ({ id, x, y, visible }));
    const edges = this.edgeManager.models.map(({ source, target, visible }) => ({
      source,
      target,
      visible,
    }));

    const tick = () => {
      nodes.forEach(({ id, x, y }) => {
        this.nodeManager.setPosition(id, { x, y });
      });
    };

    this.layoutService.layout(
      { nodes, edges, combos: [] },
      () => {
        tick();
        this.setLayoutFinshed(true);
      },
      () => {
        tick();
      },
    );
  }

  updateLayout(cfg) {
    this.layoutService.setLayoutConfig(cfg, this.getWidth(), this.getHeight());
    this.layout();
  }

  findById(id) {
    return this.nodeManager.byId(id) || this.comboManager.byId(id) || this.edgeManager.byId(id);
  }

  hideItem(item) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;
    temItem.hideItem();
  }

  showItem(item) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;
    temItem.showItem();
  }

  translate(x = 0, y = 0) {
    this.viewService.translate(x, y);
  }

  translateTo(tox, toy) {
    this.viewService.translateTo(tox, toy);
  }

  zoom(ratio, center) {
    this.eventService.zoom(ratio, center);
  }

  zoomTo(toRatio, center) {
    this.viewService.zoomTo(toRatio, center);
  }

  getZoom() {
    return this.viewService.getZoom();
  }

  getMatrix() {
    return this.viewService.getMatrix();
  }

  getCanvasBBox() {
    return this.viewService.getCanvasBBox();
  }

  fitView() {
    this.isNeedFitView = !this.isNeedFitView;
  }

  fitCenter() {
    this.isNeedFitCenter = !this.isNeedFitCenter;
  }

  on(...args) {
    this.eventService.on(...args);
  }

  off(...args) {
    this.eventService.on(...args);
  }

  emit(...args) {
    this.eventService.emit(...args);
  }

  addItem(type, model) {
    switch (type) {
      case 'node':
        this.nodeManager.addItem(model);
        break;
      case 'edge':
        this.edgeManager.addItem(model);
        break;
      case 'combo':
        this.comboManager.addItem(model);
        break;
      default:
        break;
    }
  }

  removeItem(item) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;

    let removeEdges = [];
    const removeNodes = [];
    const removeCombos = [];

    switch (temItem.type) {
      case 'node':
        removeEdges = temItem.getEdges();
        removeNodes.push(temItem);
        break;
      case 'edge':
        removeEdges.push(temItem);
        break;
      case 'combo':
        removeEdges = temItem.getEdges();
        removeCombos.push(temItem);
        break;
      default:
        break;
    }

    removeEdges.forEach((item) => this.edgeManager.removeItem(item.id));
    removeNodes.forEach((item) => this.nodeManager.removeItem(item.id));
    removeCombos.forEach((item) => this.comboManager.removeItem(item.id));
  }

  updateItem(item, model) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;

    switch (temItem.type) {
      case 'node':
        this.nodeManager.updateItem(temItem.id, model);
        break;
      case 'edge':
        this.edgeManager.updateItem(temItem.id, model);
        break;
      case 'combo':
        this.comboManager.updateItem(temItem.id, model);
        break;
      default:
        break;
    }
  }

  getItemManager(type) {
    switch (type) {
      case 'node':
        return this.nodeManager;
      case 'edge':
        return this.edgeManager;
      case 'combo':
        return this.comboManager;
      default:
        break;
    }
  }

  public findAll(type, fn: (item, index?: number) => boolean) {
    const result = [];

    each(this.getItemManager(type).items, (item, i) => {
      if (fn(item, i)) {
        result.push(item);
      }
    });

    return result;
  }

  findAllByState(type, state) {
    return this.findAll(type, (item) => item.hasState(state));
  }

  setItemState(item, stateName, value) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;

    item.setState(stateName, value);
  }

  clearItemStates(item, stateNames) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;

    item.clearStates(stateNames);
  }

  getNodes() {
    return Object.values(this.nodeManager.items);
  }

  getEdges() {
    return Object.values(this.edgeManager.items);
  }

  getCombos(): Combo[] {
    return this.comboManager.items;
  }

  setEnableAnimate(enabeAnimate: boolean) {
    this.enabeAnimate = enabeAnimate;
  }

  setLayoutFinshed(isLayoutFinished: boolean) {
    this.isLayoutFinished = isLayoutFinished;
  }

  getPointByClient(x, y) {
    return this.viewService.getPointByClient(x, y);
  }

  getWidth() {
    return this.viewService.width;
  }

  getHeight() {
    return this.viewService.height;
  }

  changeSize(width, height) {
    this.viewService.changeSize(width, height);
  }

  changeData(data) {
    if (!data) return;
    // nodes
    this.nodeManager.changeData(data.nodes);
    // edges
    this.edgeManager.changeData(data.edges);
    // combo
    this.comboManager.changeData(data.combos);
    // hull
    this.hullManager.changeData(data.hulls);
    // layout
    this.layout();
  }

  asyncViewPool = {};

  runAsyncTask(task) {
    const uid = uniqueId();
    this.asyncViewPool[uid] = task;
    return uid;
  }

  finishAsyncTask(id) {
    this.asyncViewPool[id]?.();
    delete this.asyncViewPool[id];
  }

  destroy() {
    this.isDestroyed = true;
    this.nodeManager.destroy();
    this.edgeManager.destroy();
    this.comboManager.destroy();
    this.hullManager.destroy();
    this.eventService.destroy();
    this.layoutService.destroy();
    this.asyncViewPool = {};
  }
}
