'use strict';

const http = require('http');

let server = http.createServer(function(req, res){
    debugger;
    res.write('Hello World!');
    res.end();
});

server.listen(8033);

// 报文
