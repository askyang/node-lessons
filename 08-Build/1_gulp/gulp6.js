'use strict';
const gulp = require('gulp');
const throuth = require('through2');
const fs = require('fs');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');
const less = require('gulp-less');
const cheerio = require('cheerio');
const HTMLMinifier = require('html-minifier').minify;
const path = require('path');

function minifyAndComboCSS(name, enc, files) {

    let content = '';

    files.forEach(css=> {
        let contents = fs.readFileSync(css, enc),
            minified = new CleanCSS().minify(contents).styles;
        content += minified;
    });

    if (content) {
        let combo = 'src/css/' + name;
        fs.writeFileSync(combo, content);
        gulp.src(combo)
            .pipe(gulp.dest('dest/css'));
    }

}

function minifyAndComboJS(name, enc, files) {

    let content = '';

    files.forEach(js=> {
        let minified = UglifyJS.minify(js).code;
        content += minified;
    });

    if (content) {
        let combo = 'src/js/' + name;
        fs.writeFileSync(combo, content);
        gulp.src(combo)
            .pipe(gulp.dest('dest/js'));
    }

}

gulp.task('build-js-lib', ()=> {
    return gulp.src('src/js/lib/**/*.js')
        .pipe(throuth.obj((file, enc, done)=> {
            let contents = file.contents.toString(enc),
                minified = UglifyJS.minify(contents, {
                    fromString: true
                }).code;

            file.contents = new Buffer(minified, enc);
            done(null, file, enc);
        }))
        .pipe(gulp.dest('dest/js/lib'));
});

gulp.task('less', ()=> {
    return gulp.src('src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

gulp.task('build-css-lib', ['less'], ()=> {
    return gulp.src('src/css/lib/**/*.css')
        .pipe(throuth.obj((file, enc, done)=> {
            let contents = file.contents.toString(enc),
                minified = new CleanCSS().minify(contents).styles;

            file.contents = new Buffer(minified, enc);
            done(null, file, enc);
        }))
        .pipe(gulp.dest('dest/css/lib'));
});

gulp.task('image', ()=> {
    gulp.src('src/image/**/*')
        .pipe(gulp.dest('dest/image'));
});

gulp.task('default', ['build-js-lib', 'build-css-lib', 'image'], ()=> {
    gulp.src('src/index.html')
        .pipe(throuth.obj((file, enc, done)=> {
            let contents = file.contents.toString(enc),
                $ = cheerio.load(contents, {decodeEntities: false});

            let links = $('link'),
                cssToCombo = [];

            for (let i = 0, len = links.length; i < len; i++) {
                let link = $(links[i]);

                if (link.attr('rel') === 'stylesheet') {
                    let href = link.attr('href');
                    if (/css\/(?!lib)/.test(href)) {
                        cssToCombo.push('src/' + href);
                        if (cssToCombo.length === 1) {
                            link.attr('href', 'css/index.min.css');
                        } else {
                            link.remove();
                        }
                    }
                }
            }
            minifyAndComboCSS('index.min.css', enc, cssToCombo);
            ////////////////////////////////////////////////////

            let scripts = $('script'),
                jsToCombo = [];

            for (let i = 0, len = scripts.length; i < len; i++) {
                let script = $(scripts[i]);

                if (script.attr('type') == null || script.attr('type') === 'text/javascript') {
                    let src = script.attr('src');
                    if (src) {
                        if (/js\/(?!lib)/.test(src)) {
                            jsToCombo.push('src/' + src);
                            if (jsToCombo.length == 1) {
                                script.attr('src', 'js/index.min.js');
                            } else {
                                script.remove();
                            }
                        }
                    }
                }
            }
            minifyAndComboJS('index.min.js', enc, jsToCombo);
            ////////////////////////////////////////////////////

            let imgs = $('img');
            for (let i = 0, len = imgs.length; i < len; i++) {
                let img = $(imgs[i]),
                    src = 'src/' + img.attr('src');
                if(/image\//.test(src)){
                    let stat = fs.statSync(src),
                        ext = path.parse(src).ext;

                    if(stat.size < 1024 * 5){
                        let head = ext === '.png'?
                            'data:image/png;base64' : 'data:image/jpeg;base64';
                        let dataurl = fs.readFileSync(src).toString('base64');

                        img.attr('src', head + ',' + dataurl);
                    }
                }

            }
            ////////////////////////////////////////////////////

            contents = $.html();

            let minified = HTMLMinifier(contents, {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            });

            file.contents = new Buffer(minified, enc);

            //file.contents = new Buffer(contents, enc);

            done(null, file, enc);
        }))
        .pipe(gulp.dest('dest'));
});