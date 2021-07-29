const tools = require('./utils/tools');
const commonRules = require('./rules/commonRules');
const htmlPlugins = require('./plugins/htmlWebpackPlugin');
const globalVariable = require("./utils/globalVariable");

module.exports = {
  entry: globalVariable.appPath,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  output: {
    path: globalVariable.outputPath,
    filename: 'bundle.js',
  },
  module: {
    rules: tools.arrayFilterEmpty([
      commonRules.typescriptRule,
      commonRules.cssRule,
      commonRules.imageRule
    ]),
  },
  plugins: tools.arrayFilterEmpty([
    htmlPlugins.htmlWebpackPlugin
  ])
}

