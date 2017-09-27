'use strict'
var fs = require('fs');

var fcopy = function(){
    console.log(1,Date.now());
    var source = fs.readFileSync('./copy.js', {encoding: 'utf-8'});
    console.log(2,Date.now());
    fs.writeFileSync('./files/copy2.js', source);
    console.log(3,Date.now());
};

var scopy = function(){
    var rs = fs.createReadStream('./source.mp4'),
        ws = fs.createWriteStream('./files/xxx.mp4'),
        counter = 0;

    rs.on('data', function(chunk){
        ws.write(chunk);
    });

    rs.on('end', function(){
        ws.end();
    });
};


var scopy2 = function(){
    var rs = fs.createReadStream('./source.mp4'),
        ws = fs.createWriteStream('./files/xxx.mp4');

    rs.on('data', function(chunk){
        if(ws.write(chunk) === false){
            rs.pause();
        }
    });

    ws.on('drain', function(){
        rs.resume();
    });

    rs.on('end', function(){
        ws.end();
    });
};

var pipe = function(){
    fs.createReadStream('./source.mp4')
      .pipe(fs.createWriteStream('./files/xxx.mp4'));
}

var pcopy = function(){
    var out = process.stdout,
        rs = fs.createReadStream('./source.mp4'),
        ws = fs.createWriteStream('./files/source.mp4'),
        stat = fs.statSync('./source.mp4'),
        total = stat.size,
        length = 0,
        last = 0,
        start = Date.now();

    rs.on('data', function(chunk){
        length += chunk.length;

        if(ws.write(chunk) === false){
            rs.pause();
        }
    });

    ws.on('drain', function() {
        rs.resume();
    });

    rs.on('end', function () {
        ws.end();
    });

    setTimeout(function display(){
        var percent = ((length / total) * 100).toFixed(2),
            speed = ((length - last) * 10 / 1000000).toFixed(2);

        last = length;

        out.clearLine();
        out.cursorTo(0);
        out.write(`${length}KB\t/ ${total}KB\t ${percent}%\t ${speed}MB/s`);

        if(length < total){ //未完成
            setTimeout(display, 100);
        }else{
            var end = Date.now();
            console.log(`\n共用时: ${(end - start)/1000}秒`);
        }
    }, 500);
};

pcopy();
