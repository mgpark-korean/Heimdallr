const devServerConfig = require('./config/devServerConfig');

export default {
  watch: true,
  watchOptions: {
    ignore: /node_modules/
  },
  devServer: devServerConfig,
}
