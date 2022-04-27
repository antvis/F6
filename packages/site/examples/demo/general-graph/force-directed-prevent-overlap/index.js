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
    preventOverlap: true
  },
  modes: {
    default: ["drag-canvas"]
  }
});

function refreshDragedNodePosition(e) {
  const model = e.item.get("model");
  model.fx = e.x;
  model.fy = e.y;
}

const {
  nodes
} = data;
nodes.forEach(node => {
  node.size = Math.random() * 30 + 5;
});
graph.data({
  nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  })
});
graph.render();
graph.on("node:dragstart", function (e) {
  graph.layout();
  refreshDragedNodePosition(e);
});
graph.on("node:drag", function (e) {
  const forceLayout = graph.get("layoutController").layoutMethods[0];
  forceLayout.execute();
  refreshDragedNodePosition(e);
});
graph.on("node:dragend", function (e) {
  e.item.get("model").fx = null;
  e.item.get("model").fy = null;
});
graph.render();
graph.fitView();