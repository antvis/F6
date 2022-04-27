import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
F6.registerNode("file-node", {
  draw: function draw(cfg, group) {
    const keyShape = group.addShape("rect", {
      attrs: {
        x: 10,
        y: -12,
        fill: "#fff",
        stroke: null
      }
    });
    let isLeaf = false;

    if (cfg.collapsed) {
      group.addShape("marker", {
        attrs: {
          symbol: "triangle",
          x: 4,
          y: -2,
          r: 4,
          fill: "#666"
        },
        name: "marker-shape"
      });
    } else if (cfg.children && cfg.children.length > 0) {
      group.addShape("marker", {
        attrs: {
          symbol: "triangle-down",
          x: 4,
          y: -2,
          r: 4,
          fill: "#666"
        },
        name: "marker-shape"
      });
    } else {
      isLeaf = true;
    }

    const shape = group.addShape("text", {
      attrs: {
        x: 15,
        y: 4,
        text: cfg.name,
        fill: "#666",
        fontSize: 16,
        textAlign: "left",
        fontFamily: typeof window !== "undefined" ? window.getComputedStyle(document.body, null).getPropertyValue("font-family") || "Arial, sans-serif" : "Arial, sans-serif"
      },
      name: "text-shape"
    });
    const bbox = shape.getBBox();
    let backRectW = bbox.width;
    let backRectX = keyShape.attr("x");

    if (!isLeaf) {
      backRectW += 8;
      backRectX -= 15;
    }

    keyShape.attr({
      width: backRectW,
      height: bbox.height + 4,
      x: backRectX
    });
    return keyShape;
  }
});
F6.registerEdge("step-line", {
  getControlPoints: function getControlPoints(cfg) {
    const {
      startPoint
    } = cfg;
    const {
      endPoint
    } = cfg;
    return [startPoint, {
      x: startPoint.x,
      y: endPoint.y
    }, endPoint];
  }
}, "polyline");
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  modes: {
    default: [{
      type: "collapse-expand",
      animate: false,
      onChange: function onChange(item, collapsed) {
        const model = item.getModel();
        model.collapsed = collapsed;
        return true;
      }
    }, "drag-canvas", "zoom-canvas"]
  },
  defaultEdge: {
    style: {
      stroke: "#A3B1BF"
    }
  },
  layout: {
    type: "indented",
    isHorizontal: true,
    direction: "LR",
    indent: 30,
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth() {
      return 16;
    }
  }
});
let centerX = 0;
graph.node(function (node) {
  if (node.id === "Modeling Methods") {
    centerX = node.x;
  }

  let position_value = null;

  if (node.children && node.children.length > 0) {
    position_value = "left";
  } else if (node.x > centerX) position_value = "right";else position_value = "left";

  return {
    label: node.id,
    labelCfg: {
      offset: 5,
      position: position_value
    }
  };
});
graph.node(node => {
  return {
    type: "file-node",
    label: node.name
  };
});
graph.edge(() => {
  return {
    type: "step-line"
  };
});
graph.data(data);
graph.render();
graph.fitView();