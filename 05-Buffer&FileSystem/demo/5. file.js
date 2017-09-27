var fs = require('fs');

fs.readFile('./test.md', function(err, data){
    debugger;
    if(err){
        console.log(err);
        return false;
    }

    console.log(`async:\n${data}`);
});

var text = fs.readFileSync('./test.md', 'utf8');
console.log(`sync:\n${text}`);

fs.writeFileSync('./test3.txt', '我是中国人。', 'utf8');
fs.writeFile('./test3.txt', '我是中国人!');
