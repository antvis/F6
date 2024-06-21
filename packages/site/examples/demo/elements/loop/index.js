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
    default: ["drag-node"],
  },
  defaultEdge: {
    type: "loop",
    style: {
      endArrow: {
        path: "M 0,0 L 20,10 L 20,-10 Z",
        fill: "#eee",
      },
    },
    loopCfg: {
      position: "top",
    },
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
