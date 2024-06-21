import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data";
F6.registerGraph("TreeGraph", TreeGraph);
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  modes: {
    default: [
      {
        type: "collapse-expand",
        onChange: function onChange(item, collapsed) {
          const model = item.getModel();
          model.collapsed = collapsed;
          return true;
        },
      },
      "drag-canvas",
      "zoom-canvas",
    ],
  },
  defaultNode: {
    size: 26,
  },
  layout: {
    type: "dendrogram",
    direction: "LR",
    nodeSep: 20,
    rankSep: 100,
    radial: true,
  },
});
graph.node(function (node) {
  return {
    label: node.id,
  };
});
graph.data(data);
graph.render();
graph.fitView();
