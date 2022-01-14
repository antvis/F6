import F6 from "@antv/f6";
import { data, legendData } from "./data";
import { Legend } from "@antv/f6-plugin";
import radialLayout from "@antv/f6/dist/extends/layout/radialLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("radial", radialLayout);
const legend = new Legend({
  width: 300,
  height: 80,
  offsetY: 0,
  offsetX: 0,
  data: legendData,
  align: "center",
  layout: "horizontal",
  position: "top-left",
  padding: 10,
  margin: 0,
  containerStyle: {
    fill: "#ccc",
    lineWidth: 1
  }
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: false,
  plugins: [legend],
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  layout: {
    type: "radial",
    focusNode: "li",
    linkDistance: 200,
    unitRadius: 200
  },
  defaultEdge: {
    style: {
      endArrow: true
    },
    labelCfg: {
      autoRotate: true,
      style: {
        stroke: "#fff",
        lineWidth: 5
      }
    }
  },
  defaultNode: {
    type: "donut",
    style: {
      lineWidth: 0
    },
    labelCfg: {
      position: "bottom"
    }
  }
});
graph.data(data);
graph.render();
graph.get("canvas").set("localRefresh", false);
graph.on("node:tap", evt => {
  const {
    item
  } = evt;
  graph.setItemState(item, "selected", true);
});
graph.on("canvas:tap", () => {
  graph.getNodes().forEach(node => {
    graph.clearItemStates(node);
  });
});