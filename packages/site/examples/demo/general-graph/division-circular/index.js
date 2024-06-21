import F6 from "@antv/f6";
import data from "./data";
import circular from "@antv/f6/dist/extends/layout/circularLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("circular", circular);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "circular",
    divisions: 5,
    radius: 200,
    startAngle: Math.PI / 4,
    endAngle: Math.PI,
  },
  animate: true,
  defaultNode: {
    size: 20,
  },
  defaultEdge: {
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
