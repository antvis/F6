import F6 from "@antv/f6";
import { nodes, edges, data } from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerNode("breath-node", {
  afterDraw(cfg, group) {
    const r = cfg.size / 2;
    const back1 = group.addShape("circle", {
      zIndex: -3,
      attrs: {
        x: 0,
        y: 0,
        r,
        fill: cfg.color || cfg.style && cfg.style.fill,
        opacity: 0.6
      },
      name: "back1-shape"
    });
    const back2 = group.addShape("circle", {
      zIndex: -2,
      attrs: {
        x: 0,
        y: 0,
        r,
        fill: cfg.color,
        opacity: 0.6
      },
      name: "back2-shape"
    });
    const back3 = group.addShape("circle", {
      zIndex: -1,
      attrs: {
        x: 0,
        y: 0,
        r,
        fill: cfg.color,
        opacity: 0.6
      },
      name: "back3-shape"
    });
    group.sort();
    const delayBase = Math.random() * 2000;
    back1.animate({
      r: r + 10,
      opacity: 0.0
    }, {
      repeat: true,
      duration: 3000,
      easing: "easeCubic",
      delay: delayBase
    });
    back2.animate({
      r: r + 10,
      opacity: 0.0
    }, {
      repeat: true,
      duration: 3000,
      easing: "easeCubic",
      delay: delayBase + 1000
    });
    back3.animate({
      r: r + 10,
      opacity: 0.0
    }, {
      repeat: true,
      duration: 3000,
      easing: "easeCubic",
      delay: delayBase + 2000
    });
  }

}, "circle");
F6.registerEdge("running-polyline", {
  afterDraw(cfg, group) {
    const shape = group.get("children")[0];
    const length = shape.getTotalLength();
    let circleCount = Math.ceil(length / 20);
    circleCount = circleCount === 0 ? 1 : circleCount;

    const _loop = function _loop(i) {
      const delay = Math.random() * 1000;
      const start = shape.getPoint(i / circleCount);
      const circle = group.addShape("circle", {
        attrs: {
          x: start.x,
          y: start.y,
          r: 0.8,
          fill: "#A0F3AF",
          shadowColor: "#fff",
          shadowBlur: 30
        },
        name: "circle-shape"
      });
      circle.animate(ratio => {
        ratio += i / circleCount;

        if (ratio > 1) {
          ratio %= 1;
        }

        const tmpPoint = shape.getPoint(ratio);
        return {
          x: tmpPoint.x,
          y: tmpPoint.y
        };
      }, {
        repeat: true,
        duration: 10 * length,
        easing: "easeCubic",
        delay
      });
    };

    for (let i = 0; i < circleCount; i++) {
      _loop(i);
    }
  }

}, "polyline");

function scaleNodesPoints(nodes_, edges_, graphSize) {
  const size = graphSize[0] < graphSize[1] ? graphSize[0] : graphSize[1];
  let minX = 99999999999999999;
  let maxX = -99999999999999999;
  let minY = 99999999999999999;
  let maxY = -99999999999999999;
  nodes_.forEach(function (node) {
    if (node.x > maxX) maxX = node.x;
    if (node.x < minX) minX = node.x;
    if (node.y > maxY) maxY = node.y;
    if (node.y < minY) minY = node.y;
  });
  edges_.forEach(function (edge) {
    const {
      controlPoints
    } = edge;
    controlPoints.forEach(function (cp) {
      if (cp.x > maxX) maxX = cp.x;
      if (cp.x < minX) minX = cp.x;
      if (cp.y > maxY) maxY = cp.y;
      if (cp.y < minY) minY = cp.y;
    });
  });
  const xScale = maxX - minX;
  const yScale = maxY - minY;
  nodes_.forEach(function (node) {
    node.orix = node.x;
    node.oriy = node.y;
    node.x = (node.x - minX) / xScale * size;
    node.y = (node.y - minY) / yScale * size;
  });
  edges_.forEach(function (edge) {
    const {
      controlPoints
    } = edge;
    controlPoints.forEach(function (cp) {
      cp.x = (cp.x - minX) / xScale * size;
      cp.y = (cp.y - minY) / yScale * size;
    });
  });
}

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
        const text = model.class;
        return text;
      }
    }]
  },
  defaultNode: {
    type: "breath-node",
    size: 3,
    style: {
      lineWidth: 0,
      fill: "rgb(240, 223, 83)"
    }
  },
  defaultEdge: {
    type: "running-polyline",
    size: 1,
    color: "rgb(14,142,63)",
    style: {
      opacity: 0.8,
      lineAppendWidth: 3
    }
  }
});
const graphSize = [500, 500];
scaleNodesPoints(nodes, edges, graphSize);
graph.data(data);
graph.render();
graph.fitView();