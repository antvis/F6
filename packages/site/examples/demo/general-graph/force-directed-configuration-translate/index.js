import F6 from "@antv/f6";
import getData from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const data = getData();
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "force",
    linkDistance: 50,
    center: [width / 2, height / 2]
  },
  animate: true,
  defaultNode: {
    size: 20
  }
});
graph.data(data);
graph.render();
graph.fitView();
const my = this;
setInterval(() => {
  layoutConfigTranslation();
}, 5000);

function layoutConfigTranslation() {
  setTimeout(() => {
    my.setData({
      desc: "Force layout, linkDistance = 100, preventOverlap: true"
    });
    my.graph.updateLayout({
      linkDistance: 100,
      preventOverlap: true,
      nodeSize: 20
    });
  }, 2500);
  setTimeout(() => {
    my.setData({
      desc: "Force layout, linkDistance = 50, preventOverlap: false"
    });
    my.graph.updateLayout({
      linkDistance: 50,
      preventOverlap: false
    });
  }, 5000);
}