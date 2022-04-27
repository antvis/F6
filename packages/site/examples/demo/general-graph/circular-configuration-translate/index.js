import F6 from "@antv/f6";
import data from "./data";
import circular from "@antv/f6/dist/extends/layout/circularLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("circular", circular);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "circular"
  },
  animate: true,
  defaultNode: {
    size: 20
  },
  defaultEdge: {
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
setInterval(function () {
  layoutConfigTranslation();
}, 11500);

function layoutConfigTranslation() {
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 200, divisions = 5, ordering: degree"
    });
    me.graph.updateLayout({
      radius: 200,
      startAngle: Math.PI / 4,
      endAngle: Math.PI,
      divisions: 5,
      ordering: "degree"
    });
  }, 1000);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 200, divisions = 3, ordering: degree"
    });
    me.graph.updateLayout({
      startAngle: Math.PI / 4,
      endAngle: Math.PI,
      divisions: 3
    });
  }, 2500);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 200, divisions = 8, ordering: degree"
    });
    me.graph.updateLayout({
      radius: 200,
      startAngle: 0,
      endAngle: Math.PI / 2,
      divisions: 8
    });
  }, 4000);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 10～300(spiral), endAngle: PI, divisions = 1, ordering: degree"
    });
    me.graph.updateLayout({
      radius: null,
      startRadius: 10,
      endRadius: 300,
      divisions: 1,
      startAngle: 0,
      endAngle: Math.PI
    });
  }, 5500);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 10～300(spiral),endAngle: 2 * PI, divisions= 1, ordering: degree"
    });
    me.graph.updateLayout({
      endAngle: 2 * Math.PI
    });
  }, 7000);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 200, ordering: degree"
    });
    me.graph.updateLayout({
      radius: 200
    });
  }, 8500);
  setTimeout(function () {
    me.setData({
      discription: "Circular layout, radius = 200, ordering: topology"
    });
    me.graph.updateLayout({
      radius: 200,
      ordering: "topology"
    });
  }, 10000);
}