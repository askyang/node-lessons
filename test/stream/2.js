var fs =require('fs');
// 0: node
// 1: __dirname
var path = process.argv[2];
fs.createReadStream(path).pipe(process.stdout);
