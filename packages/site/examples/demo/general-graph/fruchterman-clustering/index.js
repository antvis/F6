import F6 from "@antv/f6";
import getData from "./data";
import fruchtermanLayout from "@antv/f6/dist/extends/layout/fruchtermanLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("fruchterman", fruchtermanLayout);
const data = getData();
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "fruchterman",
    gravity: 10,
    speed: 5,
    clustering: true,
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
