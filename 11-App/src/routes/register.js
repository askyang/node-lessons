"use strict";

const router = require('express').Router();
const User = require('../models/user.js');

module.exports = () => {

	router.get('/', (req, res) => {
		res.render('register', {title: 'Register'});
	});

	router.post('/', (req, res) => {
		let username = req.body.username,
				password = req.body.password,
				password2 = req.body.password;

		if(!username){
			return res.render('register', {title: `Error: enter legal email address`});
		}

		if(!password || password.length < 2){
			return res.render('register', {title: `Error: enter legal password`});
		}

		if(password !== password2){
			return res.render('register', {title: `Error: enter same password`});
		}

		let user = new User({
			username: username,
			password: password
		});

		// user.find({username: username}, (err, user) => {
		// 	if(err){}
		//
		// 	if(user.length){
		//
		// 	}
		// });

		user.save((err, ret) => {

			if(err){
				return res.render('register', {title: `Error: ${err}`});
			}

			req.session.user = ret;

			res.redirect('/');
		});
	});

	return router;

};