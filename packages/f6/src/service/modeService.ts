//@ts-nocheck
import { each, isArray, isString } from '@antv/util';

export default class ModeService {
  graph = null;

  public destroyed: boolean;

  behaviorService = null;

  eventService = null;

  /**
   * modes = {
   *  default: [ 'drag-node', 'zoom-canvas' ],
   *  edit: [ 'drag-canvas', {
   *    type: 'brush-select',
   *    trigger: 'ctrl'
   *  }]
   * }
   *
   * @private
   * @type {Modes}
   * @memberof Mode
   */
  public modes;

  /**
   * mode = 'drag-node'
   *
   * @private
   * @type {string}
   * @memberof Mode
   */
  public mode: string;

  private currentBehaves: IBehaviorOption[];

  constructor(graph, modes?, defaultMode?) {
    this.destroyed = false;

    this.graph = graph;
    this.behaviorService = graph.behaviorService;
    this.eventService = graph.eventService;
    if (modes) {
      this.setModes(modes, defaultMode);
    }
  }

  public setModes(modes, defaultMode = 'default') {
    this.modes = modes || {
      default: [],
    };
    this.formatModes();

    this.mode = defaultMode;
    this.currentBehaves = [];
    this.setMode(this.mode);
  }

  private formatModes() {
    const { modes } = this;
    each(modes, (mode) => {
      each(mode, (behavior, i) => {
        if (isString(behavior)) {
          mode[i] = { type: behavior };
        }
      });
    });
  }

  private setBehaviors(mode: string) {
    const behaviors = this.modes[mode];
    const behaves: IBehaviorOption[] = [];
    let behave: IBehaviorOption;
    each(behaviors || [], (behavior) => {
      const BehaviorInstance = this.behaviorService.getBehavior(behavior.type || behavior);
      if (!BehaviorInstance) {
        return;
      }

      behave = new BehaviorInstance(behavior);
      if (behave) {
        behave.bindEvents(this.graph);
        behaves.push(behave);
      }
    });
    this.currentBehaves = behaves;
  }

  private static mergeBehaviors(modeBehaviors: ModeType[], behaviors: ModeType[]): ModeType[] {
    each(behaviors, (behavior) => {
      if (modeBehaviors.indexOf(behavior) < 0) {
        if (isString(behavior)) {
          behavior = { type: behavior };
        }
        modeBehaviors.push(behavior);
      }
    });
    return modeBehaviors;
  }

  private static filterBehaviors(modeBehaviors: ModeType[], behaviors: ModeType[]): ModeType[] {
    const result: ModeType[] = [];
    modeBehaviors.forEach((behavior) => {
      let type: string = '';
      if (isString(behavior)) {
        type = behavior;
      } else {
        // eslint-disable-next-line prefer-destructuring
        type = behavior.type;
      }
      if (behaviors.indexOf(type) < 0) {
        result.push(behavior);
      }
    });
    return result;
  }

  public setMode(mode: string) {
    const { modes } = this;

    const current = mode;

    const behaviors = modes[current];
    if (!behaviors) {
      return;
    }
    // graph.emit('beforemodechange', { mode });

    each(this.currentBehaves, (behave) => {
      if (behave.delegate) behave.delegate.remove();
      behave.unBindEvents(this.graph);
    });

    this.setBehaviors(current);

    // graph.emit('aftermodechange', { mode });
    this.mode = mode;
  }

  public getMode(): string {
    return this.mode;
  }

  /**
   * 动态增加或删除 Behavior
   *
   * @param {ModeType[]} behaviors
   * @param {(ModeType[] | ModeType)} modes
   * @param {boolean} isAdd
   * @returns {Mode}
   * @memberof Mode
   */
  public manipulateBehaviors(behaviors, modes: string[] | string, isAdd: boolean): ModeService {
    let behaves: ModeType[];
    if (!isArray(behaviors)) {
      behaves = [behaviors];
    } else {
      behaves = behaviors;
    }

    if (isArray(modes)) {
      each(modes, (mode) => {
        if (!this.modes[mode]) {
          if (isAdd) {
            this.modes[mode] = behaves;
          }
        } else if (isAdd) {
          this.modes[mode] = ModeService.mergeBehaviors(this.modes[mode] || [], behaves);
        } else {
          this.modes[mode] = ModeService.filterBehaviors(this.modes[mode] || [], behaves);
        }
      });

      return this;
    }

    let currentMode = modes;
    if (!modes) {
      currentMode = this.mode; // isString(this.mode) ? this.mode : this.mode.type
    }

    if (!this.modes[currentMode]) {
      if (isAdd) {
        this.modes[currentMode] = behaves;
      }
    }

    if (isAdd) {
      this.modes[currentMode] = ModeService.mergeBehaviors(this.modes[currentMode] || [], behaves);
    } else {
      this.modes[currentMode] = ModeService.filterBehaviors(this.modes[currentMode] || [], behaves);
    }

    this.setMode(this.mode);

    return this;
  }

  /**
   * 更新行为参数
   * @param {string | ModeOption | ModeType} behavior 需要更新的行为
   * @param {string | string[]} modes 指定的模式中的行为，不指定则为 default
   * @return {Graph} Graph
   */
  public updateBehavior(behavior: string, newCfg: object, mode?: string): ModeService {
    if (isString(behavior)) {
      behavior = { type: behavior };
    }
    let behaviorSet = [];
    if (!mode || mode === this.mode || mode === 'default') {
      behaviorSet = this.currentBehaves;
      if (!behaviorSet || !behaviorSet.length) {
        console.warn('Update behavior failed! There is no behaviors in this mode on the graph.');
        return this;
      }
      const length = behaviorSet.length;
      for (let i = 0; i < length; i++) {
        const behave = behaviorSet[i];
        if (behave.type === behavior.type) {
          behave.updateCfg(newCfg);
          return this;
        }
        if (i === length - 1)
          console.warn('Update behavior failed! There is no such behavior in the mode');
      }
    } else {
      behaviorSet = this.modes[mode];
      if (!behaviorSet || !behaviorSet.length) {
        console.warn('Update behavior failed! There is no behaviors in this mode on the graph.');
        return this;
      }
      const length = behaviorSet.length;
      for (let i = 0; i < length; i++) {
        let behave = behaviorSet[i];
        if (behave.type === behavior.type || behave === behavior.type) {
          if (behave === behavior.type) behave = { type: behave };
          Object.assign(behave, newCfg);
          behaviorSet[i] = behave;
          return this;
        }
        if (i === length - 1)
          console.warn('Update behavior failed! There is no such behavior in the mode');
      }
    }

    return this;
  }

  public destroy() {
    // (this.graph as IAbstractGraph | null) = null;
    (this.modes as Modes | null) = null;
    (this.currentBehaves as IBehaviorOption[] | null) = null;
    this.destroyed = true;
  }
}
