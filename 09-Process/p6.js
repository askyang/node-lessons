"use strict";

const fork = require('child_process').fork;

let child = fork('./child.js');

child.send('test');

child.on('message', msg => {
	console.log(`parent get message: ${msg}`);
});