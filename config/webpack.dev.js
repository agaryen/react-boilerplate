const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

const appDir = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDir, 'public/index.html'),
      hash: true,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.resolve(appDir, 'public'),
    compress: true,
    hot: true,
    stats: 'minimal',
  },
});
