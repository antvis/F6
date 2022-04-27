import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge("extra-shape-edge", {
  afterDraw(cfg, group) {
    const shape = group.get("children")[0];
    const midPoint = shape.getPoint(0.5);
    const rectColor = cfg.midPointColor || "#333";
    group.addShape("rect", {
      attrs: {
        width: 10,
        height: 10,
        fill: rectColor || "#333",
        x: midPoint.x - 5,
        y: midPoint.y - 5
      }
    });
    const quatile = shape.getPoint(0.25);
    const quatileColor = cfg.quatileColor || "#333";
    group.addShape("circle", {
      attrs: {
        r: 5,
        fill: quatileColor || "#333",
        x: quatile.x,
        y: quatile.y
      }
    });
  },

  update: undefined
}, "cubic");
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  modes: {
    default: ["drag-node", "drag-canvas"]
  },
  defaultEdge: {
    type: "extra-shape-edge",
    style: {
      stroke: "#F6BD16"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();