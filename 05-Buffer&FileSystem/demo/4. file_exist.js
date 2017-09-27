var fs = require('fs');

fs.access('./test.md', function(err){
    console.log(err);
});

fs.access('./test2.md', function(err){
    console.log(err);
});
