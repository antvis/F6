import { Component, jsx } from '@antv/f-engine';
import { TreeGraph as RootStore } from '../../graph/treeGraph';
import { F6Context } from './f6Context';
import { GraphRoot } from './graphRoot';
export class TreeGraph extends Component {
  willMount(): void {
    const graph = new RootStore(this.context.root, this.context.canvas);
    this.context.f6Context = new F6Context(graph);
    this.setAnimate(false);
  }

  render() {
    return <GraphRoot {...this.props}></GraphRoot>;
  }

  didUnmount(): void {
    this.context.f6Context.graph.destroy();
  }
}
