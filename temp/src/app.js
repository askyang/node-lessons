"use strict";

const express = require('express');
const path = require('path');
const exp_hbs = require('express-handlebars');

const conf = require('../config');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exp_hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('home', {title: 'Home'});
});

app.listen(conf.port, () => {
  console.log(`server listening port ${conf.port}`);
});
