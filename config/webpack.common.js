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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(appDir, 'src'),
      },
    ],
  },
};
