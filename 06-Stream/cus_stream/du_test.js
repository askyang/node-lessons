"use strict";

const Du1 = require('./du1');

let du = new Du1();

du.on('finish', () => {
	console.log('done!');
});

du.write('a');
du.write('b');
du.write('c');

du.end();

du.on('data', data => {
	console.log(`ondata: ${data.toString()}`);
});
