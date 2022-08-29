import { EdgeConfig, IPoint, NodeConfig } from '../../types';

export enum ElementType {
  node = 'node',
  edge = 'edge',
  combo = 'combo',
}

export interface NodeType {
  getAnchorPoints?: (config: NodeConfig) => number[][];
  [key: string]: any;
}

export interface EdgeType {
  getControlPoints?: (config: EdgeConfig) => IPoint[];
  [key: string]: any;
}

export class BaseElementFactory<T extends NodeType | EdgeType> {
  list: Record<string, T> = {};

  getElement = (type) => {
    return this.list[type];
  };

  register = (type: string, element: T) => {
    if (!element) return;
    this.list[type] = element;
  };

  unRegister = (type: string, T) => {
    delete this.list[type];
  };
}

const elementFactory: Record<string, BaseElementFactory<any>> = {};

export const getFactory = (type) => {
  return elementFactory[type];
};

export function registerElementFactory<T extends NodeType | EdgeType>(
  type: ElementType,
  factory: BaseElementFactory<T>,
) {
  elementFactory[type] = factory;
}
