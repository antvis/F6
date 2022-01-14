import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const lineDash = [4, 2, 1, 2];
F6.registerEdge("line-dash", {
  afterDraw(cfg, group) {
    const shape = group.get("children")[0];
    let index = 0;
    shape.animate(() => {
      index++;

      if (index > 9) {
        index = 0;
      }

      const res = {
        lineDash,
        lineDashOffset: -index
      };
      return res;
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
    type: "line-dash",
    style: {
      lineWidth: 2,
      stroke: "#bae7ff"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();