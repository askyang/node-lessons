"use strict";

const homeRouter = require('./home.js');
const loginRouter = require('./login.js');
const registerRouter = require('./register.js');

module.exports = (app) => {
	app.use('/', homeRouter());
	app.use('/login', loginRouter());
	app.use('/register', registerRouter());
};