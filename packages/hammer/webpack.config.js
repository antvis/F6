const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  entry: {
    hammer: './src/index.js',
  },
  output: {
    filename: '[name].min.js',
    library: 'hammer',
    libraryTarget: 'umd',
    path: resolve(process.cwd(), 'dist/'),
  },
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.optimize.AggressiveMergingPlugin()],
  devtool: 'source-map',
};
