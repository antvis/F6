import F6 from "@antv/f6";
import { TimeBar } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
const data = {
  nodes: [],
  edges: [],
};

for (let i = 0; i < 50; i++) {
  const id = `node-${i}`;
  data.nodes.push({
    id,
    date: Number(`2020${i}`),
    value: Math.round(Math.random() * 300),
  });
  data.edges.push({
    source: `node-${Math.round(Math.random() * 90)}`,
    target: `node-${Math.round(Math.random() * 90)}`,
  });
}

const timeBarData = [];

for (let i = 0; i < 50; i++) {
  timeBarData.push({
    date: Number(`2020${i}`),
    value: Math.round(Math.random() * 300),
  });
}

const timebar = new TimeBar({
  x: 0,
  y: 0,
  width,
  padding: 0,
  type: "simple",
  data: timeBarData,
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  localRefresh: false,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  animate: false,
  defaultNode: {
    size: 30,
  },
  plugins: [timebar],
});
graph.get("canvas").set("localRefresh", false);
graph.data(data);
graph.render();
graph.fitView();
