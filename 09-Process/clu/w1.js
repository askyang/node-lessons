"use strict";

const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(`handled by child: ${process.pid}\n`);
}).listen(9898);