"use strict";

const cluster = require('cluster');
const cpus = require('os').cpus();

cluster.setupMaster({
	exec: './w1.js'
});

for (let i = 0; i < cpus.length; i++) {
	cluster.fork();
}
