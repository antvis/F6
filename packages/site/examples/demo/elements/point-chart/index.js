import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerNode("justPoints", {
  draw(cfg, group) {
    const baseR = 30;
    let nowAngle = 0;
    let refR = baseR;
    const refInc = 10;

    for (let i = 0; i < 5; i++) {
      group.addShape("circle", {
        attrs: {
          x: 0,
          y: 0,
          r: refR += refInc,
          stroke: "#5ad8a6",
          lineDash: [4, 4]
        },
        name: "circle-shape"
      });
    }

    const everyIncAngle = 2 * Math.PI * (360 / 5 / 5) / 360;
    nowAngle += everyIncAngle / 2;
    cfg.details.forEach(cat => {
      const postions = [];
      cat.values.forEach((item, index) => {
        const r = baseR + item;
        const xPos = r * Math.cos(nowAngle);
        const yPos = r * Math.sin(nowAngle);
        nowAngle += everyIncAngle;
        postions.push([xPos, yPos]);

        if (index === 4) {
          const r_ = baseR + item;
          const xPos_ = r_ * Math.cos(nowAngle);
          const yPos_ = r_ * Math.sin(nowAngle);
          postions.push([xPos_, yPos_]);
        }
      });
      postions.forEach((pos, index) => {
        if (index !== 5) {
          group.addShape("circle", {
            attrs: {
              x: pos[0],
              y: pos[1],
              r: 3,
              lineWidth: 2,
              stroke: cat.color
            },
            name: "circle-marker-shape"
          });
        }
      });
    });
    let nowAngle2 = 0;
    const everyIncAngleCat = 2 * Math.PI * (360 / 5) / 360;

    for (let i = 0; i < 5; i++) {
      const r = 30 + 50;
      const xPos = r * Math.cos(nowAngle2);
      const yPos = r * Math.sin(nowAngle2);
      group.addShape("path", {
        attrs: {
          path: [["M", 0, 0], ["L", xPos, yPos]],
          lineDash: [4, 4],
          stroke: "#5ad8a6"
        },
        name: "path-shape"
      });
      nowAngle2 += everyIncAngleCat;
    }

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
          fill: "#fff",
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