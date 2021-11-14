const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second]
    .map(formatNumber)
    .join(':')}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

// 对data.js中的列表数据进行处理
const processDisplayData = (displayContainers) => {
  const containerResult = [];
  displayContainers.forEach((container) => {
    const { name, thumb, nameEn, detailList } = container;
    const id = name + nameEn;
    const pages = [];
    detailList.forEach((obj) => {
      pages.push(obj);
    });

    const list = {
      id,
      name,
      nameEn,
      open: false,
      pages,
      thumb,
    };
    containerResult.push(list);
  });
  return containerResult;
};

export { formatTime, processDisplayData };
