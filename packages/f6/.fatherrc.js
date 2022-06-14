import { visualizer } from 'rollup-plugin-visualizer';

const isBundleVis = !!process.env.BUNDLE_VIS;

export default  {
  umd: {
    name: 'F6',
    file: 'index',
    minFile: true
  },
  entry: ['src/index.ts'],
  overridesByEntry: {
    'src/index.ts': {
      umd: { name: 'F6', file: 'index' },
    },
    'src/ui/jsx/treeGraph.tsx': {
      umd: { name: 'F6TreeGraph', file: 'treeGraph' },
    },
  },
  extraBabelPlugins: ['@babel/plugin-proposal-class-static-block'],
  extraRollupPlugins: [...(isBundleVis ? [visualizer({
    gzipSize: true,
    open: true
  })] : [])],
};
