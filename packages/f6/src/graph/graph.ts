import { each, isNil, uniqueId } from '@antv/util';
import { action, makeObservable, observable } from 'mobx';
import { BehaviorService } from '../behavior';
import global from '../global';
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

  // fitView、fitCenter 标记，api调用不断反转状态
  fitViewTag = 0;
  fitCenterTag = 0;
  // fitView、fitCenter 配置，控制layout后，是否需要fit
  isFitView = false;
  isFitCenter = false;

  isLinkCenter = false;

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
      fitCenterTag: observable,
      fitViewTag: observable,
      fitView: action,
      fitCenter: action,
    });
  }

  init(cfg) {
    const {
      data,
      width,
      height,
      pixelRatio,
      layout,
      modes,
      defaultNode,
      defaultEdge,
      defaultCombo,
      nodeStateStyles,
      edgeStateStyles,
      comboStateStyles,
      fitView,
      fitCenter,
      linkCenter,
    } = cfg;
    this.modeService.init(modes);
    this.eventService.initEvents(this.canvasJSXroot, this.canvas);
    this.nodeManager.init(data.nodes, defaultNode, nodeStateStyles, {
      type: global.defaultNode.type,
      size: global.defaultNode.size,
    });
    this.edgeManager.init(data.edges, defaultEdge, edgeStateStyles, {
      type: global.defaultEdge.type,
    });
    this.comboManager.init(data.combos, defaultCombo, comboStateStyles, {
      type: global.defaultCombo.type,
      size: global.defaultCombo.size,
      padding: global.defaultCombo.padding,
    });
    this.hullManager.init(data.hulls, {
      type: global.defaultHull.type,
      padding: global.defaultHull.padding,
    });
    this.setFitView(fitView);
    this.setFitCenter(fitCenter);
    this.isLinkCenter = linkCenter;
    this.layoutService.setLayoutConfig(layout, width, height);
    this.viewService.init({ width, height, pixelRatio });
    this.layout();
  }

  setGraphRoot(graphRoot) {
    this.graphRoot = graphRoot;
    this.viewService.setGraphRoot(graphRoot);
  }

  layout() {
    const nodes = this.nodeManager.models.map(({ id, x, y, size, visible }) => ({
      id,
      x,
      y,
      size,
      visible,
    }));
    const edges = this.edgeManager.models.map(({ source, target, visible }) => ({
      source,
      target,
      visible,
    }));

    const tick = () => {
      nodes.forEach(({ id, x, y }) => {
        this.nodeManager.setPosition(id, { x, y });
      });
      this.edgeManager.updatePoints();
      this.comboManager.updateComboSize();
    };

    this.layoutService.layout(
      { nodes, edges, combos: [] },
      () => {
        tick();
        this.fit();
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
    this.viewService.zoom(ratio, center);
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

  fit() {
    if (this.isFitView) {
      this.fitView();
    } else if (this.isFitCenter) {
      this.fitCenter();
    }
  }

  fitView() {
    this.fitViewTag = ++this.fitViewTag;
  }

  fitCenter() {
    this.fitCenterTag = ++this.fitCenterTag;
  }

  setFitView(isFitView) {
    this.isFitView = isFitView;
  }

  setFitCenter(isFitCenter) {
    this.isFitCenter = isFitCenter;
  }

  setLinkCenter(linkCenter = false) {
    if (this.isLinkCenter === linkCenter) return;
    this.isLinkCenter = linkCenter;
    this.edgeManager.updatePoints();
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
    let item;
    switch (type) {
      case 'node':
        return this.nodeManager.addItem(model);
      case 'edge':
        item = this.edgeManager.addItem(model);
        item.updatePoints();
        return item;
      case 'combo':
        item = this.comboManager.addItem(model);
        this.updateComboSize();
        return item;
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
    this.updateComboSize();
    this.edgeManager.updatePoints();
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
        temItem.getEdges().forEach((edge) => edge.updatePoints());
        break;
      case 'edge':
        this.edgeManager.updateItem(temItem.id, model);
        break;
      case 'combo':
        this.comboManager.updateItem(temItem.id, model);
        temItem.getEdges().forEach((edge) => edge.updatePoints());
        break;
      default:
        break;
    }
  }

  updateComboParentId(comboId, parentId) {
    const combo = this.findById(comboId);
    if (!combo) return;
    this.comboManager.updateParentId(comboId, parentId);
    this.comboManager.updateComboSize();
  }

  updateComboSize() {
    this.comboManager.updateComboSize();
    this.edgeManager.updatePoints();
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

    temItem.setState(stateName, value);
  }

  clearItemStates(item, stateNames) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.findById(item);
    }
    if (isNil(temItem)) return;

    temItem.clearStates(stateNames);
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
