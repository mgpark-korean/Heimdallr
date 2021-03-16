/**
 * @see : https://github.com/jantimon/html-webpack-plugin
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globalVariable = require('../utils/globalVariable');

const config = {
  inject: 'true',
  template: path.join(globalVariable.publicPath, 'index.html'),
  fileName: path.join(globalVariable.outputPath, 'index.html'),
  favicon: path.join(globalVariable.attetsLink, '/favicon.ico')
}

exports.htmlWebpackPlugin = new HtmlWebpackPlugin(config);
