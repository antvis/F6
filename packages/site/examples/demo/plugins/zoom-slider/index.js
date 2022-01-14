import { ZoomSlider } from "@antv/f6-plugin";
import data from "./data";
import F6 from "@antv/f6";
const width = 375;
const height = 600;
const pixelRatio = 2;
const zoomSlider = new ZoomSlider();
const graph = new F6.Graph({
  context: ctx,
  width,
  height,
  pixelRatio,
  linkCenter: true,
  renderer,
  defaultNode: {
    size: 30
  },
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node"]
  },
  plugins: [zoomSlider]
});
graph.data(data);
graph.render();
graph.get("canvas").set("localRefresh", false);