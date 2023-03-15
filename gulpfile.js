const gulp        = require('gulp')
const gutil       = require('gulp-util')
const concat      = require('gulp-concat')
const minifycss   = require('gulp-minify-css')
const uglify      = require('gulp-uglify')

const cssFolder = {
  source: 'src/css',
  target: 'public/css'
};
const jsFolder = {
  source: 'src/javascript',
  target: 'public/javascript'
};

function css () {
  return gulp.src([
    // cssFolder.source + '/normaset.css',
    cssFolder.source + '/*.css'
  ])
  .pipe(concat('main.css'))
  .pipe(minifycss({keepSpecialComments: false}))
  .pipe(gulp.dest(cssFolder.target))
}

function js () {
  return gulp.src([
    jsFolder.source + '/vendor/*.js',
    jsFolder.source + '/*.js'
  ])
  .pipe(concat('all.js'))
  .pipe(uglify({ mangle: true }).on('error', gutil.log))
  .pipe(gulp.dest(jsFolder.target))
}

function watch() {
  gulp.watch(cssFolder.source + '/*.css', css);
  gulp.watch(jsFolder.source + '/*.js', js);
}

const build = gulp.series(css, js)

exports.watch = watch
exports.default = build