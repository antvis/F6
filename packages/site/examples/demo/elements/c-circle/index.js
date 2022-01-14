import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;

const collapseIcon = (x, y, r) => {
  return [["M", x - r, y], ["a", r, r, 0, 1, 0, r * 2, 0], ["a", r, r, 0, 1, 0, -r * 2, 0], ["M", x - r + 4, y], ["L", x - r + 2 * r - 4, y]];
};

const expandIcon = (x, y, r) => {
  return [["M", x - r, y], ["a", r, r, 0, 1, 0, r * 2, 0], ["a", r, r, 0, 1, 0, -r * 2, 0], ["M", x - r + 4, y], ["L", x - r + 2 * r - 4, y], ["M", x - r + r, y - r + 4], ["L", x, y + r - 4]];
};

F6.registerCombo("cCircle", {
  drawShape: function draw(cfg, group) {
    const self = this;
    const style = self.getShapeStyle(cfg);
    const circle = group.addShape("circle", {
      attrs: { ...style,
        x: 0,
        y: 0,
        r: style.r
      },
      draggable: true,
      name: "combo-keyShape"
    });
    group.addShape("marker", {
      attrs: { ...style,
        fill: "#fff",
        opacity: 1,
        x: 0,
        y: style.r,
        r: 10,
        symbol: collapseIcon
      },
      draggable: true,
      name: "combo-marker-shape"
    });
    return circle;
  },
  afterUpdate: function afterUpdate(cfg, combo) {
    const self = this;
    const style = self.getShapeStyle(cfg);
    const group = combo.get("group");
    const marker = group.find(ele => ele.get("name") === "combo-marker-shape");
    marker.attr({
      x: 0,
      y: style.r,
      symbol: cfg.collapsed ? expandIcon : collapseIcon
    });
  }
}, "circle");
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  groupByTypes: false,
  defaultCombo: {
    type: "cCircle",
    labelCfg: {
      refY: 2
    }
  },
  modes: {
    default: ["drag-combo", "drag-node", "drag-canvas"]
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("combo:tap", e => {
  if (e.target.get("name") === "combo-marker-shape") {
    graph.collapseExpandCombo(e.item);
    if (graph.get("layout")) graph.layout();else graph.refreshPositions();
  }
});