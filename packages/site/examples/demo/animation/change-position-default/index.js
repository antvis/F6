import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  animate: true
});
graph.data(data);
graph.render();
graph.fitView();
setInterval(() => {
  data.nodes.forEach(node => {
    node.x += Math.random() * 50 - 25;
    node.y += Math.random() * 50 - 25;
  });
  graph.changeData(data);
}, 600);