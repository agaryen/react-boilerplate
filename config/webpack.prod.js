const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

const appDir = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDir, 'public/index.html'),
      minify: true,
      hash: true,
    }),
  ],
  stats: {
    assets: false,
    builtAt: true,
    cached: true,
    cachedAssets: false,
    children: false,
    timings: true,
    warnings: true,
    errors: true,
    errorDetails: true,
    entrypoints: true,
  },
});
