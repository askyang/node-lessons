"use strict";

const Duplex = require('stream').Duplex;

class Du extends Duplex {

	constructor(_readNum) {
		super();
		this._readNum = 0;
		this.container = [];
	}

	_read() {
		if (this._readNum > this.container.length) {
			this.push(null);
		} else {
			this.push(this.container[this._readNum++]);
		}
	}

	_write(buf, enc, next) {
		//process.stdout.write(buf.toString() + '\n');
		this.container.push(buf);
		next();
	}

}

module.exports = Du;
