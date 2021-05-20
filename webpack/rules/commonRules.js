const commonRules = {
  typescriptRule: {
    test: /\.tsx?$/,
    exclude: /node_modules|test/,
    loader: 'babel-loader'
  },
  cssRule: {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', {
      loader: 'postcss-loader',
      options: {
        plugins: function() {
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }]
  },
  imageRule: {
    test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'assets',
    }
  }
}

module.exports = commonRules;
