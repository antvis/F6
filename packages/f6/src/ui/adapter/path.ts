import { BaseStyleProps, CustomElement, Line, Path, PathStyleProps, Polyline } from '@antv/g';
import { Arrow } from './arrow';

function getDefaultArrow(pathStyle) {
  const { sin, cos, PI } = Math;
  return new Path({
    style: {
      ...pathStyle,
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

    let startHead: boolean | Path = false;

    if (startArrow === true) {
      startHead = getDefaultArrow(pathStyle);
    }

    if (typeof startArrow === 'object') {
      startHead = new Path({
        style: { ...pathStyle, ...startArrow, anchor: [0, 0.5], transformOrigin: 'left center' },
      });
    }

    let endHead: boolean | Path = false;

    if (endArrow === true) {
      endHead = getDefaultArrow(pathStyle);
    }

    if (typeof endArrow === 'object') {
      endHead = new Path({
        style: { ...pathStyle, ...endArrow, anchor: [0, 0.5], transformOrigin: 'left center' },
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
