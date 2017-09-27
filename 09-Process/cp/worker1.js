"use strict";

const http = require('http');

let server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');
});

server.listen((1 + Math.random()) * 1000, '127.0.0.1');