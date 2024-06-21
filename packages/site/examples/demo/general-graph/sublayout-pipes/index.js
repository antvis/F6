import F6 from "@antv/f6";
import { data, legendData } from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const legend = new F6.Legend({
  data: legendData,
  align: "center",
  layout: "horizontal",
  position: "bottom-left",
  vertiSep: 12,
  horiSep: 24,
  offsetY: -24,
  padding: [4, 16, 8, 16],
  containerStyle: {
    fill: "#ccc",
    lineWidth: 1,
  },
  title: "Legend",
  titleConfig: {
    position: "left",
    offsetX: 0,
    offsetY: 12,
  },
  filter: {
    enable: true,
    multiple: true,
    trigger: "click",
    graphActiveState: "activeByLegend",
    graphInactiveState: "inactiveByLegend",
    filterFunctions: {
      a: (d) => {
        if (d.cluster === "a") return true;
        return false;
      },
      b: (d) => {
        if (d.cluster === "b") return true;
        return false;
      },
      c: (d) => {
        if (d.cluster === "c") return true;
        return false;
      },
      d: (d) => {
        if (d.cluster === "d") return true;
        return false;
      },
    },
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 40,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  plugins: [legend],
  animate: true,
  nodeStateStyles: {
    activeByLegend: {
      lineWidth: 5,
      strokeOpacity: 0.5,
      stroke: "#f00",
    },
    inactiveByLegend: {
      opacity: 0.5,
    },
  },
  layout: {
    pipes: [
      {
        type: "circular",
        nodesFilter: (node) => +node.id <= 6,
        center: [(width / 5) * 4 - 30, height / 2],
        radius: width / 10,
      },
      {
        type: "circular",
        nodesFilter: (node) => +node.id >= 7 && +node.id <= 10,
        center: [width / 20 + 30, (height / 3) * 2],
        radius: width / 20,
      },
      {
        type: "circular",
        nodesFilter: (node) => +node.id >= 11 && +node.id <= 16,
        center: [width / 20 + 30, height / 3],
        radius: width / 20,
      },
      {
        type: "grid",
        nodesFilter: (node) => +node.id > 16,
        begin: [width / 10 + 50, 20],
        width: (width / 5) * 3 - 100,
        height: height - 40,
      },
    ],
  },
});
graph.data(data);
graph.render();
graph.fitView();
