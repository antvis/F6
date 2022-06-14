import { jsx, Component } from '@antv/f-engine';
import { GraphRoot } from './graphRoot';
import { TreeGraph as RootStore } from '../../graph/treeGraph';
export class TreeGraph extends Component {
  hammer = null;

  willMount(): void {
    const graph = new RootStore();
    graph.eventService.initEvents(this.context.root, this.context.canvas);
    this.context.graph = graph;
  }

  render() {
    return <GraphRoot {...this.props}></GraphRoot>;
  }
}
