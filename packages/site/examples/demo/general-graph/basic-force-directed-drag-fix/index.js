import F6 from "@antv/f6";
import getData from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const data = getData();
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "force",
    preventOverlap: true,
    nodeSize: 20,
  },
  modes: {
    default: ["drag-node"],
  },
  defaultNode: {
    size: 20,
  },
});

function refreshDragedNodePosition(e) {
  const model = e.item.get("model");
  model.fx = e.x;
  model.fy = e.y;
}

graph.on("node:dragstart", (e) => {
  graph.layout();
  refreshDragedNodePosition(e);
});
graph.on("node:drag", (e) => {
  refreshDragedNodePosition(e);
});
graph.data(data);
graph.render();
graph.fitView();
