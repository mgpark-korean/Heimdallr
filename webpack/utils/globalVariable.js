const path = require('path');
const constants = require('./gloabalConstants');


const globalVariable = {
  rootDir: path.resolve(__dirname, '../../'),
  attetsLink: path.resolve(__dirname, '../../public/assets'),
  outputPath: path.resolve(__dirname, '../../dist'),
  appPath: path.resolve(__dirname, '../../src'),
  publicPath: path.resolve(__dirname, '../../public'),
  isProdEnv: process.env.NODE_ENV === constants.prod,
  isDevEnv: process.env.NODE_ENV === constants.dev,
};

module.exports = globalVariable;
