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
  fitCenter: true,
  defaultNode: {
    size: 15,
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
  },
  modes: {
    default: ["drag-node"],
  },
});
graph.data(data);
graph.render();
graph.fitView();
