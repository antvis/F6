const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

let entry = {
  f6Plugin: './src/index.ts',
};

module.exports = {
  entry,
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  output: {
    library: 'f6ui',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // babelrc: true,
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: process.env.ANALYZE
    ? [new Visualizer(), new BundleAnalyzerPlugin(), new webpack.optimize.AggressiveMergingPlugin()]
    : [new webpack.optimize.AggressiveMergingPlugin()],
  devtool: 'source-map',
};
