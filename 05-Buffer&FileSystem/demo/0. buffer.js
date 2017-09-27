const buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97; // 97 is ASCII a
}
console.log(buf.toString('ascii'));
  // Returns: 'abcdefghijklmnopqrstuvwxyz'
console.log(buf.toString('ascii',0,5));
  // Returns: 'abcde'
console.log(buf.toString('base64',0,5));
  // Returns: 'abcde'
console.log(buf.toString(undefined,0,5));
  // Returns: 'abcde', encoding defaults to 'utf8'
