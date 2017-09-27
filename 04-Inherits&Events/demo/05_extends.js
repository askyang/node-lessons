'use strict'
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('data', () => {
  console.log('an event occurred!');
});

myEmitter.emit('data');
myEmitter.emit('data');
myEmitter.emit('data');
myEmitter.emit('data');
myEmitter.emit('data');
myEmitter.emit('data');
