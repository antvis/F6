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
  linkCenter: true,
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
    type: "cubic-vertical"
  },
  layout: {
    type: "dendrogram",
    direction: "TB",
    nodeSep: 40,
    rankSep: 100
  }
});
graph.node(function (node) {
  let position = "right";
  let rotate = 0;

  if (!node.children) {
    position = "bottom";
    rotate = Math.PI / 2;
  }

  return {
    label: node.id,
    labelCfg: {
      position,
      offset: 5,
      style: {
        rotate,
        textAlign: "start"
      }
    }
  };
});
graph.data(data_);
graph.render();
graph.fitView();