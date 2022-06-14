import { jsx, Component, renderShape } from '@antv/f-engine';
import { isArray, isNil, mix } from '@antv/util';
import { ILabelConfig, ShapeOptions } from '../../../../interface/shape';
import { Item, LabelStyle, NodeConfig, ModelConfig } from '../../../../types';
import { formatPadding } from '../../../../utils/base';
import Global from '../../../../global';
import { BaseShape } from '../base';
import { ext } from '@antv/matrix-util';

const transform = ext.transform;

export class BaseNode extends BaseShape {
  keyShapeRef = { current: null };
  labelRef = { current: null };
  renderLabelStyle = null;

  getLabelShape() {
    return this.labelRef.current;
  }

  getKeyShape() {
    return this.keyShapeRef.current || this.getRootShape();
  }

  getRootShape(): any {
    return this.container.children[0];
  }

  /**
   * 文本相对图形的位置，默认以中心点
   * 位置包括： top, bottom, left, right, center
   * @type {String}
   */
  labelPosition = 'center';
  /**
   * 文本相对偏移，当 labelPosition 不为 center 时有效
   * @type {Number}
   */
  offset = Global.nodeLabel.offset;
  /**
   * 获取节点宽高
   * @internal 返回节点的大小，以 [width, height] 的方式维护
   * @param  {Object} cfg 节点的配置项
   * @return {Array} 宽高
   */
  getSize(cfg: ModelConfig): number[] {
    let size: number | number[] = cfg.size || this.getOptions({})!.size || Global.defaultNode.size;

    // size 是数组，但长度为1，则补长度为2
    if (isArray(size) && size.length === 1) {
      size = [size[0], size[0]];
    }

    // size 为数字，则转换为数组
    if (!isArray(size)) {
      size = [size, size];
    }
    return size;
  }
  // 私有方法，不希望扩展的节点复写这个方法
  getLabelStyleByPosition(cfg: NodeConfig, labelCfg: ILabelConfig): LabelStyle {
    const labelPosition = labelCfg.position || this.labelPosition;

    // 默认的位置（最可能的情形），所以放在最上面
    if (labelPosition === 'center') {
      return { x: 0, y: 0, text: cfg!.label as string };
    }

    let { offset } = labelCfg;
    if (isNil(offset)) {
      // 考虑 offset = 0 的场景，不用用 labelCfg.offset || Global.nodeLabel.offset
      offset = this.offset as number; // 不居中时的偏移量
    }

    const size = this.getSize!(cfg as ModelConfig);

    const width = size[0];
    const height = size[1];

    let style: any;
    switch (labelPosition) {
      case 'top':
        style = {
          x: 0,
          y: 0 - height / 2 - (offset as number),
          textBaseline: 'bottom', // 文本在图形的上面
        };
        break;
      case 'bottom':
        style = {
          x: 0,
          y: height / 2 + (offset as number),
          textBaseline: 'top',
        };
        break;
      case 'left':
        style = {
          x: 0 - width / 2 - (offset as number),
          y: 0,
          textAlign: 'right',
        };
        break;
      default:
        style = {
          x: width / 2 + (offset as number),
          y: 0,
          textAlign: 'left',
        };
        break;
    }
    style.text = cfg.label;
    return style;
  }

  getLabelBgStyleByPosition(label, cfg: ModelConfig, labelCfg?: ILabelConfig, group?) {
    if (!label) {
      return {};
    }
    const bbox = label.getBBox();
    const backgroundStyle = labelCfg.style && labelCfg.style.background;
    if (!backgroundStyle) {
      return {};
    }

    const padding = formatPadding(backgroundStyle.padding);
    const backgroundWidth = bbox.width + padding[1] + padding[3];
    const backgroundHeight = bbox.height + padding[0] + padding[2];

    let { offset } = labelCfg;
    if (isNil(offset)) {
      // 考虑 offset = 0 的场景，不用用 labelCfg.offset || Global.nodeLabel.offset
      offset = this.offset as number; // 不居中时的偏移量
    }

    let style: any;
    style = {
      x: bbox.minX - padding[3],
      y: bbox.minY - padding[0],
    };

    style = {
      ...style,
      ...backgroundStyle,
      width: backgroundWidth,
      height: backgroundHeight,
    };

    return style;
  }

  didUpdate(): void {
    this.rotateLabel(this.renderLabelStyle, this.getLabelShape());
    const { node } = this.props;
    // this.getRootShape()?.setPosition(node.x,node.y);
  }

