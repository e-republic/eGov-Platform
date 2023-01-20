const { merge } = require('webpack-merge');
const BundleTracker = require('webpack-bundle-tracker')
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  watchOptions: {
    ignored: /node_modules/,
    // poll: true,
  },

  devtool: 'inline-source-map',

  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
  plugins: [
    new BundleTracker({
      path: path.resolve(__dirname),
      filename: './webpack-stats.json',
      indent: 2,
      // publicPath: '/static/webpack_bundles/',
      // integrity: true,
    }),
  ]
});
