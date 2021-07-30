import htmlParse from './om/dom';
import cssParse from './om/css';
import styleParse from './om/style';
import { createUINode } from './uiNode';
import { registerUINode } from './uiNode';
import { registerAttr } from './parser/attrParser';
import UIBaseNode from './uiNode/base';
import UITree from './uiNode/UITree';

function createUI(htmlString, cssString, group) {
  const tree = new UITree();
  tree.makeGNode(group);
  const root = createSegmentNode(htmlString, cssString);
  tree.appendChild(root);
  return tree;
}

function createSegmentNode(htmlString, cssString) {
  const dom = htmlParse(htmlString, false);
  const cssTree = cssParse(cssString);
  const styleTree = styleParse(dom, cssTree);
  const tree = createUINode(styleTree.dom.tagName, styleTree);
  // 创建ui节点
  const stack = [[styleTree, tree]];
  while (stack.length) {
    const [node, parent] = stack.pop();
    for (let child of node.originChildren) {
      const uiNode = createUINode(child.dom.tagName, child);
      parent.appendChild(uiNode);
      stack.push([child, uiNode]);
    }
  }
  return tree;
}

export { UIBaseNode, createUI, registerUINode, registerAttr, createSegmentNode };
