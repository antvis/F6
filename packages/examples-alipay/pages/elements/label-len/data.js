import F6 from '@antv/f6';

const globalFontSize = 12;

const fittingString = (str, maxWidth, fontSize) => {
  const ellipsis = '...';
  const ellipsisLength = F6.Util.getTextSize(ellipsis, fontSize)[0];
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp('[\u4E00-\u9FA5]+'); // distinguish the Chinese charactors and letters
  str.split('').forEach((letter, i) => {
    if (currentWidth > maxWidth - ellipsisLength) return;
    if (pattern.test(letter)) {
      // Chinese charactors
      currentWidth += fontSize;
    } else {
      // get the width of single letter according to the fontSize
      currentWidth += F6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth - ellipsisLength) {
      res = `${str.substr(0, i)}${ellipsis}`;
    }
  });
  return res;
};

const data = {
  nodes: [
    {
      x: 100,
      y: 100,
      size: 40,
      label: 'This label is too long to be displayed',
      id: 'node1',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      x: 300,
      y: 100,
      size: 80,
      label: 'This label is also too long to be displayed',
      id: 'node2',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      label: 'This label is too long to be displayed',
      labelCfg: {
        refY: 20,
        style: {
          fontSize: globalFontSize,
        },
      },
      style: {
        endArrow: true,
      },
    },
  ],
};

// Modify the label in the data
data.nodes.forEach(function(node) {
  node.label = fittingString(node.label, node.size, globalFontSize);
});
data.edges.forEach(function(edge) {
  edge.label = fittingString(edge.label, 120, globalFontSize);
});

export default data;
