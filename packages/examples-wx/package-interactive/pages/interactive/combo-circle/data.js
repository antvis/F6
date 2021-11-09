export default {
  nodes: [
    { id: 'node1', x: 350, y: 200, comboId: 'combo1' },
    { id: 'node2', x: 350, y: 250, comboId: 'combo1' },
    { id: 'node3', x: 100, y: 200, comboId: 'combo3' },
  ],
  edges: [
    { source: 'node1', target: 'node2' },
    { source: 'node1', target: 'node3' },
    { source: 'combo1', target: 'node3' },
  ],
  combos: [
    { id: 'combo1', label: 'Combo 1', parentId: 'combo2' },
    { id: 'combo2', label: 'Combo 2' },
    { id: 'combo3', label: 'Combo 3', collapsed: true },
  ],
};
