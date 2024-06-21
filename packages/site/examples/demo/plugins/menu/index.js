import F6 from "@antv/f6";
import data from "./data";
import { Menu } from "@antv/f6-plugin";
const width = 375;
const height = 600;
const pixelRatio = 2;
const contextMenu = new Menu({
  getContent(evt) {
    let header;

    if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
      header = "Canvas ContextMenu";
    } else if (evt.item) {
      const itemType = evt.item.getType();
      header = `${itemType.toUpperCase()} ContextMenu`;
    }

    return `
        <div class="container">
          <div class="header" title="header">${header}</div>
          <div>
            <div class="li" title="1">div 1</div>
            <div class="li" title="2">div 2</div>
          </div>
        </div>
        `;
  },

  getCss: () => {
    return `
          .container {
            opacity: 0.9;
            width: 150;
            padding: 10 8;
            border: 1 solid #e2e2e2;
          }
          .header {
            padding-bottom: 10;
            font-weight: bold;
          }
          .li {
            padding-bottom: 10;
          }
        `;
  },
  handleMenuClick: (target) => {
    my.alert({
      title: `点击了: ${target.title}`,
    });
  },
  offsetX: 0,
  offsetY: 0,
  itemTypes: ["node", "edge", "canvas"],
});
const graph = new F6.Graph({
  pixelRatio,
  width,
  height,
  linkCenter: true,
  fitView: true,
  plugins: [contextMenu],
  defaultNode: {
    size: [80, 40],
    type: "rect",
    style: {
      fill: "#DEE9FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    style: {
      stroke: "#b5b5b5",
      lineAppendWidth: 3,
    },
    labelCfg: {
      autoRotate: true,
      style: {
        stroke: "white",
        lineWidth: 5,
      },
    },
  },
  modes: {
    default: ["drag-node"],
  },
});
graph.data(data);
graph.render();
