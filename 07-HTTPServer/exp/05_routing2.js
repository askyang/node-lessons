'use strict';

const express = require('express');

let app = express();

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

app.get(/xx/, function(req, res) {
  res.send('/xx/');
});

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);


app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
