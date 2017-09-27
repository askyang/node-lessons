'use strict';

const http = require('http');

let server = http.createServer(function(req, res){
    res.end('Hello World!');
});

server.listen(process.argv[2] || 9000);
