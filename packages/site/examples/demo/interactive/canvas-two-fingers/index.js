import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerBehavior("double-finger-drag-canvas", {
  getEvents: function getEvents() {
    return {
      "canvas:drag": "onWheel",
    };
  },
  onWheel: function onWheel(ev) {
    if (ev.ctrlKey) {
      const canvas = graph.get("canvas");
      const point = canvas.getPointByClient(ev.clientX, ev.clientY);
      let ratio = graph.getZoom();

      if (ev.wheelDelta > 0) {
        ratio += ratio * 0.05;
      } else {
        ratio -= ratio * 0.05;
      }

      graph.zoomTo(ratio, {
        x: point.x,
        y: point.y,
      });
    } else {
      const x = ev.deltaX || ev.movementX;
      const y = ev.deltaY || ev.movementY;
      graph.translate(-x, -y);
    }

    ev.preventDefault();
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  modes: {
    default: ["double-finger-drag-canvas"],
  },
  layout: {
    type: "force",
  },
});
graph.get("canvas").set("localRefresh", false);
graph.data(data);
graph.render();
graph.fitView();
