import React, { useEffect } from "react";
import F6, { Algorithm } from "@antv/f6";
import dagreLayout from "@antv/f6/dist/extends/layout/dagreLayout";

import data from "./data";

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;
  let graph = null;

  F6.registerLayout("dagre", dagreLayout);

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
          default: ["drag-canvas", "drag-node"],
        },
        layout: {
          type: "dagre",
          sortByCombo: false,
          ranksep: 10,
          nodesep: 10,
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

      const { depthFirstSearch } = Algorithm;
      const commands = [];

      graph.getNodes().forEach((node) => {
        graph.setItemState(node, "inactive", true);
      });

      depthFirstSearch(data, "A", {
        enter: ({ current: id }) => {
          commands.push({
            action: "enter",
            id,
          });
        },
        leave: ({ current: id }) => {
          commands.push({
            action: "leave",
            id,
          });
        },
      });

      function loop() {
        const command = commands.shift();
        if (command) {
          const pathNode = graph.findById(command.id);
          if (command.action === "enter") {
            pathNode.toFront();
            graph.clearItemStates(pathNode);
            graph.setItemState(pathNode, "highlight", true);
          }
          if (command.action === "leave") {
            graph.clearItemStates(pathNode);
            graph.setItemState(pathNode, "inactive", true);
          }
          setTimeout(loop, 1000);
        }
      }
      loop();
    }
  }, []);

  return <div ref={ref}></div>;
};
