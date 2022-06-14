//@ts-nocheck

import { clone, groupBy, isFunction, mix } from '@antv/util';

import { Layout } from '@antv/layout/lib/layout/layout';
import { calculationItemsBBox } from '../utils';

const LayoutPipesAdjustNames = ['force', 'grid', 'circular'];
export class layoutManager {
  protected layoutCfg;

  protected layoutType: string | string[] = [];

  protected layoutMethods = [];

  protected data;

  public setLayoutConfig(layoutConfig, width, height) {
    const layoutCfg: any = {};
    Object.assign(
      layoutCfg,
      {
        width,
        height,
        center: [width / 2, height / 2],
      },
      layoutConfig,
    );
    this.layoutCfg = layoutCfg;
  }

  public getLayoutType(): string | string[] {
    return this.getLayoutCfgType(this.layoutCfg);
  }

  protected getLayoutCfgType(layoutCfg): string | string[] {
    const type = layoutCfg.type;
    // type should be top priority
    if (type) {
      return type;
    }

    const pipes = layoutCfg.pipes;
    if (Array.isArray(pipes)) {
      return pipes.map((pipe) => pipe?.type || '');
    }

    return null;
  }

  protected isLayoutTypeSame(cfg): boolean {
    const current = this.getLayoutCfgType(cfg);
    // already has pipes
    if (Array.isArray(this.layoutType)) {
      return this.layoutType.every((type, index) => type === current[index]);
    }

    return cfg?.type === this.layoutType;
  }

  // 绘制
  public refreshLayout() {
    // if (graph.get('animate')) {
    //   graph.positionsAnimate();
    // } else {
    //   graph.refreshPositions();
    // }
  }

  // 更换布局
  // public changeLayout(cfg) {
  //   this.layoutCfg = cfg;

  //   this.destoryLayoutMethods();
  //   this.layout();
  // }

  // // 更换数据
  // public changeData() {
  //   this.destoryLayoutMethods();
  //   this.layout();
  // }

  public destoryLayoutMethods() {
    const { layoutMethods } = this;
    layoutMethods?.forEach((layoutMethod) => {
      layoutMethod.destroy();
    });
    this.layoutMethods = [];
  }

  // 销毁布局，不能使用 this.destroy，因为 controller 还需要被使用，只是把布局算法销毁
  public destroyLayout() {
    // const { graph } = this;
    // this.destoryLayoutMethods();
    // graph.set('layout', undefined);
    // this.layoutCfg = undefined;
    // this.layoutType = undefined;
    // this.layoutMethods = undefined;
  }

  // 从 this.graph 获取数据
  public setDataFromGraph({ nodes: nodeItems, edges: edgeItems, combos: comboItems }) {
    const nodes = [];
    const hiddenNodes = [];
    const edges = [];
    const hiddenEdges = [];
    const comboEdges = [];
    const combos = [];
    const hiddenCombos = [];
    // const nodeItems = this.graph.getNodes();
    // const edgeItems = this.graph.getEdges();
    // const comboItems = this.graph.getCombos();
    const nodeLength = nodeItems.length;
    for (let i = 0; i < nodeLength; i++) {
      const nodeItem = nodeItems[i];
      if (!nodeItem) continue;
      const model = nodeItem;
      if (!nodeItem.visible) {
        hiddenNodes.push(model);
        continue;
      }
      nodes.push(model);
    }

    const edgeLength = edgeItems.length;
    for (let i = 0; i < edgeLength; i++) {
      const edgeItem = edgeItems[i];
      if (!edgeItem || edgeItem.destroyed) continue;
      const model = edgeItem;
      if (!edgeItem.visible) {
        hiddenEdges.push(model);
        continue;
      }
      if (!model.isComboEdge) edges.push(model);
      else comboEdges.push(model);
    }

    const comboLength = comboItems.length;
    for (let i = 0; i < comboLength; i++) {
      const comboItem = comboItems[i];
      if (comboItem.destroyed) continue;
      const model = comboItem;
      if (!comboItem.visible) {
        hiddenEdges.push(model);
        continue;
      }
      combos.push(model);
    }
    return {
      nodes,
      hiddenNodes,
      edges,
      hiddenEdges,
      combos,
      hiddenCombos,
      comboEdges,
    };
  }