  rotateLabel(labelStyle, label) {
    const rotate = labelStyle.rotate;
    if (rotate) {
      const labelBBox = label.getBBox();
      let labelMatrix = label.getMatrix();
      if (!labelMatrix) {
        labelMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      }
      if (labelStyle.rotateCenter) {
        switch (labelStyle.rotateCenter) {
          case 'center':
            labelMatrix = transform(labelMatrix, [
              ['t', -labelBBox.width / 2, -labelBBox.height / 2],
              ['r', rotate],
              ['t', labelBBox.width / 2, labelBBox.height / 2],
            ]);
            break;
          case 'lefttop':
            labelMatrix = transform(labelMatrix, [
              ['t', -labelStyle.x!, -labelStyle.y!],
              ['r', rotate],
              ['t', labelStyle.x, labelStyle.y],
            ]);
            break;
          case 'leftcenter':
            labelMatrix = transform(labelMatrix, [
              ['t', -labelStyle.x!, -labelStyle.y! - labelBBox.height / 2],
              ['r', rotate],
              ['t', labelStyle.x, labelStyle.y! + labelBBox.height / 2],
            ]);
            break;
          default:
            labelMatrix = transform(labelMatrix, [
              ['t', -labelBBox.width / 2, -labelBBox.height / 2],
              ['r', rotate],
              ['t', labelBBox.width / 2, labelBBox.height / 2],
            ]);
            break;
        }
      } else {
        labelMatrix = transform(labelMatrix, [
          ['t', -labelStyle.x!, -labelStyle.y! - labelBBox.height / 2],
          ['r', rotate],
          ['t', labelStyle.x, labelStyle.y! + labelBBox.height / 2],
        ]);
      }
      label.setMatrix(labelMatrix);
    }
  }

  renderShape(node, states) {
    return null;
  }

  renderLabel(cfg) {
    const { labelCfg: defaultLabelCfg } = this.getOptions(cfg) as ModelConfig;
    // image的情况下有可能为null
    const labelCfg = (defaultLabelCfg || {}) as ILabelConfig;
    this.renderLabelStyle = this.getLabelStyle!(cfg, labelCfg, this.getRootShape());

    return <text style={this.renderLabelStyle} ref={this.labelRef}></text>;
  }

  renderLabelBg(cfg) {
    const { labelCfg: defaultLabelCfg } = this.options as ModelConfig;
    const labelCfg = mix({}, defaultLabelCfg, cfg.labelCfg) as ILabelConfig;
    const style = this.getLabelBgStyleByPosition(
      this.getLabelShape(),
      cfg,
      labelCfg,
      this.getRootShape(),
    );

    return <rect style={style}></rect>;
  }
  renderIcon(cfg) {
    const { icon } = this.getOptions(cfg) as NodeConfig;
    if (!icon) return null;
    const { width: w, height: h } = icon;
    return (
      <image
        style={{
          ...icon,
          x: -w! / 2,
          y: -h! / 2,
        }}
      ></image>
    );
  }

  renderLinkPoints(cfg) {
    const { linkPoints: defaultLinkPoints } = this.getOptions(cfg) as ModelConfig;

    let currentLinkPoints;

    if (!currentLinkPoints) currentLinkPoints = defaultLinkPoints;

    const linkPoints = mix({}, currentLinkPoints, cfg.linkPoints);

    const { fill: markFill, stroke: markStroke, lineWidth: borderWidth } = linkPoints;
    let markSize = linkPoints.size / 2;
    if (!markSize) markSize = linkPoints.r;
    const { left, right, top, bottom } = cfg.linkPoints
      ? cfg.linkPoints
      : { left: undefined, right: undefined, top: undefined, bottom: undefined };

    const size = this.getSize!(cfg);
    const width = size[0];
    const height = size[1];
    const styles = {
      r: markSize,
      fill: markFill,
      stroke: markStroke,
      lineWidth: borderWidth,
    };

    return (
      <group>
        {left && (
          <circle
            style={{
              ...styles,
              x: -width / 2,
              y: 0,
              capture: false,
            }}
          />
        )}
        {right && (
          <circle
            style={{
              ...styles,
              x: width / 2,
              y: 0,
              capture: false,
            }}
          />
        )}
        {top && (
          <circle
            style={{
              ...styles,
              x: 0,
              y: -height / 2,
              capture: false,
            }}
          />
        )}
        {right && (
          <circle
            style={{
              ...styles,
              x: 0,
              y: height / 2,
              capture: false,
            }}
          />
        )}
      </group>
    );
  }

  render() {
    const { node, animation, onFrame, states, onEnd } = this.props;
    return (
      <group
        style={{ x: node?.x || 0, y: node?.y || 0, draggable: true, droppable: true }}
        animation={{
          // appear: {
          //   easing: 'linear',
          //   duration: 300,
          //   // ...(animation.appear || {}),
          //   onFrame,
          //   property: ['x', 'y'],
          // },
          update: {
            easing: 'linear',
            duration: 150,
            property: ['x', 'y'],
            onFrame,
            onEnd,
          },
          // leave: {
          //   easing: 'linear',
          //   duration: 300,
          //   onFrame,
          //   property: ['x', 'y'],
          // },
        }}
      >
        {this.renderShape(node, states)}
        {/* label */}
        {this.renderLabel(node)}
        {/* label bg */}
        {this.renderLabelBg(node)}
        {/* icon */}
        {this.renderIcon(node)}
        {/* linkpoint */}
        {this.renderLinkPoints(node)}
      </group>
    );
  }
}
