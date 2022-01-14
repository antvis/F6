import F6 from "@antv/f6";
import data from "./data";
import grid from "@antv/f6/dist/extends/layout/gridLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("grid", grid);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 50,
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node"]
  },
  layout: {
    type: "grid"
  }
});
const hull1 = graph.createHull({
  id: "hull1",
  type: "smooth-convex",
  padding: 15,
  members: graph.getNodes().filter(node => node.getModel().group === 1)
});
const hull2 = graph.createHull({
  id: "hull2",
  members: graph.getNodes().filter(node => node.getModel().group === 2),
  padding: 15,
  type: "bubble",
  style: {
    fill: "pink",
    stroke: "red"
  },
  update: "drag"
});
graph.on("canvas:contextmenu", ev => {
  ev.preventDefault();
  ev.stopPropagation();
  const item = graph.addItem("node", {
    x: ev.x,
    y: ev.y,
    id: Math.random(),
    group: 2
  });
  hull2.addMember(item);
});
graph.on("afterupdateitem", e => {
  if (hull1.members.indexOf(e.item) > -1 || hull1.nonMembers.indexOf(e.item) > -1) {
    hull1.updateData(hull1.members);
  }
});
graph.on("node:dragend", e => {
  const {
    item
  } = e;
  const memberIdx = hull2.members.indexOf(item);

  if (memberIdx > -1) {
    if (!hull2.contain(item)) {
      hull2.removeMember(item);
    } else {
      hull2.updateData(hull2.members);
    }
  } else if (hull2.contain(item)) hull2.addMember(item);
});
graph.data(data);
graph.render();
graph.fitView();