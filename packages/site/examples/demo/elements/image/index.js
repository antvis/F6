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
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  defaultNode: {
    type: "image",
    size: [260, 80],
    clipCfg: {
      show: false,
      type: "circle",
      r: 30,
      style: {
        lineWidth: 1,
      },
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
