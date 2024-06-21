import F6 from "@antv/f6";
import data from "./data";
import concentric from "@antv/f6/dist/extends/layout/concentricLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("concentric", concentric);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["zoom-canvas", "drag-canvas", "drag-node"],
  },
  layout: {
    type: "concentric",
    maxLevelDiff: 0.5,
    sortBy: "degree",
  },
  animate: true,
  defaultNode: {
    size: 5,
  },
});
graph.data(data);
graph.render();
graph.fitView();
