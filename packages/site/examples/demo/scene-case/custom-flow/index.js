import F6 from "@antv/f6";
import data from "./data";
import dagreLayout from "@antv/f6/dist/extends/layout/dagreLayout";
import { isObject } from "@antv/util";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("dagre", dagreLayout);
const colorMap = {
  A: "#72CC4A",
  B: "#1A91FF",
  C: "#FFAA15",
};
F6.registerNode(
  "round-rect",
  {
    drawShape: function drawShape(cfg, group) {
      const { width } = cfg.style;
      const { stroke } = cfg.style;
      const rect = group.addShape("rect", {
        attrs: {
          x: -width / 2,
          y: -15,
          width,
          height: 30,
          radius: 15,
          stroke,
          lineWidth: 1.2,
          fillOpacity: 1,
        },
        name: "rect-shape",
      });
      group.addShape("circle", {
        attrs: {
          x: -width / 2,
          y: 0,
          r: 3,
          fill: stroke,
        },
        name: "circle-shape",
      });
      group.addShape("circle", {
        attrs: {
          x: width / 2,
          y: 0,
          r: 3,
          fill: stroke,
        },
        name: "circle-shape2",
      });
      return rect;
    },
    getAnchorPoints: function getAnchorPoints() {
      return [
        [0, 0.5],
        [1, 0.5],
      ];
    },
    update: function update(cfg, item) {
      const group = item.getContainer();
      const children = group.get("children");
      const node = children[0];
      const circleLeft = children[1];
      const circleRight = children[2];
      const { stroke } = cfg.style;

      if (stroke) {
        node.attr("stroke", stroke);
        circleLeft.attr("fill", stroke);
        circleRight.attr("fill", stroke);
      }
    },
  },
  "single-node",
);
F6.registerEdge("fund-polyline", {
  itemType: "edge",
  draw: function draw(cfg, group) {
    const { startPoint } = cfg;
    const { endPoint } = cfg;
    const { stroke } = cfg.style;
    const Ydiff = endPoint.y - startPoint.y;
    const slope = Ydiff !== 0 ? Math.min(500 / Math.abs(Ydiff), 20) : 0;
    const cpOffset = slope > 15 ? 0 : 16;
    const offset = Ydiff < 0 ? cpOffset : -cpOffset;
    const line1EndPoint = {
      x: startPoint.x + slope,
      y: endPoint.y + offset,
    };
    const line2StartPoint = {
      x: line1EndPoint.x + cpOffset,
      y: endPoint.y,
    };
    const controlPoint = {
      x:
        ((line1EndPoint.x - startPoint.x) * (endPoint.y - startPoint.y)) /
          (line1EndPoint.y - startPoint.y) +
        startPoint.x,
      y: endPoint.y,
    };
    let path = [
      ["M", startPoint.x, startPoint.y],
      ["L", line1EndPoint.x, line1EndPoint.y],
      [
        "Q",
        controlPoint.x,
        controlPoint.y,
        line2StartPoint.x,
        line2StartPoint.y,
      ],
      ["L", endPoint.x, endPoint.y],
    ];

    if (Math.abs(Ydiff) <= 5) {
      path = [
        ["M", startPoint.x, startPoint.y],
        ["L", endPoint.x, endPoint.y],
      ];
    }

    const endArrow =
      cfg.style && cfg.style.endArrow ? cfg.style.endArrow : false;
    if (isObject(endArrow)) endArrow.fill = stroke;
    const line = group.addShape("path", {
      attrs: {
        path,
        stroke: colorMap[cfg.data && cfg.data.type],
        lineWidth: 1.2,
        endArrow,
      },
      name: "path-shape",
    });
    const labelLeftOffset = 0;
    const labelTopOffset = 8;
    const amount = group.addShape("text", {
      attrs: {
        text: cfg.data && cfg.data.amount,
        x: line2StartPoint.x + labelLeftOffset,
        y: endPoint.y - labelTopOffset - 2,
        fontSize: 14,
        textAlign: "left",
        textBaseline: "middle",
        fill: "#000000D9",
      },
      name: "text-shape-amount",
    });
    group.addShape("text", {
      attrs: {
        text: cfg.data && cfg.data.type,
        x: line2StartPoint.x + labelLeftOffset,
        y: endPoint.y - labelTopOffset - amount.getBBox().height - 2,
        fontSize: 10,
        textAlign: "left",
        textBaseline: "middle",
        fill: "#000000D9",
      },
      name: "text-shape-type",
    });
    group.addShape("text", {
      attrs: {
        text: cfg.data && cfg.data.date,
        x: line2StartPoint.x + labelLeftOffset,
        y: endPoint.y + labelTopOffset + 4,
        fontSize: 12,
        fontWeight: 300,
        textAlign: "left",
        textBaseline: "middle",
        fill: "#000000D9",
      },
      name: "text-shape-date",
    });
    return line;
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  layout: {
    type: "dagre",
    rankdir: "LR",
    nodesep: 30,
    ranksep: 100,
  },
  modes: {
    default: ["drag-canvas"],
  },
  defaultNode: {
    type: "round-rect",
    labelCfg: {
      style: {
        fill: "#000000A6",
        fontSize: 10,
      },
    },
    style: {
      stroke: "#72CC4A",
      width: 150,
    },
  },
  defaultEdge: {
    type: "fund-polyline",
  },
});
graph.data(data);
graph.render();
const edges = graph.getEdges();
edges.forEach(function (edge) {
  const line = edge.getKeyShape();
  const stroke = line.attr("stroke");
  const targetNode = edge.getTarget();
  targetNode.update({
    style: {
      stroke,
    },
  });
});
graph.paint();
