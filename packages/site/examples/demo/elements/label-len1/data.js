import F6 from '@antv/f6';

const fittingString = (str, maxWidth, fontSize) => {
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp('[\u4E00-\u9FA5]+'); // distinguish the Chinese charactors and letters
  str.split('').forEach((letter, i) => {
    if (currentWidth > maxWidth) return;
    if (pattern.test(letter)) {
      // Chinese charactors
      currentWidth += fontSize;
    } else {
      // get the width of single letter according to the fontSize
      currentWidth += F6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth) {
      res = `${str.substr(0, i)}\n${str.substr(i)}`;
    }
  });
  return res;
};

const globalFontSize = 12;
const data = {
  nodes: [
    {
      x: 100,
      y: 100,
      label: fittingString('Break the line if it is too long', 80, globalFontSize),
      id: 'node1',
      labelCfg: {
        position: 'bottom',
      },
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      x: 300,
      y: 100,
      label: fittingString('Break the line if it is too long', 80, globalFontSize),
      id: 'node2',
      labelCfg: {
        position: 'bottom',
      },
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
      label: fittingString('Break the line if it is too long', 100, globalFontSize),
      labelCfg: {
        refY: 20,
      },
      style: {
        endArrow: true,
      },
    },
  ],
};

export default data;
