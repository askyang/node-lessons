"use strict";

const Transform = require('stream').Transform;

class Rotate extends Transform {

	constructor(n) {
		super();
		this.offset = n || 32;
	}

	_transform(buf, enc, next) {
		let res = buf.toString().split('').map(c => {

			let code = c.charCodeAt(0); // 'abc'.charCodeAt(1); //98

			if (c >= 'a' && c <= 'z') {
				code -= this.offset;
			} else if (c >= 'A' && c <= 'Z') {
				code += this.offset;
			}

			return String.fromCharCode(code);
		}).join('');

		this.push(res);

		next();
	}

}

module.exports = Rotate;