  protected reLayoutMethod(layoutMethod, layoutCfg): Promise<void> {
    return new Promise((reslove, reject) => {
      const layoutType = layoutCfg?.type;

      // 每个布局方法都需要注册
      layoutCfg.onLayoutEnd = () => {
        // graph.emit('aftersublayout', { type: layoutType });
        reslove();
      };

      layoutMethod.init(this.data);
      if (layoutType === 'force') {
        layoutMethod.ticking = false;
        layoutMethod.forceSimulation.stop();
      }

      // graph.emit('beforesublayout', { type: layoutType });
      layoutMethod.execute();
      if (layoutMethod.isCustomLayout && layoutCfg.onLayoutEnd) layoutCfg.onLayoutEnd();
    });
  }

  // 重新布局
  // public relayout(reloadData?: boolean) {
  //   const { layoutMethods, layoutCfg } = this;

  //   if (reloadData) {
  //     this.data = this.setDataFromGraph(this.data);
  //     const { nodes } = this.data;
  //     if (!nodes) {
  //       return false;
  //     }
  //     this.initPositions(layoutCfg.center, nodes);
  //   }

  //   graph.emit('beforelayout');

  //   let start = Promise.resolve();
  //   layoutMethods?.forEach((layoutMethod: any, index: number) => {
  //     const currentCfg = layoutCfg[index];
  //     start = start.then(() => this.reLayoutMethod(layoutMethod, currentCfg));
  //   });

  //   start
  //     .then(() => {
  //       if (layoutCfg.onAllLayoutEnd) layoutCfg.onAllLayoutEnd();
  //     })
  //     .catch((error) => {
  //       console.warn('relayout failed', error);
  //     });
  // }

  // 筛选参与布局的nodes和edges
  protected filterLayoutData(data, cfg) {
    const { nodes, edges, ...rest } = data;
    if (!nodes) {
      return data;
    }

    let nodesFilter;
    let edegsFilter;
    if (isFunction(cfg?.nodesFilter)) {
      nodesFilter = cfg.nodesFilter;
    } else {
      nodesFilter = () => true;
    }

    if (isFunction(cfg?.edgesFilter)) {
      edegsFilter = cfg.edgesFilter;
    } else {
      const nodesMap = nodes.reduce((acc, cur) => {
        acc[cur.id] = true;
        return acc;
      }, {});
      edegsFilter = (edge) => {
        return nodesMap[edge.source] && nodesMap[edge.target];
      };
    }

    return {
      nodes: nodes.filter(nodesFilter),
      edges: edges.filter(edegsFilter),
      ...rest,
    };
  }

  protected getLayoutBBox(nodes) {
    const graphGroupNodes = groupBy(nodes, (n: any) => {
      return n.layoutOrder;
    });
    const layoutNodes = Object.values(graphGroupNodes).map((value) => {
      const bbox: any = calculationItemsBBox({
        getBBox: () => node.getBBox(value.id),
      });
      bbox.size = [bbox.width, bbox.height];
      return bbox;
    });

    const groupNodes = Object.values(groupBy(nodes, 'layoutOrder'));
    return {
      groupNodes,
      layoutNodes,
    };
  }

  // 控制布局动画
  // eslint-disable-next-line class-methods-use-this
  public layoutAnimate() {}

  // 将当前节点的平均中心移动到原点
  // public moveToZero() {
  //   const { graph } = this;

  //   const data = graph.get('data');
  //   const { nodes } = data;
  //   if (nodes[0].x === undefined || nodes[0].x === null || isNaN(nodes[0].x)) {
  //     return;
  //   }
  //   const meanCenter = [0, 0];
  //   const nodeLength = nodes.length;
  //   for (let i = 0; i < nodeLength; i++) {
  //     const node = nodes[i];
  //     meanCenter[0] += node.x;
  //     meanCenter[1] += node.y;
  //   }

  //   meanCenter[0] /= nodes.length;
  //   meanCenter[1] /= nodes.length;

  //   for (let i = 0; i < nodeLength; i++) {
  //     const node = nodes[i];
  //     node.x -= meanCenter[0];
  //     node.y -= meanCenter[1];
  //   }
  // }

  public onTick(timestamp: number) {
    this.layoutMethods?.forEach((layoutMethod) => {
      layoutMethod?.onTick?.(timestamp);
    });
  }

