var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var rs =  fs.createReadStream('test.md');

var content = [],
    size = 0;
rs.on('data', function(chunk){
    content.push(chunk); // Buffer
    size += chunk.length;
});

rs.on('end', function(){
    var buf = Buffer.concat(content, size);
    console.log(decoder.write(buf));
});
