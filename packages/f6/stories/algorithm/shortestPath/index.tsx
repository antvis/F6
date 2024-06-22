import React, { useEffect } from "react";
import F6, { Algorithm } from "@antv/f6";
import force from "@antv/f6/src/extends/layout/forceLayout";
import data from "./data";

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  let graph = null;
  // 注册布局
  F6.registerLayout("force", force);

  useEffect(() => {
    if (!graph) {
      graph = new F6.Graph({
        container: ref.current,
        width,
        height,
        pixelRatio: 2,
        fitView: true,
        localRefresh: false,
        modes: {
          default: ["click-select", "drag-canvas", "drag-node"],
        },

        layout: {
          type: "force",
          alphaDecay: 0,
        },

        animate: true,
        defaultNode: {
          size: 30,
        },
        defaultEdge: {
          style: {
            endArrow: {
              path: "M 0,0 L 8,4 L 8,-4 Z",
              fill: "#e2e2e2",
            },
          },
        },
      } as any);

      graph.data(data);
      graph.render();
      graph.fitView();

      const { findShortestPath } = Algorithm;

      // 清除状态
      const clearStates = () => {
        graph.getNodes().forEach((node) => {
          graph.clearItemStates(node);
        });
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      };

      graph.on("node:tap", (e) => {
        const selectedNodes = graph.findAllByState("node", "selected");
        if (selectedNodes.length !== 2) {
          return;
        }
        // 清除状态
        clearStates();
        // path 为其中一条最短路径
        const { path } = findShortestPath(
          data,
          selectedNodes[0].getID(),
          selectedNodes[1].getID(),
        );

        const pathNodeMap = {};
        // 高亮节点
        path.forEach((id) => {
          const pathNode = graph.findById(id);
          pathNode.toFront();
          graph.setItemState(pathNode, "highlight", true);
          pathNodeMap[id] = true;
        });
        // 高亮边，置灰非路径中边
        graph.getEdges().forEach((edge) => {
          const edgeModel = edge.getModel();
          const source = edgeModel.source;
          const target = edgeModel.target;
          const sourceInPathIdx = path.indexOf(source);
          const targetInPathIdx = path.indexOf(target);
          if (sourceInPathIdx === -1 || targetInPathIdx === -1) return;
          if (Math.abs(sourceInPathIdx - targetInPathIdx) === 1) {
            graph.setItemState(edge, "highlight", true);
          } else {
            graph.setItemState(edge, "inactive", true);
          }
        });
        // 置灰非路径中节点
        graph.getNodes().forEach((node) => {
          if (!pathNodeMap[node.getID()]) {
            graph.setItemState(node, "inactive", true);
          }
        });
      });
    }
  }, []);

  return <div ref={ref}></div>;
};
