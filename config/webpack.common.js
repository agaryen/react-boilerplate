const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appDir = path.resolve(__dirname, '..');

module.exports = {
  context: appDir,
  entry: {
    app: './src/index.js',
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(appDir, 'build'),
  },
  resolve: {
    alias: {
      pages: path.resolve(appDir, 'src/pages'),
      modules: path.resolve(appDir, 'src/modules'),
      components: path.resolve(appDir, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(appDir, 'src'),
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(appDir, 'src'),
      },
    ],
  },
};