  // // 更新布局参数
  // public updateLayoutCfg(cfg) {
  //   const { graph, layoutMethods } = this;
  //   const layoutCfg = mix({}, this.layoutCfg, cfg);
  //   this.layoutCfg = layoutCfg;

  //   if (!layoutMethods?.length) {
  //     this.layout();
  //     return;
  //   }
  //   this.data = this.setDataFromGraph();

  //   graph.emit('beforelayout');

  //   let start = Promise.resolve();
  //   if (layoutMethods.length === 1) {
  //     start = start.then(() => this.updateLayoutMethod(layoutMethods[0], layoutCfg));
  //   } else {
  //     layoutMethods?.forEach((layoutMethod, index) => {
  //       const currentCfg = layoutCfg.pipes[index];
  //       start = start.then(() => this.updateLayoutMethod(layoutMethod, currentCfg));
  //     });
  //   }
  //   this.data = this.setDataFromGraph();

  //   start
  //     .then(() => {
  //       if (layoutCfg.onAllLayoutEnd) layoutCfg.onAllLayoutEnd();
  //     })
  //     .catch((error) => {
  //       console.warn('layout failed', error);
  //     });
  // }

  /**
   * @param {function} success callback
   * @return {boolean} 是否使用web worker布局
   */
  public layout(data, success?: () => void, innerTickCallBack?) {
    this.data = this.setDataFromGraph(data);
    const { nodes, hiddenNodes } = this.data;

    if (!nodes) {
      return;
    }

    const layoutCfg = this.layoutCfg;
    const { width, height, center, onLayoutEnd, adjust, onTick } = layoutCfg;

    this.destoryLayoutMethods();

    // graph.emit('beforelayout');
    this.initPositions(center, nodes, width, height);
    // init hidden ndoes
    this.initPositions(center, hiddenNodes, width, height);

    // 在 onAllLayoutEnd 中执行用户自定义 onLayoutEnd，触发 afterlayout、更新节点位置、fitView/fitCenter、触发 afterrender
    const onAllLayoutEnd = async () => {
      onLayoutEnd?.();
      if (adjust && layoutCfg.pipes) {
        await this.adjustPipesBox(this.data, adjust);
      }
      if (success) success();
    };

    let start = Promise.resolve();
    if (layoutCfg.type) {
      start = start.then(() => this.execLayoutMethod({ ...layoutCfg }, 0, innerTickCallBack));
    } else if (layoutCfg.pipes) {
      layoutCfg.pipes.forEach((cfg, index) => {
        start = start.then(() => this.execLayoutMethod({ ...cfg }, index, innerTickCallBack));
      });
    }

    // 最后统一在外部调用onAllLayoutEnd
    start
      .then(() => {
        // 在执行 execute 后立即执行 success，且在 timeBar 中有 throttle，可以防止 timeBar 监听 afterrender 进行 changeData 后 layout，从而死循环
        // 对于 force 一类布局完成后的 fitView 需要用户自己在 onLayoutEnd 中配置
        onAllLayoutEnd();
      })
      .catch((error) => {
        console.warn('graph layout failed,', error);
      });
  }

  private execLayoutMethod(layoutCfg, order, innerTickCallBack): Promise<void> {
    return new Promise((reslove, reject) => {
      // const { graph } = this;
      const layoutType = layoutCfg.type;

      // 每个布局方法都需要注册
      layoutCfg.onLayoutEnd = () => {
        // graph.emit('aftersublayout', { type: layoutType });
        this.layoutMethods.splice(this.layoutMethods.indexOf(layoutMethod), 1);
        reslove();
      };

      // let enableTick = false;
      const { onTick } = layoutCfg;
      const tick = () => {
        onTick?.();
        innerTickCallBack?.();
      };
      layoutCfg.tick = tick;

      if (layoutCfg.type === 'comboForce') {
        // layoutCfg.comboTrees = graph.get('comboTrees');
      }

      let layoutMethod;

      try {
        layoutMethod = new Layout(layoutCfg);
      } catch (e) {
        console.warn(`The layout method: '${layoutType}' does not exist! Please specify it first.`);
        reject();
      }

      const layoutData = this.filterLayoutData(this.data, layoutCfg);
      this.addLayoutOrder(layoutData, order);
      layoutMethod.init(layoutData);
      // 若存在节点没有位置信息，且没有设置 layout，在 initPositions 中 random 给出了所有节点的位置，不需要再次执行 random 布局
      // 所有节点都有位置信息，且指定了 layout，则执行布局（代表不是第一次进行布局）
      // graph.emit('beforesublayout', { type: layoutType });
      layoutMethod.execute();
      if (layoutMethod.isCustomLayout && layoutCfg.onLayoutEnd) layoutCfg.onLayoutEnd();
      this.layoutMethods.push(layoutMethod);
    });
  }

