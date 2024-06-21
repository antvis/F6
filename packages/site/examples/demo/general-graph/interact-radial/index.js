import F6 from "@antv/f6";
import { data, data2_m } from "./data";
import radial from "@antv/f6/dist/extends/layout/radialLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("radial", radial);
const focusNode = data.nodes[22];
focusNode.style = {
  stroke: "#00419F",
  fill: "#729FFC",
  lineWidth: 2,
};
data.nodes[2].style = {
  stroke: "#00419F",
  fill: "#729FFC",
  lineWidth: 2,
};
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "radial",
    maxIteration: 200,
    focusNode,
    unitRadius: this.mainUnitRadius,
    linkDistance: 100,
    preventOverlap: true,
    nodeSize: 20,
  },
  animate: true,
  modes: {
    default: ["drag-node", "click-select", "click-add-node", "drag-canvas"],
  },
  defaultNode: {
    size: 20,
  },
});
graph.on("node:tap", (ev) => {
  const itemModel = ev.item.getModel();
  const nodes = graph.getNodes();
  const edges = graph.getEdges();
  let newData;
  if (itemModel.id === "2") newData = data2_m;
  else return;
  const newNodeModels = newData.nodes;
  const newEdgeModels = [];
  newData.edges.forEach(function (e) {
    let exist = false;
    newEdgeModels.forEach(function (ne) {
      if (ne.source === e.source && ne.target === e.target) exist = true;
    });

    if (!exist) {
      newEdgeModels.push(e);
    }
  });
  const allNodeModels = [];
  const allEdgeModels = [];
  const nodeMap = new Map();
  nodes.forEach((n) => {
    const nModel = n.getModel();
    nodeMap.set(nModel.id, n);
  });
  newNodeModels.forEach((nodeModel) => {
    if (nodeMap.get(nodeModel.id) === undefined) {
      nodeModel.x = itemModel.x;
      nodeModel.y = itemModel.y;
      graph.addItem("node", nodeModel);
    }
  });
  const edgeMap = new Map();
  edges.forEach(function (e, i) {
    const eModel = e.getModel();
    edgeMap.set(`${eModel.source},${eModel.target}`, i);
  });
  const oldEdgeNum = edges.length;
  newEdgeModels.forEach(function (em, i) {
    const exist = edgeMap.get(`${em.source},${em.target}`);

    if (exist === undefined) {
      graph.addItem("edge", em);
      edgeMap.set(`${em.source},${em.target}`, oldEdgeNum + i);
    }
  });
  edges.forEach((e) => {
    allEdgeModels.push(e.getModel());
  });
  nodes.forEach((n) => {
    allNodeModels.push(n.getModel());
  });
  const maxDegree = 4;
  const oMaxDegree = 3;
  const unitRadius = 40;
  const vx = itemModel.x - focusNode.x;
  const vy = itemModel.y - focusNode.y;
  const vlength = Math.sqrt(vx * vx + vy * vy);
  const ideallength = unitRadius * maxDegree + this.mainUnitRadius * oMaxDegree;
  itemModel.x = (ideallength * vx) / vlength + focusNode.x;
  itemModel.y = (ideallength * vy) / vlength + focusNode.y;
  const Radial = F6.layout.radial;
  const subRadialLayout = new Radial({
    center: [itemModel.x, itemModel.y],
    maxIteration: 200,
    focusNode: "2",
    unitRadius,
    linkDistance: 180,
    preventOverlap: true,
  });
  subRadialLayout.init({
    nodes: newNodeModels,
    edges: newEdgeModels,
  });
  subRadialLayout.execute();
  graph.positionsAnimate();
  graph.data({
    nodes: allNodeModels,
    edges: allEdgeModels,
  });
});
graph.data({
  nodes: data.nodes,
  edges: data.edges.map((edge, i) => {
    edge.id = `edge${i}`;
    return Object.assign({}, edge);
  }),
});
graph.render();
graph.fitView();
