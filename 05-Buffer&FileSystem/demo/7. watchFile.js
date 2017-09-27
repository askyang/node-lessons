var fs = require('fs');

fs.watchFile('./test3.txt', function (curr, prev) {
    debugger;
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
});
