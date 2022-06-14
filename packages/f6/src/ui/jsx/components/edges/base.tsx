// @ts-nocheck
import { jsx, Component } from '@antv/f-engine';
import { deepMix, mix, each, isNil, isNumber, isArray } from '@antv/util';
import { ILabelConfig, ShapeOptions } from '../interface/shape';
import {
  EdgeConfig,
  EdgeData,
  IPoint,
  LabelStyle,
  ShapeStyle,
  Item,
  ModelConfig,
  Point,
} from '../types';
import { getLabelPosition, getLoopCfgs } from '../../../../utils/graphic';
import { distance, getCircleCenterByPoints } from '../../../../utils/math';
import { getControlPoint, getSpline } from '../../../../utils/path';
import Global from '../../../../global';
import { BaseShape, CLS_LABEL_BG_SUFFIX } from '../base';
// import Shape from './shape';
// import { shapeBase, CLS_LABEL_BG_SUFFIX } from './shapeBase';

// start,end 倒置，center 不变
function revertAlign(labelPosition: string): string {
  let textAlign = labelPosition;
  if (labelPosition === 'start') {
    textAlign = 'end';
  } else if (labelPosition === 'end') {
    textAlign = 'start';
  }
  return textAlign;
}
const CLS_SHAPE = 'edge-shape';

export class BaseEdge extends BaseShape {
  keyShapeRef = { current: null };
  labelRef = { current: null };
  renderLabelStyle = null;

  getKeyShape() {
    return this.keyShapeRef.current || this.getRootShape();
  }

  getLabelShape() {
    return this.labelRef.current;
  }

  getRootShape(): any {
    return this.container.children[0];
  }

  /**
   * 文本的位置
   * @type {String}
   */
  labelPosition = 'center'; // start, end, center
  /**
   * 文本的 x 偏移
   * @type {Number}
   */
  refX = 0;
  /**
   * 文本的 y 偏移
   * @type {Number}
   */
  refY = 0;
  /**
   * 文本是否跟着线自动旋转，默认 false
   * @type {Boolean}
   */
  labelAutoRotate: false;

  // 自定义边时的配置
  options = {
    size: Global.defaultEdge.size,
    style: {
      x: 0,
      y: 0,
      stroke: Global.defaultEdge.style.stroke,
      lineAppendWidth: Global.defaultEdge.style.lineAppendWidth,
    },
    labelCfg: {
      style: {
        fill: Global.edgeLabel.style.fill,
        fontSize: Global.edgeLabel.style.fontSize,
      },
    },
    stateStyles: {
      ...Global.edgeStateStyles,
    },
  };
  /**
   * 获取边的 path
   * @internal 供扩展的边覆盖
   * @param  {Array} points 构成边的点的集合
   * @return {Array} 构成 path 的数组
   */
  getPath(points: Point[]): Array<Array<string | number>> {
    const path: Array<Array<string | number>> = [];
    each(points, (point: Point, index: number) => {
      if (index === 0) {
        path.push(['M', point.x, point.y]);
      } else {
        path.push(['L', point.x, point.y]);
      }
    });
    return path;
  }

  getShapeStyle(cfg): ShapeStyle {
    const { style: defaultStyle } = this.options as ModelConfig;
    const strokeStyle: ShapeStyle = {
      stroke: cfg.color,
    };
    // 如果设置了color，则覆盖默认的stroke属性
    const style: ShapeStyle = mix({}, defaultStyle, strokeStyle, cfg.style);

    const size = cfg.size || Global.defaultEdge.size;
    cfg = this.getPathPoints!(cfg);
    const { startPoint, endPoint } = cfg;

    const controlPoints = this.getControlPoints!(cfg);
    let points = [startPoint]; // 添加起始点
    // 添加控制点
    if (controlPoints) {
      points = points.concat(controlPoints);
    }
    // 添加结束点
    points.push(endPoint);
    const path = (this as any).getPath(points);
    const styles = mix(
      {},
      Global.defaultEdge.style as ShapeStyle,
      {
        stroke: Global.defaultEdge.color,
        lineWidth: size,
        path,
      } as ShapeStyle,
      style,
    );
    return styles;
  }

