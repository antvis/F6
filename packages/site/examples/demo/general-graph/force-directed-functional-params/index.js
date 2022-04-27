import F6 from "@antv/f6";
import getData from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const data = getData();

function refreshDragedNodePosition(e) {
  const model = e.item.get("model");
  model.fx = e.x;
  model.fy = e.y;
}

const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "force",
    preventOverlap: true,
    linkDistance: d => {
      if (d.source.id === "node0") {
        return 100;
      }

      return 30;
    },
    nodeStrength: d => {
      if (d.isLeaf) {
        return -50;
      }

      return -10;
    },
    edgeStrength: d => {
      if (d.source.id === "node1" || d.source.id === "node2" || d.source.id === "node3") {
        return 0.7;
      }

      return 0.1;
    }
  },
  defaultNode: {
    color: "#5B8FF9"
  },
  modes: {
    default: ["drag-canvas"]
  }
});
const {
  nodes
} = data;
graph.data({
  nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  })
});
graph.on("node:dragstart", function (e) {
  graph.layout();
  refreshDragedNodePosition(e);
});
graph.on("node:drag", function (e) {
  refreshDragedNodePosition(e);
});
graph.on("node:dragend", function (e) {
  e.item.get("model").fx = null;
  e.item.get("model").fy = null;
});
graph.render();
graph.fitView();