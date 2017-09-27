'use strict';

const fs = require('fs');
const through = require('through2');

fs.createReadStream('./package.json')
    .pipe(through.obj((chunk, enc, done)=> {
        if (enc === 'buffer') {
            chunk = chunk.toString('utf-8');
            enc = 'utf-8';
        }
        done(null, chunk, enc);
    }))
    .pipe(through.obj((chunk, enc, done)=> {
        done(null, chunk.toUpperCase(), enc);
    }))
    .pipe(through.obj((chunk, enc, done)=> {
        chunk = chunk.split('').reverse().join('');
        done(null, chunk, enc);
    }))
    .pipe(fs.createWriteStream('./out.txt'));