import F6 from "@antv/f6";
import data from "./data";
import mds from "@antv/f6/dist/extends/layout/mdsLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("mds", mds);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-node"],
  },
  layout: {
    type: "mds",
    linkDistance: 100,
  },
  animate: true,
  defaultNode: {
    size: 20,
  },
});
graph.data(data);
graph.render();
graph.fitView();
