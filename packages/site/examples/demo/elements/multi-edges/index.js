import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.Util.processParallelEdges(data.edges);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  linkCenter: true,
  defaultNode: {
    type: "circle",
    size: [40],
    color: "#5B8FF9",
    style: {
      fill: "#9EC9FF",
      lineWidth: 3
    },
    labelCfg: {
      style: {
        fill: "#000",
        fontSize: 14
      }
    }
  },
  defaultEdge: {
    type: "quadratic",
    labelCfg: {
      autoRotate: true
    }
  },
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  nodeStateStyles: {
    hover: {
      fillOpacity: 0.8
    },
    selected: {
      lineWidth: 5
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();