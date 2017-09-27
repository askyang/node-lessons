"use strict";

const Readable = require('stream').Readable

// 底层数据
const dataSource = ['aaa', 'b', 'c']

const readable = Readable()

let n = 0;

readable._read = function () {
	setTimeout(function () {
		if (dataSource.length) {
			this.push(dataSource.shift())
		} else {
			this.push(null)
		}
	}.bind(this), 1000)
}

// 进入暂停模式
readable.pause()
readable.on('data', data => console.log('data: ' + data))

readable.on('readable', function () {
	readable.read()
})