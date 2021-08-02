const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')

const webpackDevConfig = require('./webpack/webpack.dev');
const webpackProdConfig = require('./webpack/webpack.prod');

// webapck build use development config file
gulp.task('build:dev', (callback) => {
  webpack(webpackDevConfig, function (err, stats) {
    if(err) throw new gulpUtil.PluginError('webpack development build', err);
    gulpUtil.log('webpack development build start\n', stats.toString({colors: true}));
    callback();
  });
});

// webapck build use production config file
gulp.task('build:prod', (callback) => {
  webpack(webpackProdConfig, function (err, stats) {
    if(err) throw new gulpUtil.PluginError('webpack production build', err);
    gulpUtil.log('webpack production build start\n', stats.toString({colors: true}));
    callback();
  });
});

gulp.task('server', ()=>{
  new WebpackDevServer(webpackDevConfig, {}).listen(9000, 'localhost', (err) => {
    if(err) throw new gulpUtil.PluginError('webpack-dev-server localhost:9000 Error!!', err);
    gulpUtil.log("webpack-dev-server localhost:9000", "http://localhost:9000/index.html")
  });
});
