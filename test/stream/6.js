'use strict'
const concat = require('concat-stream');

process.stdin.pipe(concat((contents) => {
    var result = contents.toString().split('').reverse().join('');
    console.log(result);
}));
