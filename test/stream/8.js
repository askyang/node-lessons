'use strict'
const request = require('request');

let s = request.post('http://localhost:8099');

process.stdin.pipe(s).pipe(process.stdout);
