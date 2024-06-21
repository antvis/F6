import F6 from "@antv/f6";
import result from "./data";
import dagreLayout from "@antv/f6/dist/extends/layout/dagreLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("dagre", dagreLayout);
F6.registerNode(
  "dice-sankey-node",
  {
    jsx: (cfg) => `
        <group>
          <rect style={{ width: ${cfg.size[0]}, height: ${cfg.size[1]}, fill: ${cfg.color} }} />
          <text style={{ marginLeft: 6, marginTop: 24,  fill: #333, stroke: ${cfg.color}, lineWidth: 2, fontSize: 24 }}>${cfg.label} ${cfg.size[1]}</text>
        </group>
      `,

    getAnchorPoints() {
      return [[0, 0]];
    },
  },
  "single-node",
);
F6.registerEdge("dice-sankey-edge", {
  draw(cfg, group) {
    const { startPoint, endPoint, color } = cfg;
    const deltaY1 = Number(cfg.sourceIndex);
    const deltaY2 = Number(cfg.sourceIndex) + Number(cfg.value);
    const deltaY3 = Number(cfg.targetIndex);
    const deltaY4 = Number(cfg.targetIndex) + Number(cfg.value);
    const quaterX = (Math.abs(endPoint.x - startPoint.x) / 5) * 3;
    return group.addShape("path", {
      attrs: {
        fill: color,
        opacity: 0.6,
        path: [
          ["M", startPoint.x, startPoint.y + deltaY1],
          [
            "C",
            endPoint.x - quaterX,
            startPoint.y + deltaY1,
            startPoint.x + quaterX,
            endPoint.y + deltaY3,
            endPoint.x,
            endPoint.y + deltaY3,
          ],
          ["L", endPoint.x, endPoint.y + deltaY4],
          [
            "C",
            startPoint.x + quaterX,
            endPoint.y + deltaY4,
            endPoint.x - quaterX,
            startPoint.y + deltaY2,
            startPoint.x,
            startPoint.y + deltaY2,
          ],
          ["L", startPoint.x, startPoint.y + deltaY1],
          ["Z"],
        ],
      },
    });
  },
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  defaultNode: {
    type: "dice-sankey-node",
  },
  defaultEdge: {
    type: "dice-sankey-edge",
  },
  fitView: true,
  fitViewPadding: 60,
  layout: {
    type: "dagre",
    rankdir: "LR",
    nodesep: 10,
    ranksep: 130,
    align: "ul",
  },
});
graph.data(result);
graph.render();
graph.fitView();
