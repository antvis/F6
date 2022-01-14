import F6 from "@antv/f6";
import data from "./data";
import dagreLayout from "@antv/f6/dist/extends/layout/dagreLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("dagre", dagreLayout);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 30,
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "dagre",
    nodeSize: [40, 20],
    nodesep: 1,
    ranksep: 1
  },
  animate: true,
  defaultNode: {
    size: [40, 20],
    type: "rect",
    style: {
      lineWidth: 2,
      stroke: "#5B8FF9",
      fill: "#C6E5FF"
    }
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2"
      }
    }
  }
});
const me = this;
graph.data(data);
graph.render();
graph.fitView();
layoutConfigTranslation();

function layoutConfigTranslation() {
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 10, node seperation in same level: 1, layout direction: Top->Bottom, alignment of nodes: DL"
    });
    me.graph.updateLayout({
      ranksep: 10
    });
  }, 1000);
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: DL"
    });
    me.graph.updateLayout({
      nodesep: 5
    });
  }, 2500);
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UL"
    });
    me.graph.updateLayout({
      align: "UL"
    });
  }, 4000);
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UR"
    });
    me.graph.updateLayout({
      align: "UR"
    });
  }, 5500);
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL"
    });
    me.graph.updateLayout({
      rankdir: "LR",
      align: "DL"
    });
  }, 7000);
  setTimeout(function () {
    me.setData({
      description: "Dagre layout, rank seperation: 30, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL"
    });
    me.graph.updateLayout({
      ranksep: 30
    });
  }, 8500);
}