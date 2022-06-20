import { BaseStyleProps, CustomElement, Path } from '@antv/g';
import { isFunction, isNil } from '@antv/util';
import { path2Absolute } from '@antv/path-util';

const Symbols = {
  // 圆
  circle(x, y, r) {
    return [
      ['M', x - r, y],
      ['A', r, r, 0, 1, 0, x + r, y],
      ['A', r, r, 0, 1, 0, x - r, y],
    ];
  },
  // 正方形
  square(x, y, r) {
    return [
      ['M', x - r, y - r],
      ['L', x + r, y - r],
      ['L', x + r, y + r],
      ['L', x - r, y + r],
      ['Z'],
    ];
  },
  // 菱形
  diamond(x, y, r) {
    return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
  },
  // 三角形
  triangle(x, y, r) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
  },
  // 倒三角形
  'triangle-down'(x, y, r) {
    const diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
  },
};

interface MarkerProps extends BaseStyleProps {
  symbol: string | Function;
  x: number;
  y: number;
  r: number;
}

export class Marker extends CustomElement<MarkerProps> {
  static Symbols = Symbols;

  constructor(cfg) {
    super(cfg);
    const path = this.getPath({ ...this.attributes, x: 0, y: 0 });
    const style = { ...this.attributes, path };

    this.appendChild(
      new Path({
        style,
      })
    );
  }
  private getPath(attrs) {
    const { x, y } = attrs;
    const symbol = attrs.symbol || 'circle';
    const r = this.getR(attrs);
    let method;
    let path;
    if (isFunction(symbol)) {
      method = symbol;
      path = method(x, y, r);
      // 将 path 转成绝对路径
      path = path2Absolute(path);
    } else {
      // 内置 symbol 的 path 都是绝对路径，直接绘制即可，不需要对 path 进行特殊处理
      method = Marker.Symbols[symbol];

      if (!method) {
        console.warn(`${symbol} marker is not supported.`);
        return null;
      }

      path = method(x, y, r);
    }

    return path;
  }
  getR(attrs) {
    // 兼容 r 和 radius 两种写法，推荐使用 r
    return isNil(attrs.r) ? attrs.radius : attrs.r;
  }
}
