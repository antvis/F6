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
  linkCenter: true,
  modes: {
    default: ["drag-canvas"],
  },
  defaultEdge: {
    type: "cubic-horizontal",
  },
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("edge:tap", (evt) => {
  const { item } = evt;
  graph.setItemState(item, "selected", true);
});
graph.on("canvas:tap", () => {
  graph.getEdges().forEach((edge) => {
    graph.clearItemStates(edge);
  });
});