  getLabelStyleByPosition(cfg, labelCfg: ILabelConfig): LabelStyle {
    const labelPosition = labelCfg.position || this.labelPosition; // 文本的位置用户可以传入
    const style: LabelStyle = {};

    const pathShape = this.getKeyShape();

    if (!pathShape) {
      return {};
    }

    // 不对 pathShape 进行判空，如果线不存在，说明有问题了
    let pointPercent;
    if (labelPosition === 'start') {
      pointPercent = 0;
    } else if (labelPosition === 'end') {
      pointPercent = 1;
    } else {
      pointPercent = 0.5;
    }
    // 偏移量
    const offsetX = labelCfg.refX || (this.refX as number);
    const offsetY = labelCfg.refY || (this.refY as number);
    // 如果两个节点重叠，线就变成了一个点，这时候label的位置，就是这个点 + 绝对偏移
    if (cfg.startPoint!.x === cfg.endPoint!.x && cfg.startPoint!.y === cfg.endPoint!.y) {
      style.x = cfg.startPoint!.x + offsetX;
      style.y = cfg.startPoint!.y + offsetY;
      style.text = cfg.label as string;
      return style;
    }

    let autoRotate;
    if (isNil(labelCfg.autoRotate)) autoRotate = this.labelAutoRotate;
    else autoRotate = labelCfg.autoRotate;
    const offsetStyle = getLabelPosition(
      pathShape,
      pointPercent,
      offsetX,
      offsetY,
      autoRotate as boolean,
    );
    style.x = offsetStyle.x;
    style.y = offsetStyle.y;
    style.rotate = offsetStyle.rotate;
    style.textAlign = this._getTextAlign!(labelPosition as string, offsetStyle.angle as number);
    style.text = cfg.label as string;
    return style;
  }
  getLabelBgStyleByPosition(label, cfg, labelCfg?: ILabelConfig, group?) {
    if (!label) {
      return {};
    }
    const bbox = label.getBBox();
    const backgroundStyle = labelCfg.style && labelCfg.style.background;
    if (!backgroundStyle) {
      return {};
    }
    const { padding } = backgroundStyle;
    const backgroundWidth = bbox.width + padding[1] + padding[3];
    const backgroundHeight = bbox.height + padding[0] + padding[2];
    const labelPosition = labelCfg.position || this.labelPosition;
    const style = {
      ...backgroundStyle,
      width: backgroundWidth,
      height: backgroundHeight,
      x: bbox.minX - padding[2],
      y: bbox.minY - padding[0],
      rotate: 0,
    };
    let autoRotate;
    if (isNil(labelCfg.autoRotate)) autoRotate = this.labelAutoRotate;
    else autoRotate = labelCfg.autoRotate;

    const pathShape = group && group.find((element) => element.get('className') === CLS_SHAPE);

    // 不对 pathShape 进行判空，如果线不存在，说明有问题了
    let pointPercent;
    if (labelPosition === 'start') {
      pointPercent = 0;
    } else if (labelPosition === 'end') {
      pointPercent = 1;
    } else {
      pointPercent = 0.5;
    }
    // 偏移量
    const offsetX = labelCfg.refX || (this.refX as number);
    const offsetY = labelCfg.refY || (this.refY as number);
    // // 如果两个节点重叠，线就变成了一个点，这时候label的位置，就是这个点 + 绝对偏移
    if (cfg.startPoint!.x === cfg.endPoint!.x && cfg.startPoint!.y === cfg.endPoint!.y) {
      style.x = cfg.startPoint!.x + offsetX - backgroundWidth / 2;
      style.y = cfg.startPoint!.y + offsetY - backgroundHeight / 2;
      return style;
    }

    let offsetStyle = getLabelPosition(
      pathShape,
      pointPercent,
      offsetX - backgroundWidth / 2,
      offsetY + backgroundHeight / 2,
      autoRotate,
    );

    const rad = offsetStyle.angle;

    if (rad > (1 / 2) * Math.PI && rad < ((3 * 1) / 2) * Math.PI) {
      offsetStyle = getLabelPosition(
        pathShape,
        pointPercent,
        offsetX + backgroundWidth / 2,
        offsetY + backgroundHeight / 2,
        autoRotate,
      );
    }

    if (autoRotate) {
      style.x = offsetStyle.x;
      style.y = offsetStyle.y;
    }
    style.rotate = offsetStyle.rotate;
    return style;
  }
  // 获取文本对齐方式
  _getTextAlign(labelPosition: string, angle: number): string {
    let textAlign = 'center';
    if (!angle) {
      return labelPosition;
    }
    angle = angle % (Math.PI * 2); // 取模
    if (labelPosition !== 'center') {
      if (
        (angle >= 0 && angle <= Math.PI / 2) ||
        (angle >= (3 / 2) * Math.PI && angle < 2 * Math.PI)
      ) {
        textAlign = labelPosition;
      } else {
        textAlign = revertAlign(labelPosition);
      }
    }
    return textAlign;
  }
  /**
   * @internal 获取边的控制点
   * @param  {Object} cfg 边的配置项
   * @return {Array} 控制点的数组
   */
  getControlPoints(cfg): IPoint[] | undefined {
    return cfg.controlPoints;
  }
  /**
   * @internal 处理需要重计算点和边的情况
   * @param {Object} cfg 边的配置项
   * @return {Object} 边的配置项
   */
  getPathPoints(cfg) {
    return cfg;
  }
  /**
   * 绘制边
   * @override
   * @param  {Object} cfg   边的配置项
   * @param  {G.Group} group 边的容器
   * @return {IShape} 图形
   */

