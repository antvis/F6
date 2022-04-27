import F6 from "@antv/f6";
import data from "./data";
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
  fitViewPadding: 40,
  layout: {
    type: "force",
    preventOverlap: true,
    nodeSize: 20
  },
  modes: {
    default: ["drag-node"]
  }
});
graph.on("beforelayout", function () {
  currentPage.setData({
    message: "Doing force-directed layout... the text will be changed after the layout being done."
  });
});
graph.on("afterlayout", function () {
  currentPage.setData({
    message: "Done!"
  });
});
graph.data(data);
graph.render();
graph.fitView();