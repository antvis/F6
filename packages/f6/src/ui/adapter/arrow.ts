import {
  BaseStyleProps,
  CustomElement,
  DisplayObject,
  DisplayObjectConfig,
  Line,
  Path,
  Polyline,
  Shape,
} from '@antv/g';
import { vec3 } from 'gl-matrix';

type ArrowHead = boolean | DisplayObject;
type ArrowBody = Line | Path | Polyline;
type ArrowHeadType = 'default' | 'custom';

export interface ArrowStyleProps extends BaseStyleProps {
  body?: ArrowBody;
  startHead?: ArrowHead;
  endHead?: ArrowHead;
  stroke?: string;
  lineWidth?: number;
  opacity?: number;
  strokeOpacity?: number;
}

/**
 * support 3 types of arrow line:
 * 1. Line
 * 2. Polyline
 * 3. Path
 *
 * support 2 types of arrow head:
 * 1. default(Path)
 * 2. custom
 */
export class Arrow extends CustomElement<ArrowStyleProps> {
  static tag = 'arrow';

  private body: Line | Path | Polyline;
  private startHead?: DisplayObject;
  private endHead?: DisplayObject;

  constructor(config: DisplayObjectConfig<ArrowStyleProps>) {
    super({
      ...config,
      type: Arrow.tag,
    });

    const { body, startHead, endHead } = this.attributes;

    if (!body) {
      throw new Error("Arrow's body is required");
    }

    // append arrow body
    this.body = body;
    // @ts-ignore
    this.appendChild(this.body);

    if (startHead) {
      this.appendArrowHead(this.getArrowHeadType(startHead), true);
    }
    if (endHead) {
      this.appendArrowHead(this.getArrowHeadType(endHead), false);
    }
  }

  getBody() {
    return this.body;
  }

  getStartHead() {
    return this.startHead;
  }

  getEndHead() {
    return this.endHead;
  }

  attributeChangedCallback<Key extends keyof ArrowStyleProps>(
    name: Key,
    oldValue: ArrowStyleProps[Key],
    newValue: ArrowStyleProps[Key],
  ) {
    if (name === 'startHead' || name === 'endHead') {
      const isStart = name === 'startHead';
      // delete existed arrow head first
      this.destroyArrowHead(isStart);

      if (newValue) {
        // append new arrow head
        // @ts-ignore
        this.appendArrowHead(this.getArrowHeadType(newValue), isStart);
      }
    } else if (name === 'body') {
      // @ts-ignore
      this.removeChild(this.body, true);
      // @ts-ignore
      this.body = newValue;
      // @ts-ignore
      this.appendChild(this.body);
    }
  }

  private getArrowHeadType(head: ArrowHead): ArrowHeadType {
    if (typeof head === 'boolean') {
      return 'default';
    }
    return 'custom';
  }

  private appendArrowHead(type: ArrowHeadType, isStart: boolean) {
    let head: DisplayObject;
    if (type === 'default') {
      head = this.createDefaultArrowHead();
    } else {
      // @ts-ignore
      head = isStart ? this.attributes.startHead : this.attributes.endHead;
    }

    // set position & rotation
    this.transformArrowHead(head, isStart);

    // heads should display on top of body
    head.setAttribute('zIndex', 1);

    if (isStart) {
      this.startHead = head;
    } else {
      this.endHead = head;
    }

    // @ts-ignore
    this.appendChild(head);
  }

  /**
   * transform arrow head according to arrow line
   */
  private transformArrowHead(head: DisplayObject, isStart: boolean) {
    let position = vec3.create();
    let rad = 0;
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    const bodyType = this.body && this.body.nodeName;
    if (bodyType === Shape.LINE) {
      const { x1: _x1, x2: _x2, y1: _y1, y2: _y2 } = (this.body as Line).attributes;
      x1 = isStart ? _x2 : _x1;
      x2 = isStart ? _x1 : _x2;
      y1 = isStart ? _y2 : _y1;
      y2 = isStart ? _y1 : _y2;
    } else if (bodyType === Shape.POLYLINE) {
      const points = (this.body as Polyline).attributes.points;
      const { length } = points;
      x1 = isStart ? points[1][0] : points[length - 2][0];
      y1 = isStart ? points[1][1] : points[length - 2][1];
      x2 = isStart ? points[0][0] : points[length - 1][0];
      y2 = isStart ? points[0][1] : points[length - 1][1];
    } else if (bodyType === Shape.PATH) {
      const [p1, p2] = this.getTangent(this.body as Path, isStart);
      x1 = p1[0];
      y1 = p1[1];
      x2 = p2[0];
      y2 = p2[1];
    }

    const x = x1 - x2;
    const y = y1 - y2;
    rad = Math.atan2(y, x);

    const offset = head.style.offset;
    if (typeof offset === 'number') {
      x2 = x2 - Math.cos(rad) * offset;
      y2 = y2 - Math.sin(rad) * offset;
    }

    position = vec3.fromValues(x2, y2, 0);

    head.setLocalPosition(position);
    head.setLocalEulerAngles((rad * 180) / Math.PI);
  }

  public refreshHead() {
    if (this.getStartHead()) {
      this.transformArrowHead(this.getStartHead(), true);
    }
    if (this.getEndHead()) {
      this.transformArrowHead(this.getEndHead(), false);
    }
  }

  private destroyArrowHead(isStart: boolean) {
    if (isStart && this.startHead) {
      // @ts-ignore
      this.removeChild(this.startHead, true);
      this.startHead = undefined;
    }
    if (!isStart && this.endHead) {
      // @ts-ignore
      this.removeChild(this.endHead, true);
      this.endHead = undefined;
    }
  }

  private getTangent(path: Path, isStart: boolean): number[][] {
    return isStart ? path.getStartTangent() : path.getEndTangent();
  }

  private createDefaultArrowHead() {
    const { stroke, lineWidth } = this.attributes;
    const { sin, cos, PI } = Math;
    return new Path({
      style: {
        // draw an angle '<'
        path: `M${10 * cos(PI / 6)},${10 * sin(PI / 6)} L0,0 L${10 * cos(PI / 6)},-${
          10 * sin(PI / 6)
        }`,
        stroke,
        lineWidth,
        anchor: [0, 0.5], // set anchor to center
        transformOrigin: 'left center',
      },
    });
  }
}
