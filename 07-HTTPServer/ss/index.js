"use strict";

const http = require('http');
const connect = require('connect');
const conf = require('conf.json');

var app = connect();

// app.use();

let port = process.argv[2] || conf.port;

http.createServer(app).listen(port);