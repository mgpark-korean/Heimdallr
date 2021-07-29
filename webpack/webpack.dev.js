const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devServerConfig = require('./config/devServerConfig.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: devServerConfig
})
