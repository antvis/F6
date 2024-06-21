export default {
  nodes: [
    { id: "node1", x: 250, y: 200, comboId: "combo1" },
    { id: "node2", x: 300, y: 200, comboId: "combo1" },
    { id: "node3", x: 100, y: 200, comboId: "combo3" },
  ],
  combos: [
    { id: "combo1", label: "Combo 1", parentId: "combo2" },
    { id: "combo2", label: "Combo 2" },
    { id: "combo3", label: "Combo 3", collapsed: true },
  ],
};
