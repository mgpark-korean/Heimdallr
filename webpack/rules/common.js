// const loaderRules = require('./loader');
// import {babelLoader} from "./loader";

const commonRules = {
  typescriptRule: {
    test: /\.tsx?$/,
    exclude: /node_modules|test/,
    loader: 'babel-loader'
  },
  cssRule: {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  },
  imageRule: {
    test: /\.(png|jpe?g|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      outputPath: 'assets'
    }
  }
}

module.exports = commonRules;
