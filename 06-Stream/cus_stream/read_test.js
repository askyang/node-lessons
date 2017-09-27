"use strict";

const ToReadable = require('./read1.js');

const iterable = function *(limit) {
	while(limit--){
		yield Math.random();
	}
}(100);

//const readable = new ToReadable(iterable);

const readable = new ToReadable(5);

readable.on('data', data => {
	process.stdout.write(data);
});

readable.on('end', () => {
	process.stdout.write('done\n');
});