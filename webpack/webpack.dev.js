const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map'
})
