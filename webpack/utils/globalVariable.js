// import path from 'path';
const path = require('path')


const globalVariable = {
  rootDir: path.resolve(__dirname, '../../'),
  attetsLink: path.resolve(__dirname, '../../public/assets'),
  outputPath: path.resolve(__dirname, '../../dist'),
  appPath: path.resolve(__dirname, '../../src'),
  publicPath: path.resolve(__dirname, '../../public')
}
// export const rootDir = path.join(__dirname, '../../');
// export const attetsLink = path.join(rootDir, './public/assets');

module.exports = globalVariable;
