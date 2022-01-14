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
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "dagre",
    rankdir: "LR",
    align: "DL",
    nodesepFunc: () => 1,
    ranksepFunc: () => 1
  },
  defaultNode: {
    size: [30, 20],
    type: "rect",
    style: {
      lineWidth: 2,
      stroke: "#5B8FF9",
      fill: "#C6E5FF"
    }
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2"
      }
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();