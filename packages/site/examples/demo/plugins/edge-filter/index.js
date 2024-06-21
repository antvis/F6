import F6 from "@antv/f6";
import data from "./data";
import { EdgeFilterLens } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
data.edges.forEach((edge) => {
  edge.color = "#aaa";
  edge.size = 2;
  edge.style = {
    opacity: 0.7,
  };
  edge.label = "a";
});
const filterConfigs = {
  trigger: "drag",
  showLabel: "edge",
  r: 60,
};
const filterLens = new EdgeFilterLens(filterConfigs);
const graph = new F6.Graph({
  pixelRatio,
  fitView: true,
  width,
  height,
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node"],
  },
  plugins: [filterLens],
  defaultEdge: {
    labelCfg: {
      autoRotate: true,
      style: {
        stroke: "#fff",
        lineWidth: 2,
      },
    },
  },
  defaultNode: {
    size: 15,
    color: "#5B8FF9",
    style: {
      lineWidth: 2,
      fill: "#C6E5FF",
    },
  },
});
graph.data(data);
graph.render();
graph.getEdges().forEach((edge) => {
  edge
    .getContainer()
    .getChildren()
    .forEach((shape) => {
      if (shape.get("type") === "text") shape.set("visible", false);
    });
});
