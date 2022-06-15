import { Component, jsx } from '@antv/f-engine';
import { getEdge } from './components/edges';

export class Edge extends Component {
  edgeShapeRef = { current: null };

  willMount(): void {
    const { item } = this.props;
    item.inject('getControlPoints', this.getControlPoints);
  }

  getShapeEdge() {
    return this.edgeShapeRef.current;
  }

  getPoints() {
    const { item, edge, linkCenter } = this.props;
    if (!edge) return;
    let startPoint, endPoint;
    if (linkCenter) {
      startPoint = item.getEndCenter('source', edge.id);
      endPoint = item.getEndCenter('target', edge.id);
    } else {
      const controlPoints = edge.controlPoints || item.getControlPointsByCenter(edge.id);
      startPoint = item.getLinkPoint('source', edge, controlPoints);
      endPoint = item.getLinkPoint('target', edge, controlPoints);
    }
    return {
      startPoint,
      endPoint,
    };
  }

  getControlPoints = (cfg) => {
    return this.getShapeEdge()?.getControlPoints(cfg);
  };

  render() {
    const { edge } = this.props;
    const Shape = getEdge(edge?.type || 'line');

    if (!Shape) {
      console.warn('不存在对应的 Node Shape');
      return null;
    }

    if (!edge) {
      return null;
    }

    const points = this.getPoints();

    if (Number.isNaN(points.startPoint.x) || Number.isNaN(points.endPoint)) {
      return null;
    }

    return <Shape edge={{ ...edge, ...points }} ref={this.edgeShapeRef}></Shape>;
  }
}
