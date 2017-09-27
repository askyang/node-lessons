"use strict";

const fs = require('fs');
const Tr = require('./tr1.js');
const Tr2 = require('./tr2.js');

var rotate = new Tr();

fs.createReadStream('./tr1.js')
		.pipe(rotate)
		.pipe(fs.createWriteStream('tr_ret1.js'));


fs.createReadStream('./tr1.js')
		.pipe(new Tr2(function (buf, enc, next) {
			let res = buf.toString().split('').map(c => {

				let code = c.charCodeAt(0);

				if (c >= 'a' && c <= 'z') {
					code -= 32;
				} else if (c >= 'A' && c <= 'Z') {
					code += 32;
				}

				return String.fromCharCode(code);
			}).join('');

			this.push(res);

			next();
		}))
		.pipe(fs.createWriteStream('./tr_ret2.js'));