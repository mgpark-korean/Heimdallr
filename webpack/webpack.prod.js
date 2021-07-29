const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const terserPluginConfig = require('./config/terserPluginConfig.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [terserPluginConfig]
  }
})
