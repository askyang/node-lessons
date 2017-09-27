"use strict";

const http = require('http');

var httpServer = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(`handled by child: ${process.pid}\n`);
	throw new Error('throw');
});

let worker;

process.on('message', (msg, tcpServer) => {

	if(msg == 'server'){
		worker = tcpServer;
		tcpServer.on('connection', socket => {
			httpServer.emit('connection', socket);
		});
	}
});

process.on('exit', () => {
	console.log(`worker: ${process.pid} exit`);
});

process.on('uncaughtException', (err) => {
	process.send('suicide');
	worker.close(() => {
		process.exit(1);
	});
});
