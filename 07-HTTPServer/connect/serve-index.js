"use strict";

const http =require('http');
const connect = require('connect');
const serveIndex = require('serve-index');
const path = require('path');

let app = connect();

app.use(serveIndex(path.join(__dirname, 'public'), {'icons': true}));

app.use((req, res) => {
    res.end('Hello from connect!');
});

http.createServer(app).listen(3000);