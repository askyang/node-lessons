const util = require('util');
const EventEmitter = require('events');

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(content) {
    this.emit('data', content);
};

var stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (content) => {
  console.log(`Received data: "${content}"`);
});

stream.write('It works!'); // Received data: "It works!"
stream.write('It works!'); // Received data: "It works!"
stream.write('It works!'); // Received data: "It works!"
stream.write('It works!'); // Received data: "It works!"
stream.write('It works!'); // Received data: "It works!"
