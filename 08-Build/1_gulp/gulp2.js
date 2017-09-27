'use strict';
const gulp = require('gulp');

gulp.task('sync1', ()=> {
    console.log('我是第一个同步任务');
});

gulp.task('sync2', ()=> {
    console.log('我是第二个同步任务');
});

gulp.task('sync3', ()=> {
    console.log('我是第三个同步任务');
});

gulp.task('async', (done)=> {
    console.log('老大喊我去搬砖');
    setTimeout(()=> {
        console.log('我是一个异步任务');
        done();
    }, 500);
});

gulp.task('default', ['async', 'sync1', 'sync2', 'sync3'], ()=> {
    console.log('砖搬完了！');
});