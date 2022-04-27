import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data_ from "./data";
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
    default: [{
      type: "collapse-expand",
      onChange: function onChange(item, collapsed) {
        const data = item.get("model");
        data.collapsed = collapsed;
        return true;
      }
    }, "drag-canvas", "zoom-canvas"]
  },
  defaultNode: {
    size: 26,
    anchorPoints: [[0, 0.5], [1, 0.5]]
  },
  defaultEdge: {
    type: "cubic-horizontal"
  },
  layout: {
    type: "mindmap",
    direction: "H",
    getHeight: () => {
      return 16;
    },
    getWidth: () => {
      return 16;
    },
    getVGap: () => {
      return 10;
    },
    getHGap: () => {
      return 50;
    },
    getSide: d => {
      if (d.id === "Classification") {
        return "left";
      }

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
    pos = "right";
  } else if (node.x > centerX) pos = "right";else pos = "left";

  return {
    label: node.id,
    labelCfg: {
      position: pos,
      offset: 5
    }
  };
});
graph.data(data_);
graph.render();
graph.fitView();