  renderLabel(cfg) {
    const { labelCfg: defaultLabelCfg } = this.options as ModelConfig;
    let defaultFontFamily;
    if (typeof window !== 'undefined' && typeof window.getComputedStyle !== 'undefined')
      defaultFontFamily =
        window.getComputedStyle(document.body, null).getPropertyValue('font-family') ||
        'Arial, sans-serif';
    else defaultFontFamily = 'Arial, sans-serif';

    const labelCfg = deepMix(
      {
        fontFamily: defaultFontFamily,
      },
      defaultLabelCfg,
      cfg.labelCfg,
    );
    const labelStyle = this.getLabelStyle!(cfg, labelCfg, this.getRootShape());
    const rotate = labelStyle.rotate;
    delete labelStyle.rotate;

    return <text style={this.renderLabelStyle} ref={this.labelRef}></text>;
    // const label = group.addShape('text', {
    //   attrs: labelStyle,
    //   name: 'text-shape',
    // });
    // if (rotate) {
    //   label.rotateAtStart(rotate);
    // }

    // if (labelStyle.background) {
    //   const rect = this.drawLabelBg(cfg, group, label);
    //   const labelBgClassname = this.itemType + CLS_LABEL_BG_SUFFIX;
    //   rect.set('classname', labelBgClassname);
    //   label.toFront();
    // }
  }

  renderShape(cfg, states) {
    const style = this.getMixedStyle(cfg, states);

    delete style.x;
    delete style.y;
    return (
      <path
        // animation={{
        //   update: {
        //     easing: 'linear',
        //     duration: 450,
        //     property: ['points'],
        //   },
        // }}
        style={style}
        ref={this.keyShapeRef}
      ></path>
    );
  }

  renderLabelBg(cfg) {
    const { labelCfg: defaultLabelCfg } = this.options as ModelConfig;
    const labelCfg = deepMix({}, defaultLabelCfg, cfg.labelCfg);
    const labelStyle = this.getLabelStyle!(cfg, labelCfg, this.getRootShape());
    const rotate = labelStyle.rotate;

    const style = this.getLabelBgStyleByPosition(
      this.getLabelShape(),
      cfg,
      labelCfg,
      this.getRootShape(),
    );
    // delete style.rotate;

    return <rect style={style}></rect>;

    // const rect = group.addShape('rect', { name: 'text-bg-shape', attrs: style });
    // if (rotate) rect.rotateAtStart(rotate);
  }

  render() {
    const { edge, states } = this.props;

    return (
      <group>
        {this.renderShape(edge, states)}

        {this.renderLabel(edge)}

        {this.renderLabelBg(edge)}
      </group>
    );
  }
}
