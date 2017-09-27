"use strict";

const gulp = require('gulp');
const webpack = require('webpack-stream');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// gulp.task('default', () => {
//
// 	return gulp.src(['app/main.jsx'])
// 			.pipe(webpack({
// 				entry: {
// 					'main': './app/main.jsx',
// 					'vendor': ['react', 'react-dom']
// 				},
// 				output: {
// 					filename: 'bundle.js'
// 				},
// 				plugins: [
// 					new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
// 					new ExtractTextPlugin('bundle.css')
// 				],
// 				module: {
// 					loaders: [
// 						{test: /\.jsx$/, loader: 'jsx-loader'},
// 						{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
// 					]
// 				}
// 			}))
// 			.pipe(gulp.dest('./dist'));
// });

gulp.task('default', () => {
	let config = require('./webpack.config');

	return gulp.src(['app/main.jsx'])
			.pipe(webpack(config))
			.pipe(gulp.dest('./build'));
});