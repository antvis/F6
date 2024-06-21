import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;

const collapseIcon = (x, y, r) => {
  return [
    ["M", x - r, y],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x - r + 4, y],
    ["L", x - r + 2 * r - 4, y],
  ];
};

const expandIcon = (x, y, r) => {
  return [
    ["M", x - r, y],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x - r + 4, y],
    ["L", x - r + 2 * r - 4, y],
    ["M", x - r + r, y - r + 4],
    ["L", x, y + r - 4],
  ];
};

F6.registerCombo(
  "cRect",
  {
    drawShape: function drawShape(cfg, group) {
      const self = this;
      cfg.padding = cfg.padding || [50, 20, 20, 20];
      const style = self.getShapeStyle(cfg);
      const rect = group.addShape("rect", {
        attrs: {
          ...style,
          x: -style.width / 2 - (cfg.padding[3] - cfg.padding[1]) / 2,
          y: -style.height / 2 - (cfg.padding[0] - cfg.padding[2]) / 2,
          width: style.width,
          height: style.height,
        },
        draggable: true,
        name: "combo-keyShape",
      });
      group.addShape("marker", {
        attrs: {
          ...style,
          fill: "#fff",
          opacity: 1,
          x: cfg.style.width / 2 + cfg.padding[1],
          y: (cfg.padding[2] - cfg.padding[0]) / 2,
          r: 10,
          symbol: collapseIcon,
        },
        draggable: true,
        name: "combo-marker-shape",
      });
      return rect;
    },
    afterUpdate: function afterUpdate(cfg, combo) {
      const group = combo.get("group");
      const marker = group.find(
        (ele) => ele.get("name") === "combo-marker-shape",
      );
      marker.attr({
        x: cfg.style.width / 2 + cfg.padding[1],
        y: (cfg.padding[2] - cfg.padding[0]) / 2,
        symbol: cfg.collapsed ? expandIcon : collapseIcon,
      });
    },
  },
  "rect",
);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  groupByTypes: false,
  defaultCombo: {
    type: "cRect",
  },
  modes: {
    default: ["drag-combo", "drag-node", "drag-canvas"],
  },
});
graph.on("combo:tap", (e) => {
  if (e.target.get("name") === "combo-marker-shape") {
    graph.collapseExpandCombo(e.item);
    if (graph.get("layout")) graph.layout();
    else graph.refreshPositions();
  }
});
graph.data(data);
graph.render();
graph.fitView();
