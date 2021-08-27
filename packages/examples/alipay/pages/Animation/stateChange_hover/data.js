const nodes = [];
const edges = [];

// Center node
const centerNode = {
  id: 'center',
  x: 500,
  y: 300,
  type: 'center-node',
  size: 20,
};
nodes.push(centerNode);
// Add 4 nodes on the left
for (let i = 0; i < 4; i++) {
  const id = `left${i}`;
  nodes.push({
    id,
    x: 250,
    y: (i + 1) * 100 + 50,
    type: 'leaf-node',
  });
  edges.push({ source: id, target: 'center', type: 'can-running' });
}
// Add 6 nodes on the right
for (let i = 0; i < 6; i++) {
  const id = `right${i}`;
  nodes.push({
    id,
    x: 750,
    y: i * 100 + 50,
    type: 'leaf-node',
  });
  edges.push({ source: 'center', target: id, type: 'can-running' });
}

export { nodes, edges };
