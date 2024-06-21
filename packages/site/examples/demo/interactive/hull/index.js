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
  fitViewPadding: 50,
  modes: {
    default: ["drag-canvas", "zoom-canvas", "drag-node", "lasso-select"],
  },
  layout: {
    type: "force",
    preventOverlap: true,
    linkDistance: (d) => {
      if (d.source.id === "node0") {
        return 300;
      }

      return 60;
    },
    nodeStrength: (d) => {
      if (d.isLeaf) {
        return -50;
      }

      return -10;
    },
    edgeStrength: (d) => {
      if (
        d.source.id === "node1" ||
        d.source.id === "node2" ||
        d.source.id === "node3"
      ) {
        return 0.7;
      }

      return 0.1;
    },
  },
});
graph.data({
  nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  }),
});
const centerNodes = graph.getNodes().filter((node) => !node.getModel().isLeaf);
graph.on("afterlayout", () => {
  const hull1 = graph.createHull({
    id: "centerNode-hull",
    type: "bubble",
    members: centerNodes,
    padding: 10,
  });
  const hull2 = graph.createHull({
    id: "leafNode-hull1",
    members: ["node6", "node7"],
    padding: 10,
    style: {
      fill: "lightgreen",
      stroke: "green",
    },
  });
  const hull3 = graph.createHull({
    id: "leafNode-hull2",
    members: ["node8", "node9", "node10", "node11", "node12", "node13"],
    padding: 10,
    style: {
      fill: "lightgreen",
      stroke: "green",
    },
  });
  graph.on("afterupdateitem", () => {
    hull1.updateData(hull1.members);
    hull2.updateData(hull2.members);
    hull3.updateData(hull3.members);
  });
});
graph.render();
graph.fitView();
