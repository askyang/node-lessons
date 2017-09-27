var fs = require('fs');

console.log(Date.now());
fs.readFile('./02_buildin.js', function(err, data){
    if(err) return false;
    console.log(Date.now());
    console.log('read done!');

    fs.writeFile('./copy.js', data, (err) => {
        if(err) return false;
        console.log('write done!');
    });

    console.log('hi');
});

console.log(1);

console.log('ok');
