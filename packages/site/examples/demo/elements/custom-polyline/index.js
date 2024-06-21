import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge(
  "line-arrow",
  {
    getPath(points) {
      const startPoint = points[0];
      const endPoint = points[1];
      return [
        ["M", startPoint.x, startPoint.y],
        ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
        ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
        ["L", endPoint.x, endPoint.y],
      ];
    },

    getShapeStyle(cfg) {
      const { startPoint } = cfg;
      const { endPoint } = cfg;
      const controlPoints = this.getControlPoints(cfg);
      let points = [startPoint];

      if (controlPoints) {
        points = points.concat(controlPoints);
      }

      points.push(endPoint);
      const path = this.getPath(points);
      const style = Object.assign(
        {},
        F6.Global.defaultEdge.style,
        {
          stroke: "#BBB",
          lineWidth: 1,
          path,
        },
        cfg.style,
      );
      return style;
    },
  },
  "line",
);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  modes: {
    default: ["drag-node", "drag-canvas"],
  },
  defaultNode: {
    type: "circle",
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
    linkPoints: {
      left: true,
      right: true,
      fill: "#fff",
      stroke: "#1890FF",
      size: 3,
    },
  },
  defaultEdge: {
    type: "line-arrow",
    style: {
      stroke: "#F6BD16",
      startArrow: {
        path: "M 0,0 L 12,6 L 9,0 L 12,-6 Z",
        fill: "#F6BD16",
      },
      endArrow: {
        path: "M 0,0 L 12,6 L 9,0 L 12,-6 Z",
        fill: "#F6BD16",
      },
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
