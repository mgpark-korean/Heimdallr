const TerserPlugin = require('terser-webpack-plugin');

const terserPluginConfig = new TerserPlugin({
  terserOptions: {
    format: {
      comments: false
    },
    mangle: {
      ie8: true,
      safari10: true
    }
  },
  extractComments: false,
  parallel: true,
  cache: false,
  include: /\.js$/
});

module.exports = terserPluginConfig;
