import F6 from "@antv/f6";
import data from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const tooltip = new F6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  fixToNode: [1, 0.5],
  itemTypes: ["node", "edge"],
  getContent: (e) => {
    const outDiv = document.createElement("div");
    outDiv.style.width = "fit-content";
    outDiv.style.height = "fit-content";
    const model = e.item.getModel();

    if (e.item.getType() === "node") {
      outDiv.innerHTML = `${model.name}`;
    } else {
      const source = e.item.getSource();
      const target = e.item.getTarget();
      outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${
        target.getModel().name
      }`;
    }

    return outDiv;
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 50,
  plugins: [tooltip],
  layout: {
    type: "force",
    edgeStrength: 0.7,
  },
  modes: {
    default: ["drag-canvas"],
  },
  defaultNode: {
    size: [10, 10],
    style: {
      lineWidth: 2,
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    size: 1,
    style: {
      stroke: "#e2e2e2",
      lineAppendWidth: 2,
    },
  },
  nodeStateStyles: {
    highlight: {
      opacity: 1,
    },
    dark: {
      opacity: 0.2,
    },
  },
  edgeStateStyles: {
    highlight: {
      stroke: "#999",
    },
  },
});

function clearAllStats() {
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node);
  });
  graph.getEdges().forEach(function (edge) {
    graph.clearItemStates(edge);
  });
  graph.paint();
  graph.setAutoPaint(true);
}

graph.on("node:mouseenter", function (e) {
  const { item } = e;
  graph.setAutoPaint(false);
  graph.getNodes().forEach(function (node) {
    graph.clearItemStates(node);
    graph.setItemState(node, "dark", true);
  });
  graph.setItemState(item, "dark", false);
  graph.setItemState(item, "highlight", true);
  graph.getEdges().forEach(function (edge) {
    if (edge.getSource() === item) {
      graph.setItemState(edge.getTarget(), "dark", false);
      graph.setItemState(edge.getTarget(), "highlight", true);
      graph.setItemState(edge, "highlight", true);
      edge.toFront();
    } else if (edge.getTarget() === item) {
      graph.setItemState(edge.getSource(), "dark", false);
      graph.setItemState(edge.getSource(), "highlight", true);
      graph.setItemState(edge, "highlight", true);
      edge.toFront();
    } else {
      graph.setItemState(edge, "highlight", false);
    }
  });
  graph.paint();
  graph.setAutoPaint(true);
});
graph.on("node:mouseleave", clearAllStats);
graph.on("canvas:tap", clearAllStats);
graph.data({
  nodes: data.nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  }),
});
graph.render();
graph.fitView();