  // private updateLayoutMethod(layoutMethod, layoutCfg): Promise<void> {
  //   return new Promise((reslove, reject) => {
  //     const { graph } = this;
  //     const layoutType = layoutCfg?.type;

  //     // 每个布局方法都需要注册
  //     layoutCfg.onLayoutEnd = () => {
  //       graph.emit('aftersublayout', { type: layoutType });
  //       reslove();
  //     };

  //     const layoutData = this.filterLayoutData(this.data, layoutCfg);
  //     layoutMethod.init(layoutData);
  //     layoutMethod.updateCfg(layoutCfg);
  //     graph.emit('beforesublayout', { type: layoutType });
  //     layoutMethod.execute();
  //     if (layoutMethod.isCustomLayout && layoutCfg.onLayoutEnd) layoutCfg.onLayoutEnd();
  //   });
  // }

  protected adjustPipesBox(data, adjust: string): Promise<void> {
    return new Promise((resolve) => {
      const { nodes } = data;
      if (!nodes?.length) {
        resolve();
      }

      if (!LayoutPipesAdjustNames.includes(adjust)) {
        console.warn(
          `The adjust type ${adjust} is not supported yet, please assign it with 'force', 'grid', or 'circular'.`,
        );
        resolve();
      }

      const layoutCfg = {
        center: this.layoutCfg.center,
        nodeSize: (d) => Math.max(d.height, d.width),
        preventOverlap: true,
        onLayoutEnd: () => {},
      };

      // 计算出大单元
      const { groupNodes, layoutNodes } = this.getLayoutBBox(nodes);
      const preNodes = clone(layoutNodes);

      // 根据大单元坐标的变化，调整这里面每个小单元nodes
      layoutCfg.onLayoutEnd = () => {
        layoutNodes?.forEach((ele, index) => {
          const dx = ele.x - preNodes[index]?.x;
          const dy = ele.y - preNodes[index]?.y;
          groupNodes[index]?.forEach((n: any) => {
            n.x += dx;
            n.y += dy;
          });
        });
        resolve();
      };
      const layoutMethod = new Layout[adjust](layoutCfg);
      layoutMethod.layout({ nodes: layoutNodes });
    });
  }

  // public destroy() {
  //   this.destoryLayoutMethods();
  //   this.destroyed = true;

  //   this.graph.set('layout', undefined);
  //   this.layoutCfg = undefined;
  //   this.layoutType = undefined;
  //   this.layoutMethods = undefined;
  //   this.graph = null;
  // }

  // 初始化节点到 center 附近
  public initPositions(center, nodes, _width, _height): boolean {
    if (!nodes) {
      return false;
    }
    const nodeLength = nodes ? nodes.length : 0;
    if (!nodeLength) return;

    const width = _width * 0.85;
    const height = _height * 0.85;
    const horiNum = Math.ceil(Math.sqrt(nodeLength) * (width / height));
    const vertiNum = Math.ceil(nodeLength / horiNum);
    let horiGap = width / (horiNum - 1);
    let vertiGap = height / (vertiNum - 1);
    if (!isFinite(horiGap) || !horiGap) horiGap = 0;
    if (!isFinite(vertiGap) || !horiGap) vertiGap = 0;
    const beginX = center[0] - width / 2;
    const beginY = center[1] - height / 2;

    let allHavePos = true;
    for (let i = 0; i < nodeLength; i++) {
      const node = nodes[i];
      if (isNaN(node.x)) {
        allHavePos = false;
        node.x = (i % horiNum) * horiGap + beginX;
      }
      if (isNaN(node.y)) {
        allHavePos = false;
        node.y = Math.floor(i / horiNum) * vertiGap + beginY;
      }
    }

    return allHavePos;
  }

  addLayoutOrder(data, order) {
    if (!data?.nodes?.length) {
      return;
    }
    const { nodes } = data;
    nodes.forEach((node) => {
      node.layoutOrder = order;
    });
  }
}
