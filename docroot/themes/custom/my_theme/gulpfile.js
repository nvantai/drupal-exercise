'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


gulp.task('scss', gulp.series(function () {
    var processors = [
        autoprefixer({browsers: ['last 4 version']}),
        cssnano()
    ];
    return gulp.src('scss/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            errLogToConsole: true
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
}));