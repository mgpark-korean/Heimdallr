const {watch,dest,series} = require('gulp');
const gulpUtil = require('gulp-util');
const webpack = require('webpack');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');

const DEV = 'dev';
const PROD = 'prod';

async function buildFile(config) {
  if(!config && process.argv.length >= 5) {
    config = process.argv[4];
  }

  const configFile = (() => {
    if(config === DEV) return require('./webpack/webpack.dev');
    if(config === PROD) return require('./webpack/webpack.prod');
  })();

  if(!configFile) {
    throw new gulpUtil.PluginError('build', 'build Task commend :: Invalid argument!!\n' + gulpUtil.colors.yellow('gulp build --config [dev/prod]'));
  } else {
    webpack(configFile, function (err, stats) {
      if (err) {
        throw new gulpUtil.PluginError('webpack build config:'+config, err);
      }
      gulpUtil.log('webpack build config:'+config+'start\n',
          stats.toString({colors: true}));
    });
  }
}

async function connectServer(port=80) {
  livereload.listen();

  connect.server({
    port: port,
    root: 'dist',
    livereload: true,
    host: 'localhost'
  });
}

async function watchFile(config) {
  watch('./src/*', ()=>{
    series(buildFile(config));
    dest('./dist/*').pipe(connect.reload());
  });
}

function serve() {
  const config = process.argv[4];
  const port = process.argv[6];

  if(!config || !port || config !== 'dev' || config !== 'prod' || isNaN(port*1)) {
    throw new gulpUtil.PluginError(
        'build',
        'server Task commend :: Invalid argument!!\n' + gulpUtil.colors.yellow('gulp connect --config [dev/prod] --port [number]'));
  } else {
    connectServer(port);
    watchFile(config);
  }
}


exports.server = series(serve);
exports.build = series(buildFile);
