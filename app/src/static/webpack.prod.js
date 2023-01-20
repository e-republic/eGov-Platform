const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker')
const path = require('path');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },

  devtool: false,

  performance: {
    hints: false,
  },
  plugins: [
    new BundleTracker({
      path: path.resolve(__dirname),
      filename: './webpack-stats-prod.json',
    }),
  ]
});
