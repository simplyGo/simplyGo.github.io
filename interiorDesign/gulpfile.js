"use strict";

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const multipipe = require('multipipe');
const browserSync = require('browser-sync');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function() {
  return multipipe(
    gulp.src('frontend/styles/**/style.less'),
      gulpIf(isDevelopment, sourcemaps.init()),
      less(),
      autoprefixer(),
      gulpIf(isDevelopment, sourcemaps.write()),
      gulp.dest('public/css')
  ).on('error', notify.onError());
});

gulp.task('assets', function() {
  return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
    .pipe(newer('public'))
    .pipe(debug({title: 'assets'}))
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
  return del('public');
});

gulp.task('build',
  gulp.series('clean', gulp.parallel('styles', 'assets'))
);

gulp.task('watch', function() {
  gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
  gulp.series('build',
    gulp.parallel('watch', 'serve'))
);
