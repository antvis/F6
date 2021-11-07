import { isColor, typeParser } from '../utils/parser';

const attributesMap = {};
export function registerAttr(attr, parser: Function) {
  if (!attr) return;
  let arr = attr;
  if (!Array.isArray(arr)) arr = [arr];
  arr.forEach((attr) => {
    if (typeof parser === 'function') {
      attributesMap[attr] = parser;
    } else {
      attributesMap[attr] = typeParser;
    }
  });
}

const boxParser = function (type, value) {
  const style = {};
  const arr = value.split(/\s/g).filter((s) => s !== '');
  if (arr.length === 1 && !isNaN(arr[0])) {
    style[`${type}`] = Number(arr[0]);
  }
  if (arr.length === 2) {
    !isNaN(Number(arr[0])) && (style[`${type}Bottom`] = style[`${type}Top`] = Number(arr[0]));
    !isNaN(Number(arr[1])) && (style[`${type}Left`] = style[`${type}Right`] = Number(arr[1]));
  }
  if (arr.length === 3) {
    !isNaN(Number(arr[0])) && (style[`${type}Top`] = Number(arr[0]));
    !isNaN(Number(arr[1])) && (style[`${type}Left`] = style[`${type}Right`] = Number(arr[1]));
    !isNaN(Number(arr[2])) && (style[`${type}Bottom`] = Number(arr[2]));
  }
  if (arr.length === 4) {
    !isNaN(Number(arr[0])) && (style[`${type}Top`] = Number(arr[0]));
    !isNaN(Number(arr[1])) && (style[`${type}Right`] = Number(arr[1]));
    !isNaN(Number(arr[2])) && (style[`${type}Bottom`] = Number(arr[2]));
    !isNaN(Number(arr[3])) && (style[`${type}Left`] = Number(arr[3]));
  }
  return style;
};

const borderRadiusParser = function (value) {
  const style = {};
  const arr = value.split(/\s/g).filter((s) => s !== '');
  if (arr.length === 1 && !isNaN(arr[0])) {
    style[`borderTopLeftRadius`] = Number(arr[0]);
    style[`borderTopRightRadius`] = Number(arr[0]);
    style[`borderBottomRightRadius`] = Number(arr[0]);
    style[`borderBottomLeftRadius`] = Number(arr[0]);
  }
  if (arr.length === 2) {
    !isNaN(Number(arr[0])) &&
      (style[`borderTopLeftRadius`] = style[`borderBottomRightRadius`] = Number(arr[0]));
    !isNaN(Number(arr[2])) &&
      (style[`borderBottomLeftRadius`] = style[`borderTopRightRadius`] = Number(arr[1]));
  }
  if (arr.length === 3) {
    !isNaN(Number(arr[0])) && (style[`borderTopLeftRadius`] = Number(arr[0]));
    !isNaN(Number(arr[1])) &&
      (style[`borderBottomLeftRadius`] = style[`borderTopRightRadius`] = Number(arr[1]));
    !isNaN(Number(arr[2])) && (style[`borderBottomRightRadius`] = Number(arr[2]));
  }
  if (arr.length === 4) {
    !isNaN(Number(arr[0])) && (style[`borderTopLeftRadius`] = Number(arr[0]));
    !isNaN(Number(arr[1])) && (style[`borderTopRightRadius`] = Number(arr[1]));
    !isNaN(Number(arr[2])) && (style[`borderBottomRightRadius`] = Number(arr[2]));
    !isNaN(Number(arr[3])) && (style[`borderBottomLeftRadius`] = Number(arr[3]));
  }
  return style;
};

const backgroundParser = function (value) {
  const style = {};

  const arr = value.split(/\s/g).filter((s) => s !== '');

  for (value of arr) {
    if (isColor(value)) {
      style['backgroundColor'] = value;
    } else if (value?.startsWith('url')) {
      const match = value.match(/url\((.+?)\)/);
      match && (style['backgroundImage'] = match[1]);
    }
  }
  return style;
};

const borders = ['solid', 'dashed'];
const borderParser = function (value) {
  const style = {};
  const arr = value.split(/\s/g).filter((s) => s !== '');
  for (const value of arr) {
    if (!isNaN(Number(value))) {
      style['borderWidth'] = Number(value);
    } else if (isColor(value)) {
      style['borderColor'] = value;
    } else if (borders.includes(value)) {
      style['borderStyle'] = value;
    }
  }
  return style;
};

const shadowParser = function (value) {
  const style = {};
  const arr = value.split(/\s/g).filter((s) => s !== '');

  const propers = ['shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor'];

  while (arr.length) {
    const value = arr.shift();
    if (!isNaN(Number(value))) {
      const key = propers.shift();
      style[key] = Number(value);
      continue;
    } else if (isColor(value)) {
      style['shadowColor'] = value;
    }
  }
  return style;
};

registerAttr('padding', boxParser.bind(null, 'padding'));
registerAttr('margin', boxParser.bind(null, 'margin'));
registerAttr('border-radius', borderRadiusParser);
registerAttr('border', borderParser);
registerAttr('background', backgroundParser);
registerAttr(['box-shadow', 'text-shadow'], shadowParser);

export function parseAttr(key, value) {
  if (attributesMap[key]) {
    return attributesMap[key](value);
  }
  try {
    return typeParser(value);
  } catch (e) {
    console.error(e);
    return value;
  }
}
