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
    nodeIds: graph.nodeManager.ids,
    edgeIds: graph.edgeManager.ids,
    comboIds: graph.comboManager.ids,
    hullIds: graph.hullManager.ids,
    enabeAnimate: graph.enabeAnimate,
    isLayoutFinished: graph.isLayoutFinished,
    fitCenterTag: graph.fitCenterTag,
    fitViewTag: graph.fitViewTag,
    // animations: graph.nodeManager.animations,
  };
})
export class GraphRoot extends Component {
  nodeRoot = { current: null };
  edgeRoot = { current: null };
  comboRoot = { current: null };
  hullRoot = { current: null };
  animate = false;
  prevProps = null;
  prevRootProps = null;

  willMount(): void {
    this.context.f6Context.graph.setGraphRoot(this);
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
      fitView = true,
      fitCenter = true,
    } = this.props;
    const { width, height, pixelRatio = 1 } = this.context;
    this.context.f6Context.graph.init({
      width,
      height,
      pixelRatio,
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
      fitView,
      fitCenter,
    });
    onGraphReady?.(this.context.f6Context.graph);
    this.prevRootProps = {
      width,
      height,
    };
    this.prevProps = this.props;
  }

  didUpdate(): void {
    const graph = this.context.f6Context.graph;
    const {
      enabeAnimate,
      fitView,
      fitCenter,
      fitViewPadding = 0,
      layout,
      modes,
      fitViewTag,
      fitCenterTag,
      data,
    } = this.props;
    const rootProps = this.context.root.props;

    // 更新context中的width/height
    if (!isNil(rootProps.height) && rootProps.height !== this.prevRootProps.height) {
      this.context.height = rootProps.height;
    }
    if (!isNil(rootProps.width) && rootProps.width !== this.prevRootProps.width) {
      this.context.width = rootProps.width;
    }

    const { width, height } = this.context;

    // width height
    if (this.prevRootProps?.width !== width || this.prevRootProps?.height !== height) {
      graph.changeSize(width, height);
    }

    if (this.prevProps.fitView !== fitView) {
      graph.setFitView(fitView);
    }

    if (this.prevProps.fitCenter !== fitCenter) {
      graph.setFitCenter(fitCenter);
    }

    // fitView / fitCenter 标识翻转后
    if (this.prevProps?.fitViewTag !== fitViewTag) {
      setTimeout(() => {
        // f-engine 内部异步删除节点
        graph.viewService.fitView(fitViewPadding);
      });
    }

    if (this.prevProps?.fitCenterTag !== fitCenterTag) {
      setTimeout(() => {
        // f-engine 内部异步删除节点
        graph.viewService.fitCenter(fitViewPadding);
      });
    }

    if (this.prevProps.fitViewPadding !== this.props.fitViewPadding) {
      graph.viewService.setFitViewPadding(fitViewPadding);
    }

    if (this.prevProps?.modes !== modes) {
      graph.modeService.setModes(modes);
    }

    if (this.prevProps?.layout !== layout) {
      graph.updateLayout(layout);
    }

    if (this.prevProps?.data !== data) {
      graph.changeData(data);
    }

    // 控制关闭全局动画
    this.setAnimate(enabeAnimate);

    // 更新zIndex, 边后绘制，但需要在combo下面
    this.nodeRoot.current && (this.nodeRoot.current.container.style.zIndex = NODE_Z_INDEX);
    this.edgeRoot.current && (this.edgeRoot.current.container.style.zIndex = EDGE_Z_INDEX);
    this.comboRoot.current && (this.comboRoot.current.container.style.zIndex = COMBO_Z_INDEX);
    this.hullRoot.current && (this.hullRoot.current.container.style.zIndex = HULL_Z_INDEX);

    this.prevRootProps = {
      width,
      height,
    };
    this.prevProps = this.props;
  }

  getCanvasBBox = () => {
    return calcCanvasBBox(this.container);
  };

  getMatrix = () => {
    return getMatrix(this.container);
  };

  setMatrix(matrix) {
    setMatrix(this.container, matrix);
  }

  render() {
    const { nodeIds, edgeIds, comboIds, hullIds, linkCenter, children, animations } = this.props;
    return (
      <Fragment>
        {nodeIds?.length > 0 && (
          <Fragment ref={this.nodeRoot}>
            {nodeIds.map((id, index) => {
              return <Node key={id} id={id} animation={{}}></Node>;
            })}
          </Fragment>
        )}

        {comboIds?.length > 0 && (
          <Fragment ref={this.comboRoot}>
            {comboIds.map((id) => {
              return <Combo id={id} key={id}></Combo>;
            })}
          </Fragment>
        )}

        {edgeIds?.length > 0 && (
          <Fragment ref={this.edgeRoot}>
            {edgeIds.map((id, index) => {
              return <Edge key={id} id={id}></Edge>;
            })}
          </Fragment>
        )}

        {hullIds?.length > 0 && (
          <Fragment ref={this.hullRoot}>
            {hullIds.map((id) => {
              return <Hull id={id} key={id}></Hull>;
            })}
          </Fragment>
        )}

        {children}

        <Fragment></Fragment>
      </Fragment>
    );
  }
}
