import F6 from "@antv/f6";
import data from "./data";
import mds from "@antv/f6/dist/extends/layout/mdsLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("mds", mds);
const colors = ["rgb(91, 143, 249)", "rgb(90, 216, 166)", "rgb(93, 112, 146)", "rgb(246, 189, 22)", "rgb(232, 104, 74)", "rgb(109, 200, 236)", "rgb(146, 112, 202)", "rgb(255, 157, 77)", "rgb(38, 154, 153)", "rgb(227, 137, 163)"];
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  linkCenter: true,
  fitView: true,
  modes: {
    default: [{
      type: "edge-tooltip",
      formatText: function formatText(model) {
        const text = `source: ${model.sourceName}<br/> target: ${model.targetName}`;
        return text;
      }
    }]
  },
  defaultNode: {
    style: {
      opacity: 0.8,
      lineWidth: 1,
      stroke: "#999"
    }
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
    style: {
      opacity: 0.6,
      lineAppendWidth: 3
    }
  }
});

function scaleNodeProp(nodes, propName, refPropName, dataRange, outRange) {
  const outLength = outRange[1] - outRange[0];
  const dataLength = dataRange[1] - dataRange[0];
  nodes.forEach(function (n) {
    n[propName] = (n[refPropName] - dataRange[0]) * outLength / dataLength + outRange[0];
  });
}

const origin = [width / 2, height / 2];
const radius = width < height ? width / 3 : height / 3;
const {
  edges
} = data;
const {
  nodes
} = data;
const nodeMap = new Map();
const clusterMap = new Map();
let clusterId = 0;
const n = nodes.length;
const angleSep = Math.PI * 2 / n;
nodes.forEach(function (node, i) {
  const angle = i * angleSep;
  node.x = radius * Math.cos(angle) + origin[0];
  node.y = radius * Math.sin(angle) + origin[1];
  node.angle = angle;
  nodeMap.set(node.id, node);

  if (node.cluster && clusterMap.get(node.cluster) === undefined) {
    clusterMap.set(node.cluster, clusterId);
    clusterId++;
  }

  const id = clusterMap.get(node.cluster);

  if (node.style) {
    node.style.fill = colors[id % colors.length];
  } else {
    node.style = {
      fill: colors[id % colors.length]
    };
  }

  node.label = node.name;
  node.labelCfg = {
    position: "center",
    style: {
      rotate: angle,
      rotateCenter: "lefttop",
      textAlign: "start"
    }
  };
});
edges.forEach(edge => {
  edge.type = "quadratic";
  const source = nodeMap.get(edge.source);
  const target = nodeMap.get(edge.target);
  edge.controlPoints = [{
    x: origin[0],
    y: origin[1]
  }];
  edge.color = source.style.fill;
  edge.sourceName = source.name;
  edge.targetName = target.name;
});
let maxValue = -9999;
let minValue = 9999;
nodes.forEach(function (k) {
  if (maxValue < k.value) maxValue = k.value;
  if (minValue > k.value) minValue = k.value;
});
const sizeRange = [3, 30];
const sizeDataRange = [minValue, maxValue];
scaleNodeProp(nodes, "size", "value", sizeDataRange, sizeRange);
graph.data(data);
graph.render();
graph.fitView();