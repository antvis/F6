import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("bigraphLayout", {
  execute() {
    const self = this;
    const center = self.center || [0, 0];
    const biSep = self.biSep || 100;
    const nodeSep = self.nodeSep || 20;
    const nodeSize = self.nodeSize || 20;
    const direction = self.direction || "horizontal";
    let part1Pos = 0;
    let part2Pos = 0;

    if (direction === "horizontal") {
      part1Pos = center[0] - biSep / 2;
      part2Pos = center[0] + biSep / 2;
    }

    const { nodes, edges } = self;
    const part1Nodes = [];
    const part2Nodes = [];
    const part1NodeMap = new Map();
    const part2NodeMap = new Map();
    nodes.forEach(function (node, i) {
      if (node.cluster === "part1") {
        part1Nodes.push(node);
        part1NodeMap.set(node.id, i);
      } else {
        part2Nodes.push(node);
        part2NodeMap.set(node.id, i);
      }
    });
    part1Nodes.forEach(function (p1n) {
      let index = 0;
      let adjCount = 0;
      edges.forEach(function (edge) {
        const sourceId = edge.source;
        const targetId = edge.target;

        if (sourceId === p1n.id) {
          index += part2NodeMap.get(targetId);
          adjCount += 1;
        } else if (targetId === p1n.id) {
          index += part2NodeMap.get(sourceId);
          adjCount += 1;
        }
      });
      index /= adjCount;
      p1n.index = index;
    });
    part1Nodes.sort(function (a, b) {
      return a.index - b.index;
    });
    part2Nodes.forEach(function (p2n) {
      let index = 0;
      let adjCount = 0;
      edges.forEach(function (edge) {
        const sourceId = edge.source;
        const targetId = edge.target;

        if (sourceId === p2n.id) {
          index += part1NodeMap.get(targetId);
          adjCount += 1;
        } else if (targetId === p2n.id) {
          index += part1NodeMap.get(sourceId);
          adjCount += 1;
        }
      });
      index /= adjCount;
      p2n.index = index;
    });
    part2Nodes.sort(function (a, b) {
      return a.index - b.index;
    });
    const hLength =
      part1Nodes.length > part2Nodes.length
        ? part1Nodes.length
        : part2Nodes.length;
    const height = hLength * (nodeSep + nodeSize);
    let begin = center[1] - height / 2;

    if (direction === "vertical") {
      begin = center[0] - height / 2;
    }

    part1Nodes.forEach(function (p1n, i) {
      if (direction === "horizontal") {
        p1n.x = part1Pos;
        p1n.y = begin + i * (nodeSep + nodeSize);
      } else {
        p1n.x = begin + i * (nodeSep + nodeSize);
        p1n.y = part1Pos;
      }
    });
    part2Nodes.forEach(function (p2n, i) {
      if (direction === "horizontal") {
        p2n.x = part2Pos;
        p2n.y = begin + i * (nodeSep + nodeSize);
      } else {
        p2n.x = begin + i * (nodeSep + nodeSize);
        p2n.y = part2Pos;
      }
    });
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "bigraphLayout",
    biSep: 300,
    nodeSep: 20,
    nodeSize: 20,
  },
  animate: true,
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
  modes: {
    default: ["drag-canvas"],
  },
});
graph.data(data);
graph.render();
graph.fitView();
