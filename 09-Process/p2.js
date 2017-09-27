"use strict";

const exec = require('child_process').exec;

let ls = exec('ls -al', {cwd: '/'});

ls.stdout.on('data', function(data) {
	console.log('stdout: ' + data);
});

ls.stderr.on('data', (data) => {
	console.log('stderr: ' + data);
});

ls.on('exit', (code) => {
	console.log(`Child exited with code ${code}`);
});