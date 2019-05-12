const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserJsPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJsPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
});
