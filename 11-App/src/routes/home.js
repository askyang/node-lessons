"use strict";

const router = require('express').Router();

module.exports = () => {

	router.get('/', (req, res) => {

		if(!req.session.user){
			res.redirect('/login');
		}

		res.render('home', {
			title: 'Home',
			name: req.session.user.username
		});
	});

	return router;

};