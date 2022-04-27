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
  groupByTypes: false,
  modes: {
    default: ["drag-canvas", "drag-node", "drag-combo", "collapse-expand-combo"]
  },
  defaultCombo: {
    type: "rect",
    size: [50, 50],
    labelCfg: {
      position: "top"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("edge:tap", evt => {
  const {
    item
  } = evt;
  graph.setItemState(item, "selected", true);
});
graph.on("canvas:tap", () => {
  graph.getEdges().forEach(edge => {
    graph.clearItemStates(edge);
  });
});