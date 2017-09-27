"use strict";

const cpus = require('os').cpus();
const fork = require('child_process').fork;

for(let i = 0, len = cpus.length; i < len; i++){
	fork('./worker1.js');
}