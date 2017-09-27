"use strict";

const through = require('through-gulp');

module.exports = () => {
	let stream = through(function (file, encoding, callback) {
		if (file.isNull()) {
		}

		if (file.isBuffer()) {
			let contents = file.contents.toString('utf-8').toUpperCase();
			file.contents = new Buffer(contents, encoding);
		}

		if (file.isStream()) {
			console.log('stream');
		}

		// just pipe data next, or just do nothing to process file later in flushFunction
		// never forget callback to indicate that the file has been processed.
		this.push(file);
		callback();

	}, function (callback) {
		// just pipe data next, just callback to indicate that the stream's over
		this.push(null);
		callback();
	});

	return stream;
};