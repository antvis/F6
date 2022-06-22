import { Component, jsx } from '@antv/f-engine';
import { Graph as RootStore } from '../../graph/graph';
import { GraphRoot } from './graphRoot';

export class Graph extends Component {
  willMount(): void {
    const graph = new RootStore(this.context.root, this.context.canvas);
    graph.eventService.initEvents(this.context.root, this.context.canvas);
    this.context.graph = graph;
    this.animate = false;
  }

  render() {
    return <GraphRoot {...this.props}></GraphRoot>;
  }

  didUnmount(): void {
    this.context.graph.destroy();
  }
}
