"use strict";

const net = require('net');
const fork = require('child_process').fork;

let child = fork('worker2.js');

let server = net.createServer();

server.on('connection', socket => {
	socket.end('handled by parent\n');
});

server.listen('54321', () => {
	child.send('server', server);
});