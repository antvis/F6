import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge("circle-running", {
  afterDraw(cfg, group) {
    const shape = group.get("children")[0];
    const startPoint = shape.getPoint(0);
    const circle = group.addShape("circle", {
      attrs: {
        x: startPoint.x,
        y: startPoint.y,
        fill: "#1890ff",
        r: 3
      },
      name: "circle-shape"
    });
    circle.animate(ratio => {
      const tmpPoint = shape.getPoint(ratio);
      return {
        x: tmpPoint.x,
        y: tmpPoint.y
      };
    }, {
      repeat: true,
      duration: 3000
    });
  }

}, "cubic");
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  defaultEdge: {
    type: "circle-running",
    style: {
      lineWidth: 2,
      stroke: "#bae7ff"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();