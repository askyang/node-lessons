"use strict";

const gulp = require('gulp');

gulp.task('src-dist', ()=> {
    gulp.src('./*.js')
        .pipe(gulp.dest('./js'));
});

gulp.task('default', ['src-dist']);