import F6 from "@antv/f6";
import data from "./data";
import dagreLayout from "@antv/f6/dist/extends/layout/dagreLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("dagre", dagreLayout);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 30,
  animate: true,
  groupByTypes: false,
  modes: {
    default: ["drag-combo", "drag-node", "drag-canvas", {
      type: "collapse-expand-combo",
      relayout: false
    }]
  },
  layout: {
    type: "dagre",
    sortByCombo: false,
    ranksep: 10,
    nodesep: 10
  },
  defaultNode: {
    size: [60, 30],
    type: "rect",
    anchorPoints: [[0.5, 0], [0.5, 1]]
  },
  defaultEdge: {
    type: "line"
  },
  defaultCombo: {
    type: "rect",
    style: {
      fillOpacity: 0.1
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();