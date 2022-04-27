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
  pixelRatio,
  fitView: true,
  modes: {
    default: [{
      type: "collapse-expand",
      onChange: function onChange(item, collapsed) {
        const model = item.getModel();
        model.collapsed = collapsed;
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
    type: "dendrogram",
    direction: "LR",
    nodeSep: 30,
    rankSep: 100,
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
      offset: 5,
      position: node.children && node.children.length > 0 ? "left" : "right"
    }
  };
});
graph.data(data);
graph.render();
graph.fitView();