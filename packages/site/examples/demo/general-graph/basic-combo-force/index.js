import F6 from "@antv/f6";
import data from "./data";
import comboforce from "@antv/f6/dist/extends/layout/comboForceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("comboforce", comboforce);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 50,
  minZoom: 0.00000001,
  layout: {
    type: "comboforce",
    nodeSpacing: d => {
      if (d.id == "0") return 100;
      return 10;
    }
  },
  defaultNode: {
    size: 15,
    color: "#5B8FF9",
    style: {
      lineWidth: 2,
      fill: "#C6E5FF"
    }
  },
  defaultEdge: {
    size: 2,
    color: "#e2e2e2"
  },
  modes: {
    default: ["drag-combo", "drag-node", "drag-canvas", "zoom-canvas"]
  }
});
graph.data(data);
graph.render();
graph.fitView();