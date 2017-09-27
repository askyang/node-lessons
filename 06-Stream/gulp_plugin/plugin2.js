"use strict";

const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-prefixer';

function gulpPrefixer(prefixText) {
	if (!prefixText) {
		throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
	}

	prefixText = new Buffer(prefixText);

	let stream = through.obj(function (file, enc, cb) {
		if (file.isStream()) {
			this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
			return cb();
		}

		if (file.isBuffer()) {
			file.contents = Buffer.concat([prefixText, file.contents]);
		}

		// 确保文件进入下一个 gulp 插件
		this.push(file);

		// 告诉 stream 引擎，我们已经处理完了这个文件
		cb();
	});

	return stream;
};

module.exports = gulpPrefixer;