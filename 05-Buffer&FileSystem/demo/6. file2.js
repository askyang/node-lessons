var fs = require('fs');

fs.readdir('./', function(err, files){
    if(err){
        console.log(err);
        return false;
    }

    files.forEach(function(file, index){
        //console.log(file);
        fs.stat(file, function (err, info) {
            debugger;
            console.log(info);
        })
    });
});
