import F6 from "@antv/f6";
import data from "./data";
import grid from "@antv/f6/dist/extends/layout/gridLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("grid", grid);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["zoom-canvas", "drag-canvas", "drag-node"]
  },
  layout: {
    type: "grid",
    begin: [20, 20],
    width: width - 20,
    height: height - 20,
    sortBy: "cluster"
  },
  animate: true,
  defaultNode: {
    size: 20
  }
});
graph.data(data);
graph.render();
graph.fitView();