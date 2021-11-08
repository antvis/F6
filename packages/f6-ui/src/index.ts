import htmlParse from './om/dom';
import cssParse from './om/css';
import styleParse from './om/style';
import { createUINode } from './ui-node';
import { registerUINode } from './ui-node';
import { registerAttr } from './parser/attr-parser';
import UIBaseNode from './ui-node/base';

function createUI(htmlString, cssString, group) {
  const tree = create(htmlString, cssString, true);
  tree.manualMount(group);
  return tree;
}

function createSegmentNode(htmlString, cssString, group?) {
  const tree = create(htmlString, cssString, false);
  if (group) tree.manualMount(group);
  return tree;
}

function create(htmlString, cssString, isNeedRoot = false) {
  const dom = htmlParse(htmlString, isNeedRoot);
  const cssTree = cssParse(cssString);
  const styleTree = styleParse(dom, cssTree);
  const tree = createUINode(styleTree.dom.tagName, styleTree);
  // 创建ui节点
  const stack = [[styleTree, tree]];
  while (stack.length) {
    const [node, parent] = stack.pop();
    for (let child of node.originChildren) {
      const uiNode = createUINode(child.dom.tagName, child);

      parent.children.push(uiNode);
      uiNode.setParent(parent);

      stack.push([child, uiNode]);
    }
  }
  return tree;
}
const f6ui = { UIBaseNode, createUI, registerUINode, registerAttr, createSegmentNode };
export default f6ui;
export { UIBaseNode, createUI, registerUINode, registerAttr, createSegmentNode };
