var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

console.log(new Buffer('这是个测试。'));
// <Buffer e8 bf 99 e6 98 af e4 b8 aa e6 b5 8b e8 af 95 e3 80 82>

var buf1 = new Buffer([0xe8, 0xbf, 0x99, 0xe6, 0x98]);
console.log(decoder.write(buf1));

var buf2 = new Buffer([0xaf, 0xe4, 0xb8, 0xaa, 0xe6, 0xb5, 0x8b, 0xe8, 0xaf, 0x95, 0xe3, 0x80, 0x82]);
console.log(decoder.write(buf2));
