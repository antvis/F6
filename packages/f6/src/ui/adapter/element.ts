import { getBBox } from '../../utils/graphic';

export const calcBBox = (ele) => {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  const stack = [ele];
  while (stack.length) {
    const ele = stack.pop();
    if (ele.config.type !== 'g') {
      const gBBox = ele.getLocalBounds();
      let { lineWidth = 0 } = ele.style;

      if (!ele.attr('stroke')) {
        lineWidth = 0;
      }
      const halfLineWidth = lineWidth / 2;
      const [gMinX, gMinY] = gBBox.getMin();
      const [gMaxX, gMaxY] = gBBox.getMax();

      minX = Math.min(minX, gMinX - halfLineWidth);
      maxX = Math.max(maxX, gMaxX + halfLineWidth);
      minY = Math.min(minY, gMinY - halfLineWidth);
      maxY = Math.max(maxY, gMaxY + halfLineWidth);
    }
    stack.push(...ele.getChildren());
  }
  return {
    x: minX,
    y: minY,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
};

export const calcCanvasBBox = (paramEle) => {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  const stack = [paramEle];
  while (stack.length) {
    const ele = stack.pop();
    if (ele.config.type !== 'g') {
      const gBBox = ele.getRenderBounds();
      const [gMinX, gMinY] = gBBox.getMin();
      const [gMaxX, gMaxY] = gBBox.getMax();

      minX = Math.min(minX, gMinX);
      maxX = Math.max(maxX, gMaxX);
      minY = Math.min(minY, gMinY);
      maxY = Math.max(maxY, gMaxY);
    }
    stack.push(...ele.getChildren());
  }
  return {
    x: minX,
    y: minY,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
};

export const calculateBBox = (keyShape, matrix) => {
  // 因为 group 可能会移动，所以必须通过父元素计算才能计算出正确的包围盒
  const bbox = getBBox(keyShape, matrix);
  bbox.x = bbox.minX;
  bbox.y = bbox.minY;
  bbox.width = bbox.maxX - bbox.minX;
  bbox.height = bbox.maxY - bbox.minY;
  bbox.centerX = (bbox.minX + bbox.maxX) / 2;
  bbox.centerY = (bbox.minY + bbox.maxY) / 2;
  return bbox;
};

export const calcMatrix = (adapteredEle): number[] => {
  const rotation = (adapteredEle.getLocalEulerAngles() * Math.PI) / 180;
  const [sx, sy] = adapteredEle.getLocalScale();
  const [tx, ty] = adapteredEle.getLocalPosition();

  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);

  return [sx * cos, sy * sin, 0, -sx * sin, sy * cos, 0, tx, ty, 1];
};

export const getMatrix = (ele) => {
  const rotation = (ele.getLocalEulerAngles() * Math.PI) / 180;
  const [sx, sy] = ele.getLocalScale();
  const [tx, ty] = ele.getLocalPosition();

  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);

  return [sx * cos, sy * sin, 0, -sx * sin, sy * cos, 0, tx, ty, 1];
};

export const setMatrix = (ele, mat) => {
  let row0x = mat[0];
  let row0y = mat[3];
  let row1x = mat[1];
  let row1y = mat[4];
  // decompose 3x3 matrix
  // @see https://www.w3.org/TR/css-transforms-1/#decomposing-a-2d-matrix
  let scalingX = Math.sqrt(row0x * row0x + row0y * row0y);
  let scalingY = Math.sqrt(row1x * row1x + row1y * row1y);

  // If determinant is negative, one axis was flipped.
  const determinant = row0x * row1y - row0y * row1x;
  if (determinant < 0) {
    // Flip axis with minimum unit vector dot product.
    if (row0x < row1y) {
      scalingX = -scalingX;
    } else {
      scalingY = -scalingY;
    }
  }

  // Renormalize matrix to remove scale.
  if (scalingX) {
    row0x *= 1 / scalingX;
    row0y *= 1 / scalingX;
  }
  if (scalingY) {
    row1x *= 1 / scalingY;
    row1y *= 1 / scalingY;
  }

  // Compute rotation and renormalize matrix.
  const angle = (Math.atan2(row0y, row0x) * 180) / Math.PI;

  ele.setLocalScale(scalingX, scalingY);
  ele.setLocalPosition(mat[6], mat[7]);
  ele.setLocalEulerAngles(-angle);
};
