import F6 from "@antv/f6";
import getData from "./data";
import fruchtermanLayout from "@antv/f6/dist/extends/layout/fruchtermanLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("fruchterman", fruchtermanLayout);
const data = getData();
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "fruchterman",
    gravity: 1,
    speed: 5
  },
  animate: true,
  defaultNode: {
    size: 20
  },
  defaultEdge: {
    size: 1,
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
      description: "Fructherman layout, gravity = 5"
    });
    me.graph.updateLayout({
      gravity: 5
    });
  }, 1000);
  setTimeout(function () {
    me.setData({
      description: "Fructherman layout, gravity = 10, layout by cluster"
    });
    me.graph.updateLayout({
      gravity: 10,
      clustering: true
    });
  }, 2500);
  setTimeout(function () {
    me.setData({
      description: "Fructherman layout, gravity = 20, layout by cluster"
    });
    me.graph.updateLayout({
      gravity: 20
    });
  }, 4000);
  setTimeout(function () {
    me.setData({
      description: "Fructherman layout, gravity = 50, layout by cluster"
    });
    me.graph.updateLayout({
      gravity: 50
    });
  }, 5500);
  setTimeout(function () {
    me.setData({
      description: "Fructherman layout, gravity = 80, layout by cluster"
    });
    me.graph.updateLayout({
      gravity: 80
    });
  }, 7000);
}