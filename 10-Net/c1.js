"use strict";

const net = require('net');

let client = net.connect(54321);

let timer = null,
		counter = 0;

client.on('connect', () => {
	console.log('client connected!');

	client.write('Hi, I\'m client\n');

	timer = setInterval(() => {
		client.write('this is client');

		if(++counter == 5){
			client.end();
		}
	}, 1000);
});

client.on('data', data => {
	console.log(`got your message ${data}`);
});

client.on('end', () => {
	clearInterval(timer);
	console.log('bye');
});