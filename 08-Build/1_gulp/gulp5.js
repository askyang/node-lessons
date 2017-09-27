"use strict";

const gulp = require('gulp');
const through = require('through2');
const HTMLMinifier = require('html-minifier').minify;

gulp.task('default', ()=> {
    gulp.src('src/index.html')
        .pipe(through.obj((file, enc, done)=> {

            let contents = file.contents.toString(enc);

            let minified = HTMLMinifier(contents, {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            });

            file.contents = new Buffer(minified, enc);
            done(null, file, enc);
        }))
        .pipe(gulp.dest('dest'));
});
