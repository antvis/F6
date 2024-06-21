import F6 from "@antv/f6";
import data from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerNode("area", {
  draw(cfg, group) {
    const baseR = 30;
    let refR = baseR;
    const refInc = 10;

    for (let i = 0; i < 6; i++) {
      group.addShape("circle", {
        attrs: {
          x: 0,
          y: 0,
          r: (refR += refInc),
          stroke: "#bae7ff",
          lineDash: [4, 4],
        },
        name: "circle-shape",
      });
    }

    const everyIncAngle = (2 * Math.PI * (360 / 5)) / 360;
    const tempIncValues = [baseR, baseR, baseR, baseR, baseR];
    const allRs = [];
    cfg.details.forEach((cat) => {
      const oneRs = [];
      cat.values.forEach((v, i) => {
        const R = tempIncValues[i] + v * 0.4;
        oneRs.push(R);
        tempIncValues[i] = R;
      });
      allRs.push(oneRs);
    });
    const strokeColors = [
      "rgba(91, 143, 249,1)",
      "rgba(90, 216, 166,1)",
      "rgba(246, 189, 22,1)",
      "rgba(232, 104, 74,1)",
      "rgba(255, 157, 77,1)",
    ];
    const fillColors = [
      "rgba(91, 143, 249,0.5)",
      "rgba(90, 216, 166,0.5)",
      "rgba(246, 189, 22,0.5)",
      "rgba(232, 104, 74,0.5)",
      "rgba(255, 157, 77,0.5)",
    ];
    allRs.reverse().forEach((Rs, index) => {
      let curAngle = 0;
      const poss = [];
      Rs.forEach((r) => {
        const xPos = r * Math.cos(curAngle);
        const yPos = r * Math.sin(curAngle);
        curAngle += everyIncAngle;
        poss.push([xPos, yPos]);
      });
      const Ls = poss.map((p, i) => {
        if (i === 0) {
          return ["M", ...p];
        }

        return ["L", ...p];
      });
      group.addShape("path", {
        attrs: {
          path: [...Ls, ["Z"]],
          stroke: strokeColors[index],
          fill: fillColors[index],
        },
        name: "path-shape1",
      });
    });
    let nowAngle2 = 0;
    const everyIncAngleCat = (2 * Math.PI * (360 / 5)) / 360;

    for (let i = 0; i < 5; i++) {
      const r = 30 + 60;
      const xPos = r * Math.cos(nowAngle2);
      const yPos = r * Math.sin(nowAngle2);
      group.addShape("path", {
        attrs: {
          path: [
            ["M", 0, 0],
            ["L", xPos, yPos],
          ],
          lineDash: [4, 4],
          stroke: "darkgray",
        },
        name: "path-shape2",
      });
      nowAngle2 += everyIncAngleCat;
    }

    group.addShape("circle", {
      attrs: {
        x: 0,
        y: 0,
        r: baseR,
        fill: cfg.centerColor,
        stroke: "darkgray",
      },
      name: "circle-shape",
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
          fontStyle: "bold",
        },
        name: "text-shape",
      });
    }

    return group;
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitCenter: true,
});
graph.data(data);
graph.render();
graph.fitView();
