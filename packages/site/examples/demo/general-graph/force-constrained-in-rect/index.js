import F6 from "@antv/f6";
import getData from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const data = getData();
const {
  nodes
} = data;
const constrainBox = {
  x: 60,
  y: 50,
  width: 500,
  height: 150
};

const onTick = () => {
  let minx = 99999999;
  let maxx = -99999999;
  let miny = 99999999;
  let maxy = -99999999;
  let maxsize = -9999999;
  nodes.forEach(node => {
    if (minx > node.x) {
      minx = node.x;
    }

    if (maxx < node.x) {
      maxx = node.x;
    }

    if (miny > node.y) {
      miny = node.y;
    }

    if (maxy < node.y) {
      maxy = node.y;
    }

    if (maxsize < node.size) {
      maxsize = node.size;
    }
  });
  const scalex = (constrainBox.width - maxsize) / (maxx - minx);
  const scaley = (constrainBox.height - maxsize) / (maxy - miny);
  nodes.forEach(node => {
    node.x = (node.x - minx) * scalex + constrainBox.x;
    node.y = (node.y - miny) * scaley + constrainBox.y;
  });
};

const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "force",
    onTick
  },
  defaultNode: {
    size: 15
  }
});
graph.data({
  nodes: data.nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  })
});
graph.render();
graph.fitView();