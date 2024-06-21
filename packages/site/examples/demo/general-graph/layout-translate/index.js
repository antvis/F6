import F6 from "@antv/f6";
import data from "./data";
import circular from "@antv/f6/dist/extends/layout/circularLayout";
import grid from "@antv/f6/dist/extends/layout/gridLayout";
import force from "@antv/f6/dist/extends/layout/forceLayout";
import radial from "@antv/f6/dist/extends/layout/radialLayout";
import concentric from "@antv/f6/dist/extends/layout/concentricLayout";
import mds from "@antv/f6/dist/extends/layout/mdsLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("circular", circular);
F6.registerLayout("grid", grid);
F6.registerLayout("force", force);
F6.registerLayout("radial", radial);
F6.registerLayout("concentric", concentric);
F6.registerLayout("mds", mds);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "circular",
  },
  modes: {
    default: ["drag-node"],
  },
  animate: true,
});
graph.data(data);
graph.render();
graph.fitView();
setTimeout(() => {
  graph.updateLayout({
    type: "circular",
    radius: 200,
  });
}, 3000);
setTimeout(() => {
  graph.updateLayout({
    type: "grid",
  });
}, 6000);
setTimeout(() => {
  graph.updateLayout({
    type: "force",
    preventOverlap: true,
    nodeSize: 20,
  });
}, 9000);
setTimeout(() => {
  graph.updateLayout({
    type: "radial",
    preventOverlap: true,
    nodeSize: 15,
  });
}, 12000);
setTimeout(() => {
  graph.updateLayout({
    type: "concentric",
    minNodeSpacing: 30,
  });
}, 15000);
setTimeout(() => {
  graph.updateLayout({
    type: "mds",
    linkDistance: 100,
  });
}, 18000);
