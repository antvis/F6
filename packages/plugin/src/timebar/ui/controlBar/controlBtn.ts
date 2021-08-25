import { createSegmentNode } from '@antv/f6-ui';

function createControlBtn(which, style) {
  const { height = 16, fill } = style;
  const len = height / 2;
  let html = '';
  if (which === 'next') {
    html = `
      <shape  type='path' path='[
        ["M", 0, ${0 - len}],
        ["L", ${len}, 0],
        ["L", 0, ${len}],
        ["Z", 0, ${0 - len}],
        ["M", 0, 0],
        ["L", ${0 - len}, ${0 - len}],
        ["L", ${0 - len}, ${len}],
        ["Z"]
      ]'/>  
    `;
  }

  if (which === 'prev') {
    html = `
      <shape  type='path' path='[
        ["M", 0, ${0 - len}],
        ["L", ${0 - len}, 0],
        ["L", 0, ${0 + len}],
        ["L", 0, ${0 - len}],
        ["M", 0, 0],
        ["L", ${0 + len}, ${0 - len}],
        ["L", ${0 + len}, ${0 + len}],
        ["Z"]
      ]'/>  
    `;
  }
  const css = `
    shape {
      margin-left: ${len};
      width: ${len};
      background: ${fill};
    }
  `;
  return createSegmentNode(html, css);
}

export default createControlBtn;
