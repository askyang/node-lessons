var Readable = require('stream').Readable;

var rs = new Readable();
rs.push(new Buffer('Hello\n'));
rs.push(null);

rs.pipe(process.stdout);
console.log(1);
