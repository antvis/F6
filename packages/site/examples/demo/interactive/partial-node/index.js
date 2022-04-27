import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerNode("customNode", {
  drawShape: function drawShape(cfg, group) {
    const {
      shapeType
    } = this;
    const style = Object.assign({}, this.getShapeStyle(cfg), {
      x: 0,
      y: 0,
      r: 50
    });
    const shape = group.addShape(shapeType, {
      attrs: style,
      name: "key-shape"
    });
    group.addShape("circle", {
      attrs: {
        x: 0,
        y: -30,
        r: 10,
        fill: "#096dd9",
        cursor: "pointer"
      },
      name: "circle-shape"
    });
    return shape;
  }
}, "circle");
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  modes: {
    default: [{
      type: "drag-node",
      delegate: false
    }]
  },
  defaultNode: {
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9"
    },
    labelCfg: {
      style: {
        fontSize: 12
      }
    }
  },
  defaultEdge: {
    style: {
      stroke: "#e2e2e2"
    }
  },
  nodeStateStyles: {
    selected: {
      stroke: "red"
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();
graph.on("node:tap", event => {
  const {
    item
  } = event;
  graph.setItemState(item, "selected", true);
});
graph.on("circle-shape:tap", evt => {
  const {
    item
  } = evt;
  graph.updateItem(item, {
    label: "点击了局部",
    labelCfg: {
      style: {
        fill: "#003a8c",
        fontSize: 16
      }
    }
  });
});