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
    gravity: 5,
    speed: 5,
    tick: () => {
      graph.refreshPositions();
    },
  },
  animate: true,
  defaultNode: {
    size: 30,
  },
});
graph.data(data);
graph.render();
graph.fitView();
