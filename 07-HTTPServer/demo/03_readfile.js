'use strict';

/*
* assert root path is __dirname
*/

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let server = http.createServer(function(req, res){

    let pathName = url.parse(req.url).pathname; // /package.json

    // __dirname: ./Users/Samaritan/Desktop/book/07 HTTP Server/demo
    // pathName: /package.json
    let fileDiskPath = path.join(__dirname, pathName);

    let body = fs.createReadStream(fileDiskPath);

    body.pipe(res);

});

server.listen(process.argv[2] || 9000);
