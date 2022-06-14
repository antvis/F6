import { jsx, Component } from '@antv/f-engine';
import { GraphRoot } from './graphRoot';
import { Graph as RootStore } from '../../graph/graph';

export class Graph extends Component {
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
