"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const through = require('through2');

gulp.task('src-dist', ()=> {
    gulp.src('./**/*.md')
        .pipe(gulp.dest('./md'));
});

gulp.task('concat', ()=> {
    gulp.src('./**/package.json')
        .pipe(concat('all.txt'))
        .pipe(gulp.dest('./'));
});
