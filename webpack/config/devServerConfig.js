const globalVariable = require('../utils/globalVariable');

const devServerConfig = {
  contentBase: globalVariable.appPath,
  compress: false,
  port: 9000,
  open: true,
  watchContentBase: true
}

module.exports = devServerConfig;
