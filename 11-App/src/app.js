"use strict";

const express = require('express');
const exp_hbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const conf = require('../config.js');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exp_hbs({
	defaultLayout: 'main',
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cookieSession({secret: 'test'}));

var sess = {
	secret: 'keyboard cat',
	cookie: {}
};

if (app.get('env') === 'production') {
	app.set('trust proxy', 1) // trust first proxy
	sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

router(app);

app.listen(conf.port, () => {
	console.log(`server listening port ${conf.port}`);
});