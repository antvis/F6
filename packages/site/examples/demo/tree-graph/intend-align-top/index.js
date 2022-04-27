import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerGraph("TreeGraph", TreeGraph);
F6.registerNode("card-node", {
  draw: function drawShape(cfg, group) {
    const r = 2;
    const color = "#5B8FF9";
    const w = cfg.size[0];
    const h = cfg.size[1];
    const shape = group.addShape("rect", {
      attrs: {
        x: -w / 2,
        y: -h / 2,
        width: w,
        height: h,
        stroke: color,
        radius: r,
        fill: "#fff"
      },
      name: "main-box",
      draggable: true
    });
    group.addShape("rect", {
      attrs: {
        x: -w / 2,
        y: -h / 2,
        width: w,
        height: h / 2,
        fill: color,
        radius: [r, r, 0, 0]
      },
      name: "title-box",
      draggable: true
    });
    group.addShape("text", {
      attrs: {
        textBaseline: "top",
        x: -w / 2 + 8,
        y: -h / 2 + 2,
        lineHeight: 20,
        text: cfg.id,
        fill: "#fff"
      },
      name: "title"
    });
    cfg.children && group.addShape("marker", {
      attrs: {
        x: w / 2,
        y: 0,
        r: 6,
        cursor: "pointer",
        symbol: F6.Marker.collapse,
        stroke: "#666",
        lineWidth: 1,
        fill: "#fff"
      },
      name: "collapse-icon"
    });
    group.addShape("text", {
      attrs: {
        textBaseline: "top",
        x: -w / 2 + 8,
        y: -h / 2 + 24,
        lineHeight: 20,
        text: "description",
        fill: "rgba(0,0,0, 1)"
      },
      name: `description`
    });
    return shape;
  },

  setState(name, value, item) {
    if (name === "collapsed") {
      const marker = item.get("group").find(ele => ele.get("name") === "collapse-icon");
      const icon = value ? F6.Marker.expand : F6.Marker.collapse;
      marker.attr("symbol", icon);
    }
  }

});
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas"]
  },
  defaultNode: {
    type: "card-node",
    size: [100, 40]
  },
  defaultEdge: {
    type: "cubic-horizontal",
    style: {
      endArrow: true
    }
  },
  layout: {
    type: "indented",
    direction: "LR",
    dropCap: false,
    indent: 200,
    getHeight: () => {
      return 60;
    }
  }
});
graph.on("node:tap", e => {
  if (e.target.get("name") === "collapse-icon") {
    e.item.getModel().collapsed = !e.item.getModel().collapsed;
    graph.setItemState(e.item, "collapsed", e.item.getModel().collapsed);
    graph.layout();
  }
});
graph.data(data);
graph.render();
graph.fitView();