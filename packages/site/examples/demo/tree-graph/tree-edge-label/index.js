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
  linkCenter: true,
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
    size: 30
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
    size: 16,
    anchorPoints: [[0, 0.5], [1, 0.5]],
    style: {
      fill: "#C6E5FF",
      stroke: "#5B8FF9"
    },
    label: node.id,
    labelCfg: {
      position: node.children && node.children.length > 0 ? "left" : "right",
      offset: 5
    }
  };
});
let i = 0;
graph.edge(function () {
  i++;
  return {
    type: "cubic-horizontal",
    color: "#A3B1BF",
    label: i
  };
});
graph.data(data_);
graph.render();
graph.fitView();