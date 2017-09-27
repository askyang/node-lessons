"use strict";

const debug =require('degub')('connect:dispatcher');
const EventEmitter = require('events').EventEmitter;
const finalhandler = require('finalhandler');
const http = require('http');
const merge = require('util-merge');
const parseUrl = require('parseurl');

module.exports = createServer;

const env = process.env.NODE_ENV || 'development';

const proto = {};

function createServer() {
    function app(req, res, next){
        app.handle(req, res, next);
    }

    merge(app, proto);
    merge(app, EventEmitter.prototype);

    app.route = '/';
    app.stack = [];
    return app;
}

proto.use = function use(route, fn) {
    let handle = fn,
        path = route;

    if(typeof route !== 'string'){
        handle = route;
        path = '/';
    }

    if(typeof handle.handle === 'function'){
        let server = handle;
        server.route = path;
        handle = function (req, res, next) {
            server.handle(req, res, next);
        };
    }

    if(handle instanceof http.server){
        handle = handle.listeners('request')[0];
    }

    if(path[path.length - 1] === '/'){
        path = path.slice(0, -1);
    }

    
};