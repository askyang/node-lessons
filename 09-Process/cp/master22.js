"use strict";

const net = require('net');
const fork = require('child_process').fork;

let child1 = fork('worker2.js');
let child2 = fork('worker2.js');


let server = net.createServer();

server.on('connection', socket => {
	socket.end('handled by parent\n');
});

server.listen('54321', () => {
	child1.send('server', server);
	child2.send('server', server);
});