import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;

const getPath = (cx, cy, rs, re, startAngle, endAngle, clockwise) => {
  const flag1 = clockwise ? 1 : 0;
  const flag2 = clockwise ? 0 : 1;
  return [["M", Math.cos(startAngle) * rs + cx, Math.sin(startAngle) * rs + cy], ["L", Math.cos(startAngle) * re + cx, Math.sin(startAngle) * re + cy], ["A", re, re, 0, 0, flag1, Math.cos(endAngle) * re + cx, Math.sin(endAngle) * re + cy], ["L", Math.cos(endAngle) * rs + cx, Math.sin(endAngle) * rs + cy], ["A", rs, rs, 0, 0, flag2, Math.cos(startAngle) * rs + cx, Math.sin(startAngle) * rs + cy], ["Z"]];
};

F6.registerNode("stacked-bar-node", {
  draw(cfg, group) {
    const baseR = 30;
    let nowAngle = 0;
    const everyIncAngle = 2 * Math.PI * (360 / 5 / 5) / 360;
    cfg.details.forEach(cat => {
      cat.values.forEach(item => {
        const baseNbr = Math.ceil(item / 10);
        const baseIncR = 7;
        let nowStartR = baseR;
        const last = item % 10;
        const endAngle = nowAngle + everyIncAngle;

        for (let i = 0; i < baseNbr; i++) {
          const path0 = getPath(0, 0, nowStartR, nowStartR + baseIncR, nowAngle, endAngle, false);
          group.addShape("path", {
            attrs: {
              path: path0,
              stroke: "darkgray",
              fill: cat.color
            },
            name: "path-shape1"
          });
          nowStartR = nowStartR + baseIncR + 2;

          if (i === baseNbr - 1 && last !== 0) {
            const path1 = getPath(0, 0, nowStartR, nowStartR + baseIncR * last / 10, nowAngle, endAngle, false);
            group.addShape("path", {
              attrs: {
                path: path1,
                stroke: "darkgray",
                fill: cat.color
              },
              name: "path-shape2"
            });
          }
        }

        nowAngle = endAngle;
      });
    });
    group.addShape("circle", {
      attrs: {
        x: 0,
        y: 0,
        r: baseR,
        fill: cfg.centerColor,
        stroke: "darkgray"
      },
      name: "circle-shape"
    });

    if (cfg.label) {
      group.addShape("text", {
        attrs: {
          x: 0,
          y: 0,
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.label,
          fill: "white",
          fontStyle: "bold"
        },
        name: "text-shape"
      });
    }

    return group;
  }

});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: true
});
graph.data(data);
graph.render();
graph.fitView();