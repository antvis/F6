import { BaseBehavior } from './base';

export class BehaviorService {
  // 所有自定义的 Behavior 的实例
  private static types = {};

  /**
   * 自定义 Behavior
   * @param type Behavior 名称
   * @param behavior Behavior 定义的方法集合
   */
  public static registerBehavior(type: string, behavior: BaseBehavior<any>) {
    if (!behavior) {
      throw new Error(`please specify handler for this behavior: ${type}`);
    }

    BehaviorService.types[type] = behavior;
  }

  public static hasBehavior(type: string) {
    return !!BehaviorService.types[type];
  }

  public static getBehavior(type: string) {
    return BehaviorService.types[type];
  }
}
