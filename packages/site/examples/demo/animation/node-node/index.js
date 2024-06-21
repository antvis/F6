import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerNode(
  "circle-animate",
  {
    afterDraw(cfg, group) {
      const shape = group.get("children")[0];
      shape.animate(
        (ratio) => {
          const diff = ratio <= 0.5 ? ratio * 10 : (1 - ratio) * 10;
          return {
            r: cfg.size / 2 + diff,
          };
        },
        {
          repeat: true,
          duration: 3000,
          easing: "easeCubic",
        },
      );
    },
  },
  "circle",
);
F6.registerNode(
  "background-animate",
  {
    afterDraw(cfg, group) {
      const r = cfg.size / 2;
      const back1 = group.addShape("circle", {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6,
        },
        name: "back1-shape",
      });
      const back2 = group.addShape("circle", {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6,
        },
        name: "back2-shape",
      });
      const back3 = group.addShape("circle", {
        zIndex: -1,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6,
        },
        name: "back3-shape",
      });
      group.sort();
      back1.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 0,
          repeat: true,
        },
      );
      back2.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 1000,
          repeat: true,
        },
      );
      back3.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 2000,
          repeat: true,
        },
      );
    },
  },
  "circle",
);
F6.registerNode(
  "inner-animate",
  {
    afterDraw(cfg, group) {
      const { size } = cfg;
      const width = size[0] - 12;
      const height = size[1] - 12;
      const image = group.addShape("image", {
        attrs: {
          x: -width / 2,
          y: -height / 2,
          width,
          height,
          img: cfg.img,
        },
        name: "image-shape",
      });
      image.animate(
        (ratio) => {
          const toMatrix = Util.transform(
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [["r", ratio * Math.PI * 2]],
          );
          return {
            matrix: toMatrix,
          };
        },
        {
          repeat: true,
          duration: 3000,
          easing: "easeCubic",
        },
      );
    },
  },
  "rect",
);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  defaultNode: {
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    style: {
      lineWidth: 1,
      stroke: "#b5b5b5",
    },
  },
});
graph.data(data);
graph.render();
graph.fitView();
