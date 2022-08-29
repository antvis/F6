import {
  BaseElementFactory,
  EdgeType,
  ElementType,
  NodeType,
  registerElementFactory,
} from '../../item/factory';

interface Props {
  children?: any;
  [propName: string]: any;
}

type JSXElementType =
  | ((props: Props, context?: any) => any)
  | (new (props: Props, context?: any) => any);

const nodeFactory = new BaseElementFactory<JSXElementType & NodeType>();
const edgeFactory = new BaseElementFactory<JSXElementType & EdgeType>();
const comboFactory = new BaseElementFactory<JSXElementType & NodeType>();
registerElementFactory(ElementType.node, nodeFactory);
registerElementFactory(ElementType.edge, edgeFactory);
registerElementFactory(ElementType.combo, comboFactory);

export const registerNode = nodeFactory.register;

export const registerEdge = edgeFactory.register;

export const registerCombo = comboFactory.register;

export const unResigterNode = nodeFactory.unRegister;

export const unResigterEdge = edgeFactory.unRegister;

export const unResigterCombo = comboFactory.unRegister;

export const getNodeType = nodeFactory.getElement;

export const getEdgeType = edgeFactory.getElement;

export const getComboType = comboFactory.getElement;
