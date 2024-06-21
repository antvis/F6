import F6 from "@antv/f6";
const width = 375;
const height = 600;
const pixelRatio = 2;
const r = 50;
const radius = Math.PI;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  animate: true,
  animateCfg: {
    duration: 1000,

    onFrame(node, ratio, toAttrs, fromAttrs) {
      const current = radius * ratio;
      let { x } = fromAttrs;
      let { y } = fromAttrs;

      if (fromAttrs.x > toAttrs.x) {
        x = x - r + r * Math.cos(current);
        y += r * Math.sin(current);
      } else {
        x = x + r - r * Math.cos(current);
        y -= r * Math.sin(current);
      }

      return {
        x,
        y,
      };
    },
  },
});
const node1 = graph.addItem("node", {
  id: "node1",
  x: 100,
  y: 100,
  type: "circle",
  style: {
    fill: "#5B8FF9",
    lineWidth: 0,
  },
});
const node2 = graph.addItem("node", {
  id: "node2",
  x: 200,
  y: 100,
  type: "circle",
  style: {
    fill: "#5AD8A6",
    lineWidth: 0,
  },
});
let count = 0;
setInterval(() => {
  if (count % 2 === 0) {
    node1.get("model").x = 200;
    node2.get("model").x = 100;
  } else {
    node1.get("model").x = 100;
    node2.get("model").x = 200;
  }

  count++;
  graph.refresh();
}, 1000);
