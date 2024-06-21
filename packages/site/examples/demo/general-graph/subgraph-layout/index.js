import F6 from "@antv/f6";
import data from "./data";
import Force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
const { nodes } = data;
nodes.forEach(function (node, i) {
  if (i <= 16 && i !== 12) {
    if (!node.style) {
      node.style = {
        fill: "#F6C3B7",
        stroke: "#E8684A",
      };
    } else {
      node.style.fill = "lightsteelblue";
    }
  }
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 40,
  modes: {
    default: ["drag-node"],
  },
  defaultNode: {
    size: 20,
    style: {
      fill: "#C6E5FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
  },
});
graph.data(data);
graph.render();
graph.fitView();
setTimeout(() => {
  const { edges } = data;
  const newNodes = [];
  const newEdges = [];
  const newNodeMap = new Map();
  nodes[0].fx = nodes[0].x;
  nodes[0].fy = nodes[0].y;
  nodes.forEach(function (node, i) {
    if (i <= 16 && i !== 12) {
      newNodes.push(node);
      newNodeMap.set(node.id, i);
    }
  });
  edges.forEach(function (edge) {
    const sourceId = edge.source;
    const targetId = edge.target;

    if (
      newNodeMap.get(sourceId) !== undefined &&
      newNodeMap.get(targetId) !== undefined
    ) {
      newEdges.push(edge);
    }
  });
  const subForceLayout = new Force({
    center: [nodes[0].x, nodes[0].y],
    linkDistance: 70,
    preventOverlap: true,
    nodeSize: 20,
    tick: () => {
      graph.refreshPositions();
    },
  });
  subForceLayout.init({
    nodes: newNodes,
    edges: newEdges,
  });
  subForceLayout.execute();
}, 1000);
