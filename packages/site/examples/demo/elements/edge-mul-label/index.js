import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerEdge("multipleLabelsEdge", {
  options: {
    style: {
      stroke: "#000"
    }
  },
  labelAutoRotate: true,

  draw(cfg, group) {
    const {
      startPoint
    } = cfg;
    const {
      endPoint
    } = cfg;
    const stroke = cfg.style && cfg.style.stroke || this.options.style.stroke;
    const shape = group.addShape("path", {
      attrs: {
        stroke,
        path: [["M", startPoint.x, startPoint.y], ["L", endPoint.x, endPoint.y]]
      },
      name: "path-shape"
    });

    if (cfg.label && cfg.label.length) {
      group.addShape("text", {
        attrs: {
          text: cfg.label[0],
          fill: "#595959",
          textAlign: "start",
          textBaseline: "middle",
          x: startPoint.x,
          y: startPoint.y - 10
        },
        name: "left-text-shape"
      });

      if (cfg.label.length > 1) {
        group.addShape("text", {
          attrs: {
            text: cfg.label[1],
            fill: "#595959",
            textAlign: "end",
            textBaseline: "middle",
            x: endPoint.x,
            y: endPoint.y - 10
          },
          name: "right-text-shape"
        });
      }
    }

    return shape;
  }

});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  modes: {
    default: [{
      type: "drag-node",
      delegate: false
    }, "drag-canvas", {
      type: "zoom-canvas",
      sensitivity: 0.5
    }]
  },
  defaultNode: {
    type: "circle",
    size: [50],
    linkPoints: {
      left: true,
      right: true
    }
  },
  defaultEdge: {
    type: "multipleLabelsEdge",
    style: {
      stroke: "#F6BD16"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();