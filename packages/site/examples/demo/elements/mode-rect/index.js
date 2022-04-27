import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: true,
  defaultNode: {
    type: "modelRect",
    size: [270, 80],
    style: {
      radius: 5,
      stroke: "#69c0ff",
      fill: "#ffffff",
      lineWidth: 1,
      fillOpacity: 1
    },
    labelCfg: {
      style: {
        fill: "#595959",
        fontSize: 14
      },
      offset: 30
    },
    preRect: {
      show: true,
      width: 4,
      fill: "#40a9ff",
      radius: 2
    },
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      size: 10,
      lineWidth: 1,
      fill: "#72CC4A",
      stroke: "#72CC4A"
    },
    logoIcon: {
      show: true,
      x: 0,
      y: 0,
      img: "https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg",
      width: 16,
      height: 16,
      offset: 0
    },
    stateIcon: {
      show: true,
      x: 0,
      y: 0,
      img: "https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg",
      width: 16,
      height: 16,
      offset: -5
    }
  },
  modes: {
    default: ["drag-canvas", "drag-node"]
  },
  nodeStateStyles: {
    hover: {
      lineWidth: 2,
      stroke: "#1890ff",
      fill: "#e6f7ff"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("node:tap", evt => {
  const {
    item
  } = evt;
  graph.setItemState(item, "hover", true);
});