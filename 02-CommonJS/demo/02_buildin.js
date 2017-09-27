var fs = require('fs');

fs.readFile('./02_buildin.js', function(err, data){
    if(err) return false;
    console.log('read done!');

    fs.writeFile('./copy.js', data, (err) => {
        if(err) return false;
        console.log('write done!');
    });

    console.log('hi');
});

console.log('ok');
