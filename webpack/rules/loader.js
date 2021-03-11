const path = require('path');
const globalVariable = require('../utils/globalVariable');
// import { join } from 'path';
// import {rootDir} from "../utils/globalVariable";

/**
 * @see : https://babeljs.io/docs/en/babel-preset-typescript
 * @type {{loader: string, option: {configFile: string}}}
 */

const loaderRules = {
  babel: {
    loader: 'babel-loader',
    options: {
      configFile: path.join(globalVariable.rootDir, '/.babelrc.js')
    }
  },
}

module.exports = loaderRules;
