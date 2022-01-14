import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge("line-growth", {
  afterDraw(_, group) {
    const shape = group.get("children")[0];
    const length = shape.getTotalLength();
    console.log(_);
    shape.animate(ratio => {
      const startLen = ratio * length;
      const cfg = {
        lineDash: [startLen, length - startLen]
      };
      return cfg;
    }, {
      repeat: true,
      duration: 2000
    });
  }

}, "cubic");
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  defaultEdge: {
    type: "line-growth",
    style: {
      lineWidth: 2,
      stroke: "#bae7ff"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();