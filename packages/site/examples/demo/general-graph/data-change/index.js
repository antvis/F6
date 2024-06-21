import F6 from "@antv/f6";
import { data, data2 } from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "force",
  },
  defaultNode: {
    size: 20,
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2",
      },
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
setTimeout(() => {
  graph.changeData(data2);
}, 2500);
