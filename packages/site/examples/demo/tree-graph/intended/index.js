import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas"]
  },
  defaultNode: {
    size: 26,
    anchorPoints: [[0, 0.5], [1, 0.5]]
  },
  defaultEdge: {
    type: "cubic-horizontal"
  },
  layout: {
    type: "indented",
    direction: "H",
    indent: 80,
    getHeight: () => {
      return 10;
    },
    getWidth: () => {
      return 10;
    },
    getSide: d => {
      if (d.id === "Regression" || d.id === "Classification") return "left";
      return "right";
    }
  }
});
let centerX = 0;
graph.node(function (node) {
  if (node.id === "Modeling Methods") {
    centerX = node.x;
  }

  let pos = "";

  if (node.children && node.children.length > 0) {
    pos = "left";
  } else if (node.x > centerX) pos = "right";else pos = "left";

  return {
    label: node.id,
    labelCfg: {
      position: pos,
      offset: 5
    }
  };
});
graph.data(data);
graph.render();
graph.fitView();