import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data.js";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
F6.registerBehavior("collapse-slibing", {
  getEvents() {
    return {
      "node:click": "onClick",
    };
  },

  onClick(evt) {
    const { item } = evt;
    const model = item.getModel();
    const { cluster } = model;
    const parentData = item.get("parent").getModel();
    const me = this;

    if (model.collapsedSiblings) {
      graph.removeChild(model.id);
      setTimeout(() => {
        const { children } = parentData;

        for (let i = model.collapsedSiblings.length - 1; i >= 0; i--) {
          const add = model.collapsedSiblings[i];
          children.splice(add.idx, 0, add);
        }

        delete model.collapsedSiblings;
        me.graph.updateChildren(children, parentData.id);
      }, 550);
      return;
    }

    const siblingData = parentData.children;
    if (siblingData.length <= 1) return;
    let count = 0;
    const aggregateNode = {
      id: `aggregate-node-${model.id}`,
      children: [],
      cluster,
      collapsedSiblings: [],
    };
    let modelIdx = siblingData.length - 1;

    for (let i = siblingData.length - 1; i >= 0; i--) {
      const sibling = siblingData[i];

      if (sibling.id === model.id) {
        const remove = siblingData[i];
        remove.idx = i;
        aggregateNode.collapsedSiblings.push(remove);
        modelIdx = Math.min(i, modelIdx);
        aggregateNode.children = (siblingData[i].children || []).concat(
          aggregateNode.children,
        );
      } else if (sibling.cluster === cluster && sibling.id !== model.id) {
        count++;
        aggregateNode.children = (siblingData[i].children || []).concat(
          aggregateNode.children,
        );
        const remove = siblingData.splice(i, 1)[0];
        remove.idx = i;
        aggregateNode.collapsedSiblings.push(remove);
        modelIdx = Math.min(i, modelIdx);
      }
    }

    if (!count) return;
    aggregateNode.label = count + 1;
    aggregateNode.size = 16 + (count + 1) * 4;
    graph.removeChild(model.id);
    siblingData.splice(modelIdx, 0, aggregateNode);
    setTimeout(() => {
      me.graph.updateChildren(siblingData, parentData.id);
    }, 550);
  },
});
const graph = new F6.TreeGraph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["collapse-slibing", "drag-canvas"],
  },
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
      return 10;
    },
    getHGap: function getHGap() {
      return 50;
    },
  },
  defaultEdge: {
    type: "cubic-horizontal",
    color: "#A3B1BF",
  },
});
graph.node(function (node) {
  const colorSet = colorSets[+node.cluster.replace("c", "")];
  return {
    size: node.size || 16,
    style: {
      fill: colorSet.mainFill || "#DEE9FF",
      stroke: colorSet.mainStroke || "#5B8FF9",
    },
  };
});
graph.data(data);
graph.render();
graph.fitView();
