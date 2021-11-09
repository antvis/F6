// 展开icon
const collipseIcon = function collipseIcon(x, y, r) {
  return [
    ['M', x - r, y],
    ['A', r, r, 0, 1, 0, x + r, y],
    ['A', r, r, 0, 1, 0, x - r, y],
    ['M', x + 7 - r, y],
    ['L', x + r - 7, y],
  ];
};
// 折叠icon
const expandIcon = function expandIcon(x, y, r) {
  return [
    ['M', x - r, y],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x + 7 - r, y],
    ['L', x + r - 7, y],
    ['M', x, y - r + 7],
    ['L', x, y + r - 7],
  ];
};

/**
 * 添加展开/折叠标记
 * @param {*} group
 * @param {*} side up ｜ down 上下布局的时候，位置不一样
 * @param {*} type expand ｜ collipse 展开/折叠类型
 * @param {*} h 容器高度
 */
export function addMarker(group, side, type, h, circleIcon?) {
  let markerY = 0;
  if (side === 'up') {
    markerY = -h / 2 - 1 - 16;
  }
  if (side === 'down') {
    markerY = h / 2 + 16 + 1;
  }

  group.addShape('marker', {
    attrs: {
      x: 0,
      y: markerY,
      r: 14,
      stroke: '#FFFFFF',
      cursor: 'pointer',
      fill: '#1890FF',
      symbol: type === 'expand' ? expandIcon : collipseIcon,
    },
    name: type === 'expand' ? 'add-item' : 'remove-item',
  });
  
}

/**
 * 增加循环持股标记
 * @param {*} group
 * @param {*} x
 * @param {*} y
 * @param {*} icon
 */
export function addTag(group, x, y) {
  const tagGroup = group.addGroup({
    id: 'equity-tag',
    name: 'equity-tag',
  });

  const tagKeyShape = tagGroup.addShape('rect', {
    attrs: {
      width: 98,
      height: 28,
      stroke: '#FFA39E',
      fill: '#FFF1F0',
      x,
      y,
      radius: 2,
    },
  });
  group.set('tagKeyShape', tagKeyShape);

  tagGroup.addShape('text', {
    attrs: {
      fill: '#FF4D4F',
      text: '循环持股',
      textAlign: 'left',
      fontSize: 20,
      width: 98,
      x: x + 8,
      y: y + 20 / 2 + 6 + 9,
    },
  });
}

export default {
  
  draw(cfg, group) {
    const styles = this.getShapeStyle(cfg);
    const { side, children, isCircle, hasExpand } = cfg;
    const w = styles.width;
    const h = styles.height;

    const keyShape = group.addShape('rect', {
      attrs: {
        ...styles,
        x: -w / 2,
        y: -h / 2,
      },
    });

    const bg = '#E6F7FF';
    const fontColor = '#333333';
  

    let labelY = 10;
    let rectH = h;
  
    if (cfg.formattedName.includes('\n')) {
      labelY = 6;
    }
    rectH = 70;

    // 边框
    group.addShape('rect', {
      attrs: {
        width: w - 2,
        height: rectH - 2,
        fill: bg,
        x: 1 - w / 2,
        y: 1 - h / 2,
      },
      draggable: true,
    });

    // 格式化后文本
    group.addShape('text', {
      attrs: {
        fontSize: 20,
        fill: fontColor,
        text: cfg.formattedName,
        width: w,
        textAlign: 'center',
        x: 0,
        y: labelY,
        lineHeight: 28,
      },
      draggable: true,
    });
    group.addShape('text', {
      attrs: {
        fill: '#000000',
        fillOpacity: 0.45,
        text: cfg.tip,
        fontSize: 16,
        width: w,
        textAlign: 'center',
        x: 0,
        y: (h - 70) / 2 + 70 - h / 2 + 8,
      },
    });

   
    // addCircleBubble(group, -104 / 2, -h / 2 - 36 - 6, '循环持股');
    addTag(group, 10, -22 / 2 - h / 2 - 5);

    addMarker(group, side, children.length > 0 ? 'ellipse' : 'expand', h);

    return keyShape;
  },
};
