import F6 from "@antv/f6";
import data from "./data";
import { SnapLine } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
const snapLine = new SnapLine();
const graph = new F6.Graph({
  pixelRatio,
  width,
  height,
  linkCenter: true,
  defaultNode: {
    size: 30
  },
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node"]
  },
  plugins: [snapLine]
});
graph.data(data);
graph.render();