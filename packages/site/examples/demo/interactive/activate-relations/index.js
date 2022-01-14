import F6 from "@antv/f6";
import data from "./data";
import force from "@antv/f6/dist/extends/layout/forceLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("force", force);
const tooltip = new F6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  fixToNode: [1, 0.5],
  itemTypes: ["node", "edge"],
  getContent: e => {
    const outDiv = document.createElement("div");
    outDiv.style.width = "fit-content";
    outDiv.style.height = "fit-content";
    const model = e.item.getModel();

    if (e.item.getType() === "node") {
      outDiv.innerHTML = `${model.name}`;
    } else {
      const source = e.item.getSource();
      const target = e.item.getTarget();
      outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${target.getModel().name}`;
    }

    return outDiv;
  }
});
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  fitViewPadding: 50,
  layout: {
    type: "force",
    edgeStrength: 0.7
  },
  plugins: [tooltip],
  modes: {
    default: ["drag-canvas", "activate-relations"]
  },
  defaultNode: {
    size: [10, 10]
  },
  defaultEdge: {
    style: {
      stroke: "#aaa",
      lineAppendWidth: 2,
      opacity: 0.3
    }
  }
});
graph.data(data);
graph.render();
graph.fitView();