import { processDisplayData } from './util'

import {
  treeGraphContainer,
  generalGraphContainer,
  basicElementContainer,
  basicInteractiveContainer,
  aminationContainer,
  customizeTree,
  classicCace,
  newsMapVisualize,
} from './data'

const processed_treeGraphContainer = processDisplayData(treeGraphContainer)
const processed_generalGraphContainer = processDisplayData(generalGraphContainer)
const processed_basicElementContainer = processDisplayData(basicElementContainer)
const processed_basicInteractiveContainer = processDisplayData(basicInteractiveContainer)
const processed_aminationContainer = processDisplayData(aminationContainer)
const processed_customizeTree = processDisplayData(customizeTree)
const processed_classicCace = processDisplayData(classicCace)
const processed_newsMapVisualize = processDisplayData(newsMapVisualize)
//所有处理好的列表数据，用于展示
// const list = processDisplayData(all_data)

const all_list = [
  processed_treeGraphContainer,
  processed_generalGraphContainer,
  processed_basicElementContainer,
  processed_basicInteractiveContainer,
  processed_aminationContainer,
  processed_customizeTree,
  processed_classicCace,
  processed_newsMapVisualize,
]

export {
  all_list,
  processed_treeGraphContainer,
  processed_generalGraphContainer,
  processed_basicElementContainer,
  processed_basicInteractiveContainer,
  processed_aminationContainer,
  processed_customizeTree,
  processed_classicCace,
  processed_newsMapVisualize,
}
