import F6 from "@antv/f6";
import { data, legendData } from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const legend = new F6.Legend({
  data: legendData,
  align: "center",
  layout: "horizontal",
  position: "bottom-left",
  vertiSep: 12,
  horiSep: 24,
  offsetY: -24,
  padding: [4, 16, 8, 16],
  containerStyle: {
    fill: "#ccc",
    lineWidth: 1,
  },
  title: " ",
  titleConfig: {
    offsetY: -8,
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: true,
  plugins: [legend],
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "radial",
    focusNode: "li",
    linkDistance: 200,
    unitRadius: 200,
  },
  defaultEdge: {
    style: {
      endArrow: true,
    },
    labelCfg: {
      autoRotate: true,
      style: {
        stroke: "#fff",
        lineWidth: 5,
      },
    },
  },
  defaultNode: {
    type: "donut",
    style: {
      lineWidth: 0,
    },
    labelCfg: {
      position: "bottom",
    },
  },
});
graph.data(data);
graph.render();
graph.on("node:tap", (evt) => {
  const { item } = evt;
  graph.setItemState(item, "selected", true);
});
graph.on("canvas:tap", () => {
  graph.getNodes().forEach((node) => {
    graph.clearItemStates(node);
  });
});
