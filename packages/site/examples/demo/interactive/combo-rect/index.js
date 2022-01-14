import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  groupByTypes: false,
  defaultCombo: {
    type: "rect",
    size: [40, 10],
    padding: [30, 20, 10, 20],
    style: {
      lineWidth: 1
    },
    labelCfg: {
      refY: 10,
      refX: 20,
      position: "bottom"
    }
  },
  comboStateStyles: {
    dragenter: {
      lineWidth: 4,
      stroke: "#FE9797"
    }
  },
  modes: {
    default: ["drag-canvas", "drag-node", "drag-combo", "collapse-expand-combo", "click-select"]
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("combo:dragend", () => {
  graph.getCombos().forEach(combo => {
    graph.setItemState(combo, "dragenter", false);
  });
});
graph.on("node:dragend", () => {
  graph.getCombos().forEach(combo => {
    graph.setItemState(combo, "dragenter", false);
  });
});
graph.on("combo:dragenter", e => {
  graph.setItemState(e.item, "dragenter", true);
});
graph.on("combo:dragleave", e => {
  graph.setItemState(e.item, "dragenter", false);
});