var tr = require('through2');

process.stdin
    .pipe(tr(function(chunk, encoding, next){
        this.push(chunk.toString().toUpperCase());
        next();
    }))
    .pipe(process.stdout);
