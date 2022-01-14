import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data_ from "./data.js";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
const graph = new F6.TreeGraph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "zoom-canvas", {
      type: "drag-node",
      enableDelegate: true
    }]
  },
  defaultNode: {
    size: [26, 26],
    anchorPoints: [[0, 0.5], [1, 0.5]],
    style: {
      fill: "#C6E5FF",
      stroke: "#5B8FF9"
    }
  },
  defaultEdge: {
    type: "cubic-horizontal",
    style: {
      stroke: "#A3B1BF"
    }
  },
  nodeStateStyles: {
    closest: {
      fill: "#f00"
    }
  },
  layout: {
    type: "compactBox",
    direction: "LR",
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth() {
      return 16;
    },
    getVGap: function getVGap() {
      return 10;
    },
    getHGap: function getHGap() {
      return 100;
    }
  }
});
graph.node(function (node) {
  return {
    label: node.id,
    labelCfg: {
      offset: 10,
      position: node.children && node.children.length > 0 ? "left" : "right"
    }
  };
});
let minDisNode;
graph.on("node:dragstart", () => {
  minDisNode = undefined;
});
graph.on("node:drag", e => {
  minDisNode = undefined;
  const {
    item
  } = e;
  const model = item.getModel();
  const nodes = graph.getNodes();
  let minDis = Infinity;
  nodes.forEach(inode => {
    graph.setItemState(inode, "closest", false);
    const node = inode.getModel();
    if (node.id === model.id) return;
    const dis = (node.x - e.x) * (node.x - e.x) + (node.y - e.y) * (node.y - e.y);

    if (dis < minDis) {
      minDis = dis;
      minDisNode = inode;
    }
  });
  console.log("minDis", minDis, minDisNode);
  if (minDis < 2000) graph.setItemState(minDisNode, "closest", true);else minDisNode = undefined;
});
graph.on("node:dragend", e => {
  if (!minDisNode) {
    return;
  }

  const {
    item
  } = e;
  const id = item.getID();
  const data = graph.findDataById(id);
  let isDescent = false;
  const minDisNodeId = minDisNode.getID();
  console.log("dragend", minDisNodeId, isDescent, data, id);
  F6.Util.traverseTree(data, d => {
    if (d.id === minDisNodeId) isDescent = true;
  });

  if (isDescent) {
    return;
  }

  graph.removeChild(id);
  const me = this;
  setTimeout(() => {
    const newParentData = graph.findDataById(minDisNodeId);
    let newChildren = newParentData.children;
    if (newChildren) newChildren.push(data);else newChildren = [data];
    me.graph.updateChildren(newChildren, minDisNodeId);
    me.setData({
      discription: "Success."
    });
  }, 600);
});
graph.data(data_);
graph.render();
graph.fitView();