"use strict";

const spawn = require('child_process').spawn;
const ps = spawn('ps', ['aux']);
const grep = spawn('grep', ['zsh']);

ps.stdout.on('data', data => {
	grep.stdin.write(data);
});

ps.on('close', code => {
	if (code !== 0) {
		console.log(`ps process exited with code ${code}`);
	}
	grep.stdin.end();
});

grep.stdout.on('data', data => {
	console.log(`${data}`);
});