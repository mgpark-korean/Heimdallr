const path = require('path')

const globalVariable = {
  rootDir: path.resolve(__dirname, '../../'),
  attetsLink: path.resolve(__dirname, '../../src/assets'),
  outputPath: path.resolve(__dirname, '../../dist'),
  appPath: path.resolve(__dirname, '../../src'),
  publicPath: path.resolve(__dirname, '../../src'),
}
module.exports = globalVariable;
