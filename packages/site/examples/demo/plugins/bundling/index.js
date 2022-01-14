import F6 from "@antv/f6";
import data from "./data";
import CircularLayout from "@antv/f6/dist/extends/layout/circularLayout";
import { Bundling } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("circular", CircularLayout);
const edgeBundling = new Bundling({
  bundleThreshold: 0.1
});
const graph = new F6.Graph({
  pixelRatio,
  width,
  height,
  linkCenter: true,
  fitView: true,
  modes: {
    default: ["zoom-canvas", "drag-canvas"]
  },
  layout: {
    type: "circular",
    center: [width / 2, height / 2],
    radius: height / 2.5,
    ordering: null
  },
  plugins: [edgeBundling],
  defaultNode: {
    size: [20, 20],
    color: "steelblue"
  },
  defaultEdge: {
    size: 1,
    color: "#999"
  }
});
graph.data(data);
graph.render();
setTimeout(() => {
  edgeBundling.bundling(data);
}, 1000);