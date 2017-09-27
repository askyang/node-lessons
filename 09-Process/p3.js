"use strict";

const execFile = require('child_process').execFile;

let child = execFile('node', ['--version']);

child.stdout.on('data', data => {
	console.log(data);
});

let ls = execFile('/bin/ls', ['-al', '/']);

ls.stdout.on('data', data => {
	console.log(data);
});