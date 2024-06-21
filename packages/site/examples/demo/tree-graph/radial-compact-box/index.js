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
    default: [
      {
        type: "collapse-expand",
        onChange: function onChange(item, collapsed) {
          const data = item.get("model");
          data.collapsed = collapsed;
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
    type: "compactBox",
    direction: "RL",
    getId: function getId(d) {
      return d.id;
    },
    getHeight: () => {
      return 26;
    },
    getWidth: () => {
      return 26;
    },
    getVGap: () => {
      return 20;
    },
    getHGap: () => {
      return 30;
    },
    radial: true,
  },
});
graph.node(function (node) {
  return {
    label: node.id,
  };
});
graph.data(data_);
graph.render();
graph.fitView();
