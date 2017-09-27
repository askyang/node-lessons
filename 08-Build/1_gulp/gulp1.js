"use strict";
const gulp = require('gulp');

gulp.task('sync', ()=> {
    console.log('sync');
});

gulp.task('async', (done)=> {
    setTimeout(()=> {
        console.log('async');
        done();
    }, 500);
});

gulp.task('default', ()=> {
    console.log('default');
});