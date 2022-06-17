import { Component, jsx } from '@antv/f-engine';
import { TreeGraph as RootStore } from '../../graph/treeGraph';
import { GraphRoot } from './graphRoot';
export class TreeGraph extends Component {
  willMount(): void {
    const graph = new RootStore();
    graph.eventService.initEvents(this.context.root, this.context.canvas);
    this.context.graph = graph;
  }

  render() {
    return <GraphRoot {...this.props}></GraphRoot>;
  }

  didUnmount(): void {
    this.context.graph.destroy();
  }
}
