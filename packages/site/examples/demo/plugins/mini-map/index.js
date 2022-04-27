import { MiniMap } from "@antv/f6-plugin";
import data from "./data";
import F6 from "@antv/f6";
const width = 375;
const height = 600;
const pixelRatio = 2;
const miniMap = new MiniMap({
  className: "custom-container",
  viewportClassName: "custom-viewport",
  getCss: () => {
    return `
          .custom-container {
            top: 0;
            background: #eee;
            border: 1 solid #333;
          }
          .custom-viewport {
            border:1 solid blue;
          }
        `;
  }
});
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
  plugins: [miniMap]
});
graph.data(data);
graph.render();
graph.get("canvas").set("localRefresh", false);