"use strict";

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

function getFolders(root, pattern, deep, callback) {
	let stats = fs.statSync(root);

	if(!stats.isDirectory()) return;

	if(pattern.test(root)){

		callback(root);
	}

	if(!pattern.test(root) || deep){
		let files = fs.readdirSync(root);

		files.forEach((item) => {
			getFolders(path.join(root, item), pattern, deep, callback);
		});
	}
}

function clean(name) {
	let dir = name.replace(/([ \&])/g, '\\$1');
	exec(`rm -rf ${dir}`, (error, stdout, stderr) => {

		if (error !== null) {
			console.log(dir);
			console.log(`exec error: ${error}`);
		}
	});
}

getFolders(__dirname, /node_modules/, false, clean);

