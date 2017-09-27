"use strict";

const gulp = require('gulp');
const plugin1 = require('./plugin1');
const plugin2 = require('./plugin2');

gulp.task('default', () => {
	gulp.src('src/*.js')
			.pipe(plugin1())
			.pipe(gulp.dest('./dist'));
});

gulp.task('plugin2', () => {
	gulp.src('src/*.js')
			.pipe(plugin2('test\n'))
			.pipe(gulp.dest('./dist'));
});