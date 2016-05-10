var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var $ = require('gulp-load-plugins')();

var dist = './public/dist/';
var isDev = process.env.NODE_DEV !== 'production';


gulp.task('default', [ 'scripts']);

gulp.task('scripts', function () {
  var webpackDevConfig = require('./webpack.config.dev');
  var webpackProConfig = require('./webpack.config.prod');

  var webpackConfig = isDev?webpackProConfig:webpackDevConfig
  var entry = webpackConfig.entry;
  return gulp.src(entry)
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(isDev ? $.util.noop() : $.uglify())
    .pipe(gulp.dest(dist))
    .pipe($.size({
      title: 'js'
    }))
});

gulp.task('build', ['scripts'])
