import F6 from "@antv/f6";
import data from "./data";
import radial from "@antv/f6/dist/extends/layout/radialLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("radial", radial);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "radial",
    unitRadius: 50,
  },
  animate: true,
  defaultNode: {
    size: 20,
  },
  defaultEdge: {
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2",
      },
    },
  },
});
const me = this;
graph.data(data);
graph.render();
graph.fitView();
layoutConfigTranslation();
setInterval(function () {
  layoutConfigTranslation();
}, 7000);

function layoutConfigTranslation() {
  setTimeout(function () {
    me.setData({
      description:
        "Radial layout, focusNode =  = 0, unitRadius = 50, preventOverlap: true",
    });
    me.graph.updateLayout({
      preventOverlap: true,
      nodeSize: 20,
    });
  }, 1000);
  setTimeout(function () {
    me.setData({
      description:
        "Radial layout, focusNode =  = 0, unitRadius = 80, preventOverlap: true",
    });
    me.graph.updateLayout({
      unitRadius: 80,
    });
  }, 2500);
  setTimeout(function () {
    me.setData({
      description:
        "Radial layout, focusNode =  = 10, unitRadius = 80, preventOverlap: true",
    });
    me.graph.updateLayout({
      focusNode: "10",
    });
  }, 4000);
  setTimeout(function () {
    me.setData({
      description:
        "Radial layout, focusNode =  = 20, unitRadius = 80, preventOverlap: true",
    });
    me.graph.updateLayout({
      focusNode: "20",
    });
  }, 5500);
  setTimeout(function () {
    me.setData({
      description:
        "Radial layout, focusNode =  = 0, unitRadius = 50, preventOverlap: false",
    });
    me.graph.updateLayout({
      focusNode: "0",
      preventOverlap: false,
      unitRadius: 50,
    });
  }, 5500);
}
