import { Component, jsx } from '@antv/f-engine';
import { vec3 } from '@antv/matrix-util';

export class Path extends Component {
  startArrowRef = { current: null };
  endArrowRef = { current: null };
  pathRef = { current: null };

  getPathShape() {
    return this.pathRef.current;
  }

  didMount() {
    this.rotateArrow(this.startArrowRef.current, true);
    this.rotateArrow(this.endArrowRef.current, false);
  }

  didUpdate() {
    // 旋转
    this.rotateArrow(this.startArrowRef.current, true);
    this.rotateArrow(this.endArrowRef.current, false);
  }

  rotateArrow(head, isStart) {
    const path = this.pathRef.current;
    if (!path || !head) return;

    let position = vec3.create();
    let rad = 0;
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    const [p1, p2] = this.getTangent(path, isStart);
    x1 = p1[0];
    y1 = p1[1];
    x2 = p2[0];
    y2 = p2[1];

    const x = x1 - x2;
    const y = y1 - y2;
    rad = Math.atan2(y, x);
    position = vec3.fromValues(x2, y2, 0);
    head.setLocalPosition(position);
    head.setLocalEulerAngles((rad * 180) / Math.PI);
  }

  getTangent(path, isStart: boolean): number[][] {
    return isStart ? path.getStartTangent() : path.getEndTangent();
  }

  render() {
    const { attrs, style } = this.props;
    const { startArrow = true, endArrow = false, ...pathStyle } = style || attrs;
    const { sin, cos, PI } = Math;

    const defaultArrowPath = `M${10 * cos(PI / 6)},${10 * sin(PI / 6)} L0,0 L${10 * cos(PI / 6)},-${
      10 * sin(PI / 6)
    }`;

    let startHead: object = null;

    if (startArrow === true) {
      startHead = {
        ...pathStyle,
        path: defaultArrowPath,
        anchor: [0, 0.5],
        transformOrigin: 'left center',
      };
    }

    if (typeof startArrow === 'object') {
      startHead = { style: { ...startArrow, anchor: [0, 0.5], transformOrigin: 'left center' } };
    }

    let endHead: object = null;

    if (endArrow === true) {
      endHead = {
        ...pathStyle,
        path: defaultArrowPath,
        anchor: [0, 0.5],
        transformOrigin: 'left center',
      };
    }

    if (typeof endArrow === 'object') {
      endHead = { style: { ...endArrow, anchor: [0, 0.5], transformOrigin: 'left center' } };
    }

    return (
      <group>
        <path style={pathStyle} ref={this.pathRef}></path>
        {startHead && <path style={startHead} ref={this.startArrowRef}></path>}
        {endHead && <path style={endHead} ref={this.endArrowRef}></path>}
      </group>
    );
  }
}
