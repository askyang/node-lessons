"use strict";

const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus();

if (cluster.isMaster) {
	for (let i = 0; i < cpus.length; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});

} else {

	http.createServer((req, res) => {

		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('hello world\n');

	}).listen(9527);

}


