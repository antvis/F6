import { visualizer } from 'rollup-plugin-visualizer';

const isBundleVis = !!process.env.BUNDLE_VIS;

export default  {
  umd: {
    name: 'F6',
    file: 'index',
    minFile: true
  },
  entry: [
    'src/index.ts',
    'src/ui/jsx/treeGraph.tsx',
    'src/ui/jsx/graph.tsx',
    'src/layout/circularLayout.ts',
    'src/layout/comboForceLayout.ts',
    'src/layout/concentricLayout.ts',
    'src/layout/dagreLayout.ts',
    'src/layout/forceAtlas2Layout.ts',
    'src/layout/forceLayout.ts',
    'src/layout/fruchtermanLayout.ts',
    'src/layout/gForceLayout.ts',
    'src/layout/gridLayout.ts',
    'src/layout/mdsLayout.ts',
    'src/layout/radialLayout.ts',
    'src/layout/randomLayout.ts',
],
  overridesByEntry: {
    'src/index.ts': {
      umd: { name: 'F6', file: 'index' },
    },
    // 'src/ui/jsx/treeGraph.tsx': {
    //   umd: { name: 'TreeGraph', file: 'treeGraph' },
    // },
    // 'src/ui/jsx/graph.tsx': {
    //   umd: {name: 'Graph', file:'graph'}
    // },
    'src/layout/circularLayout.ts': {
      umd: {name: 'CircularLayout', file:'circularLayout'}
    },
    'src/layout/comboForceLayout.ts': {
      umd: {name: 'ComboForceLayout', file:'comboForceLayout'}
    },
    'src/layout/concentricLayout.ts': {
      umd: {name: 'ConcentricLayout', file:'concentricLayout'}
    },
    'src/layout/dagreLayout.ts': {
      umd: {name: 'DagreLayout', file:'dagreLayout'}
    },
    'src/layout/forceAtlas2Layout.ts': {
      umd: {name: 'ForceAtlas2Layout', file:'forceAtlas2Layout'}
    },
    'src/layout/forceLayout.ts': {
      umd: {name: 'ForceLayout', file:'forceLayout'}
    },
    'src/layout/fruchtermanLayout.ts': {
      umd: {name: 'FruchtermanLayout', file:'fruchtermanLayout'}
    },
    'src/layout/gForceLayout.ts': {
      umd: {name: 'GForceLayout', file:'gForceLayout'}
    },
    'src/layout/gridLayout.ts': {
      umd: {name: 'GridLayout', file:'gridLayout'}
    },
    'src/layout/mdsLayout.ts': {
      umd: {name: 'MdsLayout', file:'mdsLayout'}
    },
    'src/layout/radialLayout.ts': {
      umd: {name: 'RadialLayout', file:'radialLayout'}
    },
    'src/layout/randomLayout.ts': {
      umd: {name: 'RandomLayout', file:'randomLayout'}
    },
    
  },
  extraBabelPlugins: ['@babel/plugin-proposal-class-static-block'],
  extraRollupPlugins: [...(isBundleVis ? [visualizer({
    gzipSize: true,
    open: true
  })] : [])],
};
