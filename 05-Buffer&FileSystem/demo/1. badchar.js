var fs = require('fs');

var rs =  fs.createReadStream('test.md', {highWaterMark: 5});
rs.setEncoding('utf8'); // data事件传递的不再是Buffer，而是编码后的字符串

var content = '';
rs.on('data', function(chunk){
    content += chunk;
});

rs.on('end', function(){
    console.log(content);
});
