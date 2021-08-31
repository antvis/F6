import { processSearchData } from './common';
import {
  treeGraphContainer,
  generalGraphContainer,
  basicElementContainer,
  basicInteractiveContainer,
  aminationContainer,
  customizeTree,
  classicCace,
  newsMapVisualize,
} from './data';

const all_data = [
  ...treeGraphContainer,
  ...generalGraphContainer,
  ...basicElementContainer,
  ...basicInteractiveContainer,
  ...aminationContainer,
  ...customizeTree,
  ...classicCace,
  ...newsMapVisualize,
];

// 搜索数据
const componentList = processSearchData(all_data);
export { componentList };
