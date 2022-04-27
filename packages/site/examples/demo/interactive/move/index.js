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
  defaultNode: {
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9"
    }
  },
  defaultEdge: {
    style: {
      stroke: "#b5b5b5"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("node:tap", event => {
  const {
    item
  } = event;
  graph.focusItem(item);
});