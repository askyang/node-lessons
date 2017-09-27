"use strict";

const Readable = require('stream').Readable;

class ToReadable extends Readable{

	constructor(iterable){
		super();
		this.iterable = iterable || 0;

		// this.iterator = new function *() {
		// 	yield * iterable;
		// };
	}

	_read(){
		//const res = this.iterator.next();

		// if(res.done){
		// 	this.push(null);
		// }else {
		// 	this.push(res.value + '\n');
		// }

		if(this.iterable > 100){
			this.push(null);
		}else {
			this.push(this.iterable++ + '\n');
		}

	}

}

module.exports = ToReadable;