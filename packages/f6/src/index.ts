import {
  registerBehavior,
  registerCombo,
  registerEdge,
  registerNode,
  Arrow,
  Marker,
  Shape,
} from '@antv/f6-core';
import { ICanvas, IGroup, IShape } from '@antv/g-base';
import * as Algorithm from '@antv/algorithm';
import Graph, { registerGraph as oRegisterGraph } from './graph/graph';
import { Layout, Layouts, registerLayout, unRegisterLayout } from './layout';
import Global from './global';
import Util from './util';
import './element';
import './behavior';

const F6 = {
  version: Global.version,
  Graph,
  Util,
  Layout,
  Layouts,
  registerLayout,
  unRegisterLayout,
  Global,
  registerBehavior,
  registerCombo,
  registerEdge,
  registerNode,
  Algorithm,
  Arrow,
  Marker,
  Shape,
};

function registerExtenderWrapper<T1, T2>(
  registerExtender: (registerName: T1, registerFunction: T2, global: Object) => Object,
): (registerName: T1, registerFunction: T2) => Object {
  return function (...args) {
    return registerExtender.apply(null, [...args, F6]);
  };
}

const registerGraph = registerExtenderWrapper(oRegisterGraph);

(F6 as any).registerGraph = registerGraph;

export * from '@antv/f6-core';
export * from './types';
export * from './interface/graph';

export {
  Graph,
  Util,
  Layout,
  registerLayout,
  registerGraph,
  Global,
  Algorithm,
  Arrow,
  Marker,
  Shape,
  // 对外暴露 G-Base 的几个类型定义
  ICanvas,
  IGroup,
  IShape,
};

export default F6;
