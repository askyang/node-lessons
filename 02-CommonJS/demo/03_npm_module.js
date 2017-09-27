var less = require('less');
var fs = require('fs');

fs.readFile('./less/test.less', (err, data) => {
    if(err) return false;

    less.render(data.toString(), (e, output) => {
        fs.writeFile('./css/test.css', output.css, (err) => {
            if(err) return false;
            console.log('write done!');
        });
    });
});

// (name) => {console.log(name);}

// function(name){console.log(name);}

// less.render('.class { width: (1 + 1) }', function (e, output) {
//   console.log(output.css);
// });
