"use strict";

const net = require('net');
const cpus = require('os').cpus();
const fork = require('child_process').fork;

let server = net.createServer();

server.listen('54321', () => {

	for(let i =0; i < cpus.length; i++){
		fork('worker3.js').send('server', server)
	}
	server.close();
});