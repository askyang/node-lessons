"use strict";

const DB = require('./mongodb.js');

const userSchema = new DB.Schema({
	username: String,
	password: String
}, {
	collection: 'users'
});

const userModel = DB.model('User', userSchema);

function User(user) {
	this.username = user.username;
	this.password = user.password;
}

User.prototype.save = function (done) {
	let user = {
		username: this.username,
		password: this.password
	};

	let newUser = new userModel(user);

	newUser.save((err, user) => {
		if (err) {
			return done(err);
		}

		done(null, user);
	});
};

User.get = (username, done) => {
	userModel.findOne({username: username}, (err, user) => {
		if (err) {
			return done(err);
		}

		done(null, user);
	});
};

module.exports = User;