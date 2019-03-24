const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Project is running at http://localhost:3000'],
      },
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.resolve(appDir, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
    quiet: true,
  },
});
