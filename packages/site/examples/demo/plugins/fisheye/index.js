import F6 from "@antv/f6";
import data from "./data";
import { Fisheye } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
const fisheye = new Fisheye({
  r: 200,
  trigger: "drag",
});
const colors = [
  "#8FE9FF",
  "#87EAEF",
  "#FFC9E3",
  "#A7C2FF",
  "#FFA1E3",
  "#FFE269",
  "#BFCFEE",
  "#FFA0C5",
  "#D5FF86",
];
data.nodes.forEach((node) => {
  node.label = node.id;
  node.size = Math.random() * 30 + 10;
  node.style = {
    fill: colors[Math.floor(Math.random() * 9)],
    lineWidth: 0,
  };
});
const graph = new F6.Graph({
  pixelRatio,
  width,
  height,
  fitView: true,
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node"],
  },
  plugins: [fisheye],
});
graph.data(data);
graph.render();
