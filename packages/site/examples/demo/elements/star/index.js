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
    default: ["drag-canvas", "drag-node"],
  },
  defaultNode: {
    type: "star",
    size: [60, 60],
    labelCfg: {
      position: "bottom",
    },
    linkPoints: {
      top: true,
      right: true,
      bottom: true,
      left: true,
    },
    icon: {
      show: true,
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("node:tap", (evt) => {
  const { item } = evt;
  graph.setItemState(item, "selected", true);
});
graph.on("canvas:tap", () => {
  graph.getNodes().forEach((node) => {
    graph.clearItemStates(node);
  });
});
