function strLen(str = '') {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      len += 1;
    } else {
      len += 2;
    }
  }

  return len;
}

function measureText(text, font) {
  let fontSize = 12;
  if (font) {
    fontSize = parseInt(font.split(' ')[3], 10);
  }
  fontSize /= 2;
  return {
    width: strLen(text) * fontSize,
  };
}

function processSearchData(all_data) {
  const all_result = [];
  all_data.forEach((obj) => {
    const { name: groupName, thumb, nameEn, detailList } = obj;
    detailList.forEach((detail) => {
      const { name, path: tmpPath } = detail;
      const suggestion = nameEn + groupName + name;
      const path = tmpPath.replace(/../, '/pages');
      const result = {
        name,
        thumb,
        path,
        suggestion,
      };
      all_result.push(result);
    });
  });
  return all_result;
}
export { measureText, processSearchData };
