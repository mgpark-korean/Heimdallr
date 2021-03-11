const tools = require('./webpack/utils/tools');
const commonRules = require('./webpack/rules/common');
const htmlPlugins = require('./webpack/plugins/html');
const globalVariable = require("./webpack/utils/globalVariable");

module.exports = {
  entry: globalVariable.appPath,
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  output: {
    path: globalVariable.outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: tools.arrayFilterEmpty([
      commonRules.typescriptRule,
      commonRules.cssRule,
      commonRules.imageRule,
      commonRules.svgRule
    ]),
  },
  plugins: tools.arrayFilterEmpty([
    htmlPlugins.htmlWebpackPlugin
  ])
}

