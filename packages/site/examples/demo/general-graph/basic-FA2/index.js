import F6 from "@antv/f6";
import data from "./data";
import forceAtlas2 from "@antv/f6/dist/extends/layout/forceAtlas2Layout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("forceAtlas2", forceAtlas2);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["zoom-canvas", "drag-canvas", "drag-node"],
  },
  layout: {
    type: "forceAtlas2",
    preventOverlap: true,
    kr: 10,
    center: [250, 250],
  },
  defaultNode: {
    size: 20,
  },
});
data.nodes.forEach((node) => {
  node.x = Math.random() * 1;
});
graph.on("afterlayout", () => {
  graph.fitView();
});
graph.data(data);
graph.render();
graph.fitView();
