import F6 from "@antv/f6";
import data from "./data";
import radial from "@antv/f6/dist/extends/layout/radialLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("radial", radial);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 30,
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "radial",
    unitRadius: 70,
    maxIteration: 1000,
    linkDistance: 10,
    preventOverlap: true,
    nodeSize: 30,
    sortBy: "sortAttr2",
    sortStrength: 50
  },
  animate: true,
  defaultEdge: {
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2"
      }
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();