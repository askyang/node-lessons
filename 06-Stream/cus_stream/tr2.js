"use strict";

const Transform = require('stream').Transform;

class Tr extends Transform{

	constructor(opt){
		super(opt);
	}

}

function through(construct) {
	return function (options, _transform, _flush) {
		if (typeof options === 'function') {
			_flush = _transform;
			_transform = options;
			options = {};
		}

		if (typeof _flush !== 'function') {
			_flush = null;
		}

		return construct(options, _transform, _flush);
	};
}

module.exports = through(function (options, _transform, _flush) {
	let tr = new Tr(options);

	tr._transform = _transform;
	if(_flush){
		tr._flush = _flush;
	}

	return tr;
});