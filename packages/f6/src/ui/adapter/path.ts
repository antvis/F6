import { BaseStyleProps, CustomElement, Line, Path, PathStyleProps, Polyline, Rect } from '@antv/g';
import { Arrow } from './arrow';

function getDefaultArrow(style) {
  const { sin, cos, PI } = Math;
  return new Path({
    style: {
      ...style,
      anchor: [0, 0.5],
      transformOrigin: 'left center',
      path: `M${10 * cos(PI / 6)},${10 * sin(PI / 6)} L0,0 L${10 * cos(PI / 6)},-${
        10 * sin(PI / 6)
      }`,
    },
  });
}

interface ArrowAdpaterProps extends BaseStyleProps {
  startArrow: PathStyleProps;
  endArrow: PathStyleProps;
}
class ArrowAdpater extends CustomElement<ArrowAdpaterProps> {
  arrow = null;
  static tag = 'ArrowAdpater';
  constructor(config) {
    super({
      ...config,
      type: ArrowAdpater.tag,
    });
    const { attrs, style, ...resConfig } = config;
    const { startArrow, endArrow, ...pathStyle } = style || attrs;
    const { fill, stroke, opacity, strokeOpacity, fillOpacity, lineWidth } = pathStyle;
    const pathDisplayStyle = { fill, stroke, opacity, strokeOpacity, fillOpacity, lineWidth };

    let startHead: boolean | Path = false;

    if (startArrow === true) {
      startHead = getDefaultArrow(pathDisplayStyle);
    }

    if (typeof startArrow === 'object') {
      startHead = new Path({
        style: {
          ...pathDisplayStyle,
          ...startArrow,
          anchor: [0, 0.5],
          transformOrigin: 'left center',
        },
      });
    }

    let endHead: boolean | Path = false;

    if (endArrow === true) {
      endHead = getDefaultArrow(pathDisplayStyle);
    }

    if (typeof endArrow === 'object') {
      endHead = new Path({
        style: {
          ...pathDisplayStyle,
          ...endArrow,
          anchor: [0, 0.5],
          transformOrigin: 'left center',
        },
      });
    }
    const BodyClass = this.getBodyClass();

    this.arrow = new Arrow({
      style: {
        startHead,
        endHead, // @ts-ignore
        body: new BodyClass({ style: pathStyle }),
      },
      ...resConfig,
    });

    this.appendChild(this.arrow);
  }

  // @ts-ignore
  getBodyClass() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'path') {
      this.arrow.getBody().style.path = newValue;
      this.arrow.refreshHead();
    }
    if (name === 'x1') {
      this.arrow.getBody().style.x1 = newValue;
    }
    if (name === 'x2') {
      this.arrow.getBody().style.x2 = newValue;
    }
    if (name === 'y1') {
      this.arrow.getBody().style.y1 = newValue;
    }
    if (name === 'y2') {
      this.arrow.getBody().style.y2 = newValue;
    }
    if (name === 'x1' || name === 'x2' || name === 'y1' || name === 'y2') {
      this.arrow.refreshHead();
    }
    if (name === 'points') {
      this.arrow.getBody().style.points = newValue;
      this.arrow.refreshHead();
    }
  }

  getPoint(ratio) {
    return this.arrow.getBody().getPoint(ratio);
  }
  getTotalLength(ratio) {
    return this.arrow.getBody().getTotalLength(ratio);
  }
  getStartTangent() {
    return this.arrow.getBody().getStartTangent();
  }
  getEndTangent() {
    return this.arrow.getBody().getEndTangent();
  }
}

export class ArrowPath extends ArrowAdpater {
  getBodyClass() {
    return Path;
  }
}

export class ArrowLine extends ArrowAdpater {
  getBodyClass() {
    return Line;
  }
}

export class ArrowPolyline extends ArrowAdpater {
  getBodyClass() {
    return Polyline;
  }
}
