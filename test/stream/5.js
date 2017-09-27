'use strict'
const split = require('split');
const tr = require('through2');

let n = 0;
process.stdin
    .pipe(split())
    .pipe(tr(function(chunk, encoding, next){
        if(n % 2 === 0){
            this.push(chunk.toString().toLowerCase());
        }else{
            this.push(chunk.toString().toUpperCase());
        }
        n++;
        this.push('\n');
        next();
    }))
    .pipe(process.stdout);
