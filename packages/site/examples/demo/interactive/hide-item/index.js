import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  modes: {
    default: [
      "drag-node",
      {
        type: "drag-canvas",
        enableOptimize: true,
      },
      {
        type: "zoom-canvas",
        enableOptimize: true,
      },
    ],
  },
  defaultNode: {
    size: [10, 10],
    style: {
      lineWidth: 2,
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    size: 1,
    style: {
      stroke: "#e2e2e2",
      lineAppendWidth: 2,
    },
  },
  nodeStateStyles: {
    yourStateName: {
      stroke: "#f00",
      lineWidth: 3,
    },
  },
  edgeStateStyles: {
    yourStateName: {
      stroke: "#f00",
      lineWidth: 3,
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
