'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    gulp.src([
      'src/_reset.scss',
      'src/_settings.scss',
      'src/_functions.scss',
      'src/_mixins.scss',
      'src/_typography.scss'
      ])
      .pipe($.concat("guff.scss"))
      .pipe(gulp.dest('.'))
      .pipe($.size());
});

gulp.task('lib', function () {
    gulp.src([
      'src/_reset.scss',
      'src/_settings.scss',
      'src/_functions.scss',
      'src/_mixins.scss',
      'src/_typography.scss'
      ])
      .pipe($.concat("_guff.scss"))
      .pipe(gulp.dest('./lib/stylesheets/'))
      .pipe($.size());
});

gulp.task('demo', function () {
    gulp.src('demo/styles/main.scss')
      .pipe($.sass({
        style: 'compressed'
      }))
      .pipe(gulp.dest('demo/styles'))
      .pipe($.size());
});

gulp.task('docs', function(){
    gulp.src("./guff.scss")
    .pipe($.docco())
    .pipe(gulp.dest('./docs'))
});

gulp.task('default', ['styles','lib','demo','docs']);

gulp.task('connect', $.connect.server({
    root: ['demo'],
    port: 9000,
    livereload: true
}));

gulp.task('watch', ['connect'], function () {
    gulp.watch([
        'demo/*.html',
        'demo/styles/**/*.css',
        'src/**/*.scss'
    ], function(event) {
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });
    gulp.watch(['src/**/*.scss'], ['styles','lib','docs']);
    gulp.watch(['demo/styles/**/*.scss'], ['demo']);
});
