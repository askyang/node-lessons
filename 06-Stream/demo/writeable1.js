var Writable = require('stream').Writable;
var ws = Writable();
ws._write = function (chunk, enc, next) {
    console.log(chunk);
    next();
};

process.stdin.pipe(ws);
