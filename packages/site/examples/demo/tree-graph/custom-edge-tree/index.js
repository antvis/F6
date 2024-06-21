import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);

const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
  return [
    ["M", x - r, y - r],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 2 - r, y - r],
    ["L", x + r - 2, y - r],
  ];
};

const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
  return [
    ["M", x - r, y - r],
    ["a", r, r, 0, 1, 0, r * 2, 0],
    ["a", r, r, 0, 1, 0, -r * 2, 0],
    ["M", x + 2 - r, y - r],
    ["L", x + r - 2, y - r],
    ["M", x, y - 2 * r + 2],
    ["L", x, y - 2],
  ];
};

F6.Util.traverseTree(data, (d) => {
  d.leftIcon = {
    style: {
      fill: "#e6fffb",
      stroke: "#e6fffb",
    },
    img: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ",
  };
  return true;
});
F6.registerNode(
  "icon-node",
  {
    options: {
      size: [60, 20],
      stroke: "#91d5ff",
      fill: "#91d5ff",
    },

    draw(cfg, group) {
      const styles = this.getShapeStyle(cfg);
      const { labelCfg = {} } = cfg;
      const w = styles.width;
      const h = styles.height;
      const keyShape = group.addShape("rect", {
        attrs: { ...styles, x: -w / 2, y: -h / 2 },
      });
      console.log("cfg.leftIcon", cfg.leftIcon);

      if (cfg.leftIcon) {
        const { style, img } = cfg.leftIcon;
        group.addShape("rect", {
          attrs: {
            x: 1 - w / 2,
            y: 1 - h / 2,
            width: 38,
            height: styles.height - 2,
            fill: "#8c8c8c",
            ...style,
          },
        });
        group.addShape("image", {
          attrs: {
            x: 8 - w / 2,
            y: 8 - h / 2,
            width: 24,
            height: 24,
            img:
              img ||
              "https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png",
          },
          name: "image-shape",
        });
      }

      group.addShape("marker", {
        attrs: {
          x: 40 - w / 2,
          y: 52 - h / 2,
          r: 6,
          stroke: "#73d13d",
          cursor: "pointer",
          symbol: EXPAND_ICON,
        },
        name: "add-item",
      });
      group.addShape("marker", {
        attrs: {
          x: 80 - w / 2,
          y: 52 - h / 2,
          r: 6,
          stroke: "#ff4d4f",
          cursor: "pointer",
          symbol: COLLAPSE_ICON,
        },
        name: "remove-item",
      });

      if (cfg.label) {
        group.addShape("text", {
          attrs: {
            ...labelCfg.style,
            text: cfg.label,
            x: 50 - w / 2,
            y: 25 - h / 2,
          },
        });
      }

      return keyShape;
    },

    update: undefined,
  },
  "rect",
);
F6.registerEdge("flow-line", {
  draw(cfg, group) {
    const { startPoint } = cfg;
    const { endPoint } = cfg;
    const { style } = cfg;
    const shape = group.addShape("path", {
      attrs: {
        stroke: style.stroke,
        endArrow: style.endArrow,
        path: [
          ["M", startPoint.x, startPoint.y],
          ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
          ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
          ["L", endPoint.x, endPoint.y],
        ],
      },
    });
    return shape;
  },
});
const defaultStateStyles = {
  hover: {
    stroke: "#1890ff",
    lineWidth: 2,
  },
};
const defaultNodeStyle = {
  fill: "#91d5ff",
  stroke: "#40a9ff",
  radius: 5,
};
const defaultEdgeStyle = {
  stroke: "#91d5ff",
  endArrow: {
    path: "M 0,0 L 12, 6 L 9,0 L 12, -6 Z",
    fill: "#91d5ff",
    d: -20,
  },
};
const defaultLayout = {
  type: "compactBox",
  direction: "TB",
  getId: function getId(d) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16;
  },
  getWidth: function getWidth() {
    return 16;
  },
  getVGap: function getVGap() {
    return 40;
  },
  getHGap: function getHGap() {
    return 70;
  },
};
const defaultLabelCfg = {
  style: {
    fill: "#000",
    fontSize: 12,
  },
};
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "zoom-canvas"],
  },
  defaultNode: {
    type: "icon-node",
    size: [120, 40],
    style: defaultNodeStyle,
    labelCfg: defaultLabelCfg,
  },
  defaultEdge: {
    type: "flow-line",
    style: defaultEdgeStyle,
  },
  nodeStateStyles: defaultStateStyles,
  edgeStateStyles: defaultStateStyles,
  layout: defaultLayout,
});
graph.on("node:tap", (evt) => {
  const { item, target } = evt;
  const targetType = target.get("type");
  const name = target.get("name");

  if (targetType === "marker") {
    const model = item.getModel();

    if (name === "add-item") {
      if (!model.children) {
        model.children = [];
      }

      const id = `n-${Math.random()}`;
      model.children.push({
        id,
        label: id.substr(0, 8),
        leftIcon: {
          style: {
            fill: "#e6fffb",
            stroke: "#e6fffb",
          },
          img: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ",
        },
      });
      graph.updateChild(model, model.id);
    } else if (name === "remove-item") {
      graph.removeChild(model.id);
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();
