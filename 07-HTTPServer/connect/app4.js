"use strict";

const http =require('http');
const connect = require('connect');
const fs = require('fs');
const url = require('url');
const path = require('path');
const serveIndex = require('serve-index');
const public_folder = path.join(__dirname, 'public');


let app = connect(),
    filePath = '',
    stats = null;

app.use((req, res, next) => {
    let pathName = url.parse(req.url).pathname;
    filePath = path.join(public_folder, path.normalize(pathName.replace(/\.\./g, '')));
    next();
});

app.use((req, res, next) => {
    try{
        stats = fs.statSync(filePath);
        next();
    }catch(ex){
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('404');
    }
});

app.use(serveIndex(public_folder, {'icons': true}));

app.use((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.createReadStream(filePath).pipe(res);
});

http.createServer(app).listen(3000);