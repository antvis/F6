import { Component, Fragment, jsx } from '@antv/f-engine';

import { connect } from './connector';
import { Edge } from './edge';
import { Node } from './node';

import { isNil } from '@antv/util';
import { calcCanvasBBox, getMatrix, setMatrix } from '../adapter/element';
import { Combo } from './combo';
import { Hull } from './hull';

const NODE_Z_INDEX = 5;
const EDGE_Z_INDEX = NODE_Z_INDEX - 1;
const COMBO_Z_INDEX = EDGE_Z_INDEX - 1;
const HULL_Z_INDEX = COMBO_Z_INDEX - 1;

@connect((graph, props) => {
  return {
    nodeItems: graph.nodeManager.items,
    edgeItems: graph.edgeManager.items,
    comboItems: graph.comboManager.items,
    hullItems: graph.hullManager.items,
    nodeModelMap: graph.nodeManager.modelsMap,
    comboModelMap: graph.comboManager.modelsMap,
    nodes: graph.nodeManager.models,
    edges: graph.edgeManager.models,
    combos: graph.comboManager.models,
    hulls: graph.hullManager.models,
    sortedCombos: graph.comboManager.sortedCombos,
    nodeStatesMap: graph.nodeManager.statesMap,
    edgeStatesMap: graph.edgeManager.statesMap,
    comboStatesMap: graph.comboManager.statesMap,
    isAutoSize: graph.comboManager.isAutoSize,
    enabeAnimate: graph.enabeAnimate,
    isLayoutFinished: graph.isLayoutFinished,
    isNeedFitCenter: graph.isNeedFitCenter,
    isNeedFitView: graph.isNeedFitView,
    animations: graph.nodeManager.animations,
  };
})
export class GraphRoot extends Component {
  nodeRoot = { current: null };
  edgeRoot = { current: null };
  comboRoot = { current: null };
  hullRoot = { current: null };
  isFitViewed = false;
  isFitCentered = false;
  animate = false;
  prevProps = null;
  prevRootProps = null;

  willMount(): void {
    this.context.f6Context.graph.setGraphRoot(this);
    this.context.f6Context.graph.inject('getCanvasBBox', this.getBBox);
    this.context.f6Context.graph.inject('getMatrix', this.getMatrix);
  }

  didMount() {
    const {
      data,
      layout,
      modes,
      defaultNode,
      defaultEdge,
      defaultCombo,
      nodeStateStyles,
      edgeStateStyles,
      comboStateStyles,
      linkCenter,
      onGraphReady,
    } = this.props;
    const { width, height, devicePixelRatio } = this.context.root.props;
    this.context.f6Context.graph.init({
      width,
      height,
      devicePixelRatio,
      data,
      layout,
      modes,
      defaultNode,
      defaultEdge,
      defaultCombo,
      nodeStateStyles,
      edgeStateStyles,
      comboStateStyles,
      linkCenter,
    });
    onGraphReady?.(this.context.f6Context.graph);
  }

  didUpdate(): void {
    const graph = this.context.f6Context.graph;
    const {
      enabeAnimate,
      isLayoutFinished,
      fitView = true,
      fitCenter = true,
      fitViewPadding = 0,
      layout,
      modes,
      isNeedFitView,
      isNeedFitCenter,
    } = this.props;
    const { width, height } = this.context.root.props;

    // width height
    if (
      (!isNil(this.prevRootProps?.width) && this.prevRootProps.width !== width) ||
      (!isNil(this.prevRootProps?.height) && this.prevProps?.height !== height)
    ) {
      graph.changeSize(width, height);
    }

    // fitView fitCenter布局结束后且配置为true
    // fitView / fitCenter 标识翻转后
    if (
      (fitView && !this.isFitViewed && isLayoutFinished) ||
      (!isNil(this.prevProps?.isNeedFitView) && this.prevProps?.isNeedFitView !== isNeedFitView)
    ) {
      graph.viewService.fitView(fitViewPadding);
      this.isFitViewed = true;
    }
    if (
      (fitCenter && !fitView && !this.isFitCentered && isLayoutFinished) ||
      (!isNil(this.prevProps?.isNeedFitCenter) &&
        this.prevProps?.isNeedFitCenter !== isNeedFitCenter)
    ) {
      graph.viewService.fitCenter();
      this.isFitCentered = true;
    }
    if (
      this.prevRootProps?.fitViewPadding &&
      this.prevRootProps.fitViewPadding !== fitViewPadding
    ) {
      graph.viewService.setFitViewPadding(fitViewPadding);
    }

    if (this.prevRootProps?.modes && this.prevRootProps?.modes !== modes) {
      graph.modeService.setMode(modes);
    }

    if (this.prevRootProps?.layout && this.prevRootProps.layout !== layout) {
      graph.updatLayout(layout);
    }

    // 控制关闭全局动画
    this.animate = enabeAnimate;

    // 更新zIndex, 边后绘制，但需要在combo下面
    this.nodeRoot.current && (this.nodeRoot.current.container.style.zIndex = NODE_Z_INDEX);
    this.edgeRoot.current && (this.edgeRoot.current.container.style.zIndex = EDGE_Z_INDEX);
    this.comboRoot.current && (this.comboRoot.current.container.style.zIndex = COMBO_Z_INDEX);
    this.hullRoot.current && (this.hullRoot.current.container.style.zIndex = HULL_Z_INDEX);

    // 更新matrix，这部分可能直接用 api 控制会清晰些？

    this.prevRootProps = this.context.root.props;
    this.prevProps = this.props;
  }

  getBBox = () => {
    return calcCanvasBBox(this.container);
  };

  getMatrix = () => {
    return getMatrix(this.container);
  };

  setMatrix(matrix) {
    setMatrix(this.container, matrix);
  }

  render() {
    const {
      nodes,
      edges,
      combos,
      sortedCombos,
      hulls,
      isAutoSize,
      linkCenter,
      nodeModelMap,
      nodeItems,
      edgeItems,
      comboItems,
      hullItems,
      comboModelMap,
      comboStatesMap,
      nodeStatesMap,
      edgeStatesMap,
      animations,
    } = this.props;
    return (
      <Fragment>
        {nodes?.length > 0 && (
          <Fragment ref={this.nodeRoot}>
            {nodes.map((node, index) => {
              return (
                <Node
                  key={node.id}
                  node={node}
                  states={nodeStatesMap[node.id]}
                  item={nodeItems[node.id]}
                  animation={animations[node.id]}
                ></Node>
              );
            })}
          </Fragment>
        )}

        {sortedCombos?.length > 0 && (
          <Fragment ref={this.comboRoot}>
            {sortedCombos.map((sortedCombo) => {
              const item = comboItems[sortedCombo.id];
              const id = sortedCombo.id;
              return (
                <Combo
                  id={id}
                  key={id}
                  combo={comboModelMap[id]}
                  sortedCombo={sortedCombo}
                  item={item}
                  nodes={nodes.filter((node) => {
                    return sortedCombo.children?.some(({ id }) => id === node.id);
                  })}
                  combos={combos.filter((node) => {
                    return sortedCombo.children?.some(({ id }) => id === node.id);
                  })}
                  states={comboStatesMap[id]}
                  isAutoSize={isAutoSize}
                ></Combo>
              );
            })}
          </Fragment>
        )}

        {edges?.length > 0 && (
          <Fragment ref={this.edgeRoot}>
            {edges.map((edge, index) => {
              const item = edgeItems[edge.id];
              return (
                <Edge
                  key={edge.id}
                  edge={edge}
                  states={edgeStatesMap[edge.id]}
                  item={item}
                  linkCenter={linkCenter}
                  sourceNode={nodeModelMap[edge.source] || comboModelMap[edge.source]}
                  endNode={nodeModelMap[edge.target] || comboModelMap[edge.target]}
                ></Edge>
              );
            })}
          </Fragment>
        )}

        {hulls?.length > 0 && (
          <Fragment ref={this.hullRoot}>
            {hulls.map((hull) => {
              const item = hullItems[hull.id];
              return (
                <Hull
                  id={hull.id}
                  key={hull.id}
                  item={item}
                  hull={hull}
                  members={nodes.filter((node) => {
                    return hull.members?.includes(node.id);
                  })}
                  nonMembers={nodes.filter((node) => {
                    return hull.nonMembers?.includes(node.id);
                  })}
                ></Hull>
              );
            })}
          </Fragment>
        )}

        <Fragment></Fragment>
      </Fragment>
    );
  }
}
