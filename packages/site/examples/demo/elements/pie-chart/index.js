import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const lightBlue = "#5b8ff9";
const lightOrange = "#5ad8a6";
F6.registerNode("pie-node", {
  draw: (cfg, group) => {
    const radius = cfg.size / 2;
    const inPercentage = cfg.inDegree / cfg.degree;
    const inAngle = inPercentage * Math.PI * 2;
    const inArcEnd = [radius * Math.cos(inAngle), -radius * Math.sin(inAngle)];
    let isInBigArc = 0;
    let isOutBigArc = 1;

    if (inAngle > Math.PI) {
      isInBigArc = 1;
      isOutBigArc = 0;
    }

    const fanIn = group.addShape("path", {
      attrs: {
        path: [
          ["M", radius, 0],
          ["A", radius, radius, 0, isInBigArc, 0, inArcEnd[0], inArcEnd[1]],
          ["L", 0, 0],
          ["Z"],
        ],
        lineWidth: 0,
        fill: lightOrange,
      },
      name: "in-fan-shape",
    });
    group.addShape("path", {
      attrs: {
        path: [
          ["M", inArcEnd[0], inArcEnd[1]],
          ["A", radius, radius, 0, isOutBigArc, 0, radius, 0],
          ["L", 0, 0],
          ["Z"],
        ],
        lineWidth: 0,
        fill: lightBlue,
      },
      name: "out-fan-shape",
    });
    return fanIn;
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: true,
  defaultNode: {
    type: "pie-node",
  },
});
graph.data(data);
graph.render();
graph.fitView();
