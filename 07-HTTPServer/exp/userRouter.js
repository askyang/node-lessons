'use strict';
const express = require('express');
let router2 = express.Router();

router2.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router2.get('/', function(req, res) {
  res.send('user home page');
});

router2.get('/about', function(req, res) {
  res.send('About user');
});

module.exports = router2;
