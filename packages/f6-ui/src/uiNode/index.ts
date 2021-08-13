import { registerUINode, createUINode } from './factory';
import UIDivNode from './UIDivNode';
import UITextNode from './UITextNode';
import UIShapeNode from './UIShapeNode';
import UIImageNode from './UIImageNode';
import UIRootNode from './UIRootNode';

registerUINode('div', UIDivNode);
registerUINode('text', UITextNode);
registerUINode('shape', UIShapeNode);
registerUINode('image', UIImageNode);
registerUINode('root', UIRootNode);

export { createUINode, registerUINode };
