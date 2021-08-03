const {watch, dest, series, parallel} = require('gulp');
const gulpUtil = require('gulp-util');
const webpack = require('webpack');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');

const DEV = 'dev';
const PROD = 'prod';

async function buildFile() {
  const config = process.argv[4];

  const configFile = (() => {
    if (config === DEV) {
      return require('./webpack/webpack.dev');
    }
    if (config === PROD) {
      return require('./webpack/webpack.prod');
    }

    return null;
  })();

  if (!configFile) {
    throw new gulpUtil.PluginError('build',
        'build Task commend :: Invalid argument!!\n'
        + gulpUtil.colors.yellow('gulp build --config [dev/prod]'));
  } else {
    webpack(configFile, function (err, stats) {
      if (err) {
        throw new gulpUtil.PluginError('build' + config, err);
      }
      gulpUtil.log('build:' + config + 'start\n',
          stats.toString({colors: true}));
    });
  }
}

function connectServer(port = 80) {
  livereload.listen();

  connect.server({
    port: port,
    root: 'dist',
    livereload: true,
    host: 'localhost'
  });
}

function watchFile(config) {
  watch('./src/*', () => {
    series(buildFile());
    dest('./dist/*').pipe(connect.reload());
  });
}

async function serve() {
  const config = process.argv[4];
  const port = process.argv[6];

  if (!config || !port || (config !== 'dev' && config !== 'prod') || isNaN(port * 1)) {
    throw new gulpUtil.PluginError('serve',
        'server Task commend :: Invalid argument!!\n'
        + gulpUtil.colors.yellow('gulp serve --config [dev/prod] --port [number]'));
  }
  watchFile(config);
  connectServer(port*1);
}

exports.serve = series(serve);
exports.build = series(buildFile);
exports.default = parallel(buildFile, serve)
