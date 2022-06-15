// @ts-nocheck
import { ext } from '@antv/matrix-util';
import { each, isNil } from '@antv/util';
import { action, makeObservable, observable } from 'mobx';
import { BehaviorService } from '../behavior';
import { ComboManager } from '../item/combo/manager';
import { EdgeManager } from '../item/edge/manager';
import { HullManager } from '../item/hull/hull';
import { NodeManager } from '../item/node/manager';
import { layoutManager } from '../layout/manager';
import EventService from '../service/eventService';
import ModeService from '../service/modeService';
import { BBox } from '../types';
import { View } from '../view';
const { transform } = ext;

export class Graph {
  nodeManager = null;
  edgeManager = null;
  comboManager = null;
  layoutManager = null;
  hullManager = null;
  eventService = null;
  modeService = null;
  behaviorService = null;
  view = null;

  matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

  constructor() {
    this.nodeManager = new NodeManager(this);
    this.edgeManager = new EdgeManager(this);
    this.comboManager = new ComboManager(this);
    this.view = new View(this);
    this.layoutManager = new layoutManager();
    this.hullManager = new HullManager();

    this.behaviorService = BehaviorService;
    this.eventService = new EventService(this);
    this.modeService = new ModeService(this);
    makeObservable(this, {
      matrix: observable,
      translate: action,
      zoom: action,
    });
  }

  init(cfg) {
    const { data, width, height, devicePixelRatio, layout, modes } = cfg;
    this.modeService.setModes(modes);
    this.nodeManager.init(data.nodes);
    this.edgeManager.init(data.edges);
    this.comboManager.init(data.combos);
    this.hullManager.init(data.hulls);
    this.layoutManager.setLayoutConfig(layout, width, height);
    this.view.init({ width, height, devicePixelRatio });
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
    this.layoutManager.layout({ nodes, edges, combos: [] }, tick, tick);
  }

  getItem(id) {
    return this.nodeManager.byId(id) || this.comboManager.byId(id);
  }

  findById(id) {
    return this.nodeManager.byId(id) || this.comboManager.byId(id) || this.edgeManager.byId(id);
  }

  hideItem(item) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.getItem(item);
    }
    if (isNil(temItem)) return;
    temItem.hideItem();
  }

  showItem(item) {
    let temItem = item;
    if (typeof item === 'string' || typeof item === 'number') {
      temItem = this.getItem(item);
    }
    if (isNil(temItem)) return;
    temItem.showItem();
  }

  translate(data) {
    const { x = 0, y = 0 } = data;
    this.matrix = transform(this.matrix, [['t', x, y]]);
  }

  translateTo(data) {
    const { x: tox = 0, y: toy = 0 } = data;
    const curX = this.matrix[6];
    const cury = this.matrix[7];

    this.translate({ x: tox - curX, y: toy - cury });
  }

  zoom(data) {
    const { ratio, center } = data;
    if (center) {
      this.matrix = transform(this.matrix, [
        ['t', -center.x, -center.y],
        ['s', ratio, ratio],
        ['t', center.x, center.y],
      ]);
    } else {
      this.matrix = transform(this.matrix, [['s', ratio, ratio]]);
    }
  }

  zoomTo(data) {
    const { ratio: toRatio, center } = data;
    const ratio = toRatio / this.matrix[0];
    this.zoom({ ratio, center });
  }

  fitView() {
    this.view.fitView();
  }

  fitCenter() {
    this.view.fitCenter();
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
      temItem = this.getItem(item);
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
      temItem = this.getItem(item);
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
      temItem = this.getItem(item);
    }
    if (isNil(temItem)) return;

    item.setState(stateName, value);
  }

  getCombos(): Combo[] {
    return this.comboManager.items;
  }

  getMatrix() {}
  getCanvasBBox(): BBox {}
  inject(key, fn) {
    this[key] = fn;
  }
}
