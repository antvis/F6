import { createSegmentNode } from '@antv/f6-ui';

export function createItem(data, style, itemConfig) {
  let attrs;
  let shapeType = data.type;
  const { width, height, r } = getShapeSize(data);
  switch (data.type) {
    case 'circle':
      attrs = { r, x: 0, y: 0 };
      break;
    case 'rect':
      attrs = { width, height, x: -width / 2, y: -height / 2 };
      break;
    case 'ellipse':
      attrs = { r1: width, r2: height, x: 0, y: 0 };
      break;
    case 'line':
      attrs = { x1: -width / 2, y1: 0, x2: width / 2, y2: 0 };
      shapeType = 'line';
      break;
    case 'quadratic':
      attrs = {
        path: [
          ['M', -width / 2, 0],
          ['Q', 0, width / 2, width / 2, 0],
        ],
      };
      shapeType = 'path';
      break;
    case 'cubic':
      attrs = {
        path: [
          ['M', -width / 2, 0],
          ['C', -width / 6, width / 2, width / 6, -width / 2, width / 2, 0],
        ],
      };
      shapeType = 'path';
      break;
    default:
      attrs = { r, x: 0, y: 0 };
      break;
  }
  const html = `
  <div class='node-container' orignStyle=${JSON.stringify(style)} legendId=${data.id}>
    <shape type='${shapeType}' class='${data.type}-node-keyShape' 
      ${Object.entries(attrs).reduce((prev, cur) => (prev += ` ${cur[0]}=${cur[1]} `), '')}
    />
    ${data.label && ` <div class='text'>${data.label}</div>`}
  </div>
`;
  const labelStyle = {
    textAlign: 'begin',
    fontSize: 12,
    fill: '#000',
    opacity: 1,
    fontWeight: 'normal',
    ...data.labelStyle,
  };
  const css = `
    .node-container {
      width: ${itemConfig.width};
      height: ${itemConfig.height || Math.max(height, itemConfig.fontSize)};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-opacity: 0;
      font-size: ${labelStyle.fontSize};
      margin: ${itemConfig.margin}
    }
    shape {
      top: ${height / 2};
      left: ${width / 2};
      width: ${width};
      height: ${height};
      background: ${style.fill};
      border: ${style.lineWidth || '1'} solid ${style.stroke};
      margin-right: 3;
    }
    .text {
      flex: 1;
      height: ${labelStyle.fontSize + 2};
      color: ${labelStyle.fill};
      background-opacity: 0;
      pointer-events: none;
      text-align: ${labelStyle.textAlign};
      font-weight: ${labelStyle.fontWeight}
    }
    text {
      opacity: ${labelStyle.opacity};
      white-space: nowrap;
    }
`;

  const node = createSegmentNode(html, css);
  return node;
}

function getShapeSize(data) {
  let width, height, r;
  if (data.size) {
    if (Array.isArray(data.size)) {
      width = data.size[0];
      height = data.size[1] || data.size[0];
      r = data.size[0] / 2;
    } else if (typeof data.size === 'number') {
      width = data.size;
      height = data.size;
      r = data.size / 2;
    }
  }
  if (data.style) {
    if (data.style.width) width = data.style.width;
    if (data.style.height) height = data.style.height;
    if (data.style.r) r = data.style.r;
  }

  if (!r) r = 5;
  if (!width) width = r;
  if (!height) height = r;

  return { width, height, r };
}
