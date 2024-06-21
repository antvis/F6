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
  modes: {
    default: ["collapse-expand", "drag-canvas"],
  },
  fitView: true,
  layout: {
    type: "compactBox",
    direction: "LR",
    defalutPosition: [],
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
      return 50;
    },
    getHGap: function getHGap() {
      return 100;
    },
  },
});
graph.node(function (node) {
  return {
    size: 16,
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
    label: node.id,
    labelCfg: {
      position: node.children && node.children.length > 0 ? "left" : "right",
    },
  };
});
let i = 0;
graph.edge(function () {
  i++;
  return {
    type: "cubic-horizontal",
    color: "#A3B1BF",
    label: i,
  };
});
graph.data(data);
graph.render();
graph.fitView();
let count = 0;
graph.on("node:tap", function (evt) {
  const { item } = evt;
  const nodeId = item.get("id");
  const model = item.getModel();
  const { children } = model;

  if (!children || children.length === 0) {
    const childData = [
      {
        id: `child-data-${count}`,
        type: "rect",
        children: [
          {
            id: `x-${count}`,
          },
          {
            id: `y-${count}`,
          },
        ],
      },
      {
        id: `child-data1-${count}`,
        children: [
          {
            id: `x1-${count}`,
          },
          {
            id: `y1-${count}`,
          },
        ],
      },
    ];
    const parentData = graph.findDataById(nodeId);

    if (!parentData.children) {
      parentData.children = [];
    }

    parentData.children = childData;
    graph.changeData();
    count++;
  }
});
