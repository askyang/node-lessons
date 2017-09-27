"use strict";

console.log('child process...');

process.on('message', msg => {
	console.log(`child get message: ${msg}`);
});

setTimeout(() => {
	process.send('Hi, I\'m OK!');
}, 1000);