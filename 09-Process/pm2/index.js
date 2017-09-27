"use strict";

const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(process.pid + '\n');
}).listen(9527);