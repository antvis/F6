import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge("line-arrow", {
  options: {
    style: {
      stroke: "#ccc"
    }
  },
  draw: function draw(cfg, group) {
    const {
      startPoint
    } = cfg;
    const {
      endPoint
    } = cfg;
    const stroke = cfg.style && cfg.style.stroke || this.options.style.stroke;
    const startArrow = cfg.style && cfg.style.startArrow || undefined;
    const endArrow = cfg.style && cfg.style.endArrow || undefined;
    const keyShape = group.addShape("path", {
      attrs: {
        path: [["M", startPoint.x, startPoint.y], ["L", endPoint.x / 3 + 2 / 3 * startPoint.x, startPoint.y], ["L", endPoint.x / 3 + 2 / 3 * startPoint.x, endPoint.y], ["L", endPoint.x, endPoint.y]],
        stroke,
        lineWidth: 1,
        startArrow,
        endArrow
      },
      className: "edge-shape",
      name: "edge-shape"
    });
    return keyShape;
  }
});
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
  defaultNode: {
    type: "circle",
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9"
    },
    linkPoints: {
      left: true,
      right: true,
      fill: "#fff",
      stroke: "#1890FF",
      size: 3
    }
  },
  defaultEdge: {
    type: "line-arrow",
    style: {
      stroke: "#F6BD16",
      startArrow: {
        path: "M 0,0 L 12,6 L 9,0 L 12,-6 Z",
        fill: "#F6BD16"
      },
      endArrow: {
        path: "M 0,0 L 12,6 L 9,0 L 12,-6 Z",
        fill: "#F6BD16"
      }
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();