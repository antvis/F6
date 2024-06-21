import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const ICON_MAP = {
  a: "https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ",
  b: "https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ",
};
F6.registerNode(
  "card-node",
  {
    drawShape: function drawShape(cfg, group) {
      const color = cfg.error ? "#F4664A" : "#30BF78";
      const r = 2;
      const shape = group.addShape("rect", {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 60,
          stroke: color,
          radius: r,
        },
        name: "main-box",
        draggable: true,
      });
      group.addShape("rect", {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 20,
          fill: color,
          radius: [r, r, 0, 0],
        },
        name: "title-box",
        draggable: true,
      });
      group.addShape("image", {
        attrs: {
          x: 4,
          y: 2,
          height: 16,
          width: 16,
          cursor: "pointer",
          img: ICON_MAP[cfg.nodeType || "app"],
        },
        name: "node-icon",
      });
      group.addShape("text", {
        attrs: {
          textBaseline: "top",
          y: 2,
          x: 24,
          lineHeight: 20,
          text: cfg.title,
          fill: "#fff",
        },
        name: "title",
      });

      if (cfg.nodeLevel > 0) {
        group.addShape("marker", {
          attrs: {
            x: 184,
            y: 30,
            r: 6,
            cursor: "pointer",
            symbol: cfg.collapse ? F6.Marker.expand : F6.Marker.collapse,
            stroke: "#666",
            lineWidth: 1,
          },
          name: "collapse-icon",
        });
      }

      cfg.panels.forEach((item, index) => {
        group.addShape("text", {
          attrs: {
            textBaseline: "top",
            y: 25,
            x: 24 + index * 60,
            lineHeight: 20,
            text: item.title,
            fill: "rgba(0,0,0, 0.4)",
          },
          name: `index-title-${index}`,
        });
        group.addShape("text", {
          attrs: {
            textBaseline: "top",
            y: 42,
            x: 24 + index * 60,
            lineHeight: 20,
            text: item.value,
            fill: "#595959",
          },
          name: `index-title-${index}`,
        });
      });
      return shape;
    },
  },
  "single-node",
);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 60,
  fitCenter: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  defaultNode: {
    type: "card-node",
  },
});
graph.data(data);
graph.render();
graph.fitView();
