var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var minifyCss = require('gulp-minify-css');

del.sync(['css/*']);

gulp.task('less', function() {
    gulp.src('less/test.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('min', function() {
    gulp.src('less/test.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('css/min'));
});



gulp.task('default', ['less', 'min']);
