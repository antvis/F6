import * as Algorithm from '@antv/algorithm';
import { Component, jsx } from '@antv/f-engine';
import Global from './global';
import Util from './utils';

import { registerLayout, unRegisterLayout } from './layout';

import CircularLayout from './layout/circularLayout';
import ComboForceLayout from './layout/comboForceLayout';
import ConcentricLayout from './layout/concentricLayout';
import DagreLayout from './layout/dagreLayout';
import ForceAtlas2Layout from './layout/forceAtlas2Layout';
import ForceLayout from './layout/forceLayout';
import FruchtermanLayout from './layout/fruchtermanLayout';
import GridLayout from './layout/gridLayout';
import MdsLayout from './layout/mdsLayout';
import RadialLayout from './layout/radialLayout';

import { Canvas, Graph, registerCombo, registerEdge, registerNode, TreeGraph } from './ui/jsx';

export {
  jsx,
  Util,
  registerCombo,
  registerEdge,
  registerNode,
  Graph,
  TreeGraph,
  Canvas,
  Algorithm,
  Global,
  registerLayout,
  unRegisterLayout,
  CircularLayout,
  ComboForceLayout,
  ConcentricLayout,
  DagreLayout,
  ForceAtlas2Layout,
  ForceLayout,
  FruchtermanLayout,
  MdsLayout,
  RadialLayout,
  GridLayout,
  Component,
};

export default {
  jsx,
  Util,
  registerCombo,
  registerEdge,
  registerNode,
  registerLayout,
  unRegisterLayout,
  Graph,
  TreeGraph,
  Canvas,
  Algorithm,
  Global,
  CircularLayout,
  ComboForceLayout,
  ConcentricLayout,
  DagreLayout,
  ForceAtlas2Layout,
  ForceLayout,
  FruchtermanLayout,
  MdsLayout,
  RadialLayout,
  GridLayout,
  Component,
};
