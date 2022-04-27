import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data.js";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
F6.registerNode("crect", {
  draw: (cfg, group) => {
    const width = cfg.id.length * 10;
    const rect = group.addShape("rect", {
      attrs: {
        x: 0,
        y: -10,
        ...cfg.style,
        width,
        height: 20,
        lineWidth: 0,
        opacity: 0
      },
      name: "rect-shape",
      draggable: true
    });
    const label = group.addShape("text", {
      attrs: {
        text: cfg.id,
        fill: "#ccc",
        fontSize,
        x: 0,
        y: 0
      },
      name: "label-shape",
      draggable: true
    });
    const bboxWidth = label.getBBox().width + 20;
    rect.attr({
      width: bboxWidth
    });
    group.addShape("path", {
      attrs: {
        lineWidth: 1,
        fill: "#ccc",
        stroke: "#ccc",
        path: [["M", 0, 0], ["L", bboxWidth, 0]]
      },
      name: "path-shape",
      draggable: true
    });
    return rect;
  },
  getAnchorPoints: () => {
    return [[0, 0.5], [1, 0.5]];
  }
});
const graph = new F6.TreeGraph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["collapse-expand", "drag-canvas", "zoom-canvas"]
  },
  defaultNode: {
    type: "crect"
  },
  defaultEdge: {
    type: "cubic-horizontal",
    style: {
      stroke: "#A3B1BF"
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
    getVGap: function getVGap() {
      return 10;
    },
    getHGap: function getHGap() {
      return 100;
    },
    getWidth: function getWidth(d) {
      return F6.Util.getTextSize(d.id, fontSize)[0] + 20;
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();