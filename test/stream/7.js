'use strict'
const http = require('http');
const tr = require('through2');

let server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(tr(trUpper))
           .pipe(res);
    }else{
        res.end('GET');
    }
});

function trUpper(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

server.listen(process.argv[2]);
