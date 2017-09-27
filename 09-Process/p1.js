"use strict";

const exec = require('child_process').exec;

let ls = exec('ls -al', {cwd: '/'}, (err, stdout, stderr) => {

	console.log(`stdout: ${stdout}`);

	console.log(`stderr: ${stderr}`);

	if (err !== null) {
		console.log(`exec error: ${err}`);
	}

});

ls.on('exit', (code) => {
	console.log(`Child exited with code ${code}`);
});