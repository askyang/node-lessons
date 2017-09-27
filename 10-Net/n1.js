"use strict";

const net = require('net');

let timer = null;

let server = net.createServer(socket => {

	socket.write('Welcome to server!\n');

	timer = setInterval(() => {
		socket.write('this is server\n');
	}, 800);

	socket.on('data', data => {
		console.log(`got your message: ${data}`);
	});

	socket.on('end', () => {
		clearInterval(timer);
		console.log('disconenct!');
	});

});

server.listen(54321, () => {
	console.log('server start at 54321');
});
