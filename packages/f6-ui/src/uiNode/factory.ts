const Node_Map = {};

export function registerUINode(tagName, nodeConstruct) {
  Node_Map[tagName] = nodeConstruct;
}

export function createUINode(tagName, ...args) {
  const consturct = Node_Map[tagName];
  if (!consturct) throw new Error(`找不到标签${tagName}的构造函数`);
  const uiNode = new consturct(...args);
  return uiNode;
